# S02C — Técnicas Avançadas de Engenharia de Contexto

!!! info "Semana 2 · Bloco 1 · Aula 3"
    **Ementa:** Engenharia de Contexto Avançada — evolução da disciplina, context rot, 10 falhas, custos, Kiro, context editing, sumarização, memory offloading, DSPy, Council, LLM as Judge, LLMs em recomendação.

---

## Aula 3 — Engenharia de Contexto Avançada

### Evolução da Disciplina

| Período | Disciplina | Foco |
|---------|-----------|------|
| 2023 | **Engenharia de Prompt** | Selecionar palavras e exemplos certos para elicitar outputs em uma única chamada |
| 2025 | **Engenharia de Contexto** | Popular dinamicamente a janela de contexto com as informações certas para um agente |
| 2026 | **Engenharia de Scaffolding** | Projetar o scaffold, orquestração e ferramentas que elicitam outputs de uma aplicação agêntica |

!!! info "Definição"
    **Context Engineering**: a disciplina de curar sistematicamente quais informações um modelo de linguagem recebe para maximizar performance enquanto minimiza custos e erros. Três eixos: **Recuperar** (buscar info certa no momento certo), **Formatar** (estruturar e apresentar ao modelo), **Manter** (gerenciar ao longo de interações).

#### Origem do Termo

| Quando | Quem | Contribuição |
|--------|------|-------------|
| 2023 | Dan Shipper (Every Media) | "Knowledge Orchestration" identificado como gargalo crítico |
| Abr 2025 | Ankur Goyal (Braintrust) | Cunhou "Context Engineering": trazer a informação certa no formato certo |
| Mid 2025 | Tobi Lütke (Shopify) | Popularizou: "descreve melhor a habilidade central — a arte de fornecer contexto" |
| Mid 2025 | Andrej Karpathy (ex-Tesla) | "A delicada arte e ciência de preencher o contexto com exatamente a informação certa" |

Após 2025, líderes endossaram: Harrison Chase (LangChain), Walden Yan (Cognition/Devin), Simon Willison (Django).

> **Distinção essencial:** Prompt Engineering → escrever prompts eficazes | Context Engineering → gerenciar automaticamente o contexto em sistemas agênticos

---

### O Problema: Context Rot

A performance do modelo **piora** conforme o contexto cresce — mesmo com janelas de milhões de tokens.

=== "A Promessa"
    - Janelas de contexto enormes (milhões de tokens)
    - Menos alucinações com mais informação
    - Menos esforço de engenharia
    - Caber tudo no prompt de uma vez

=== "A Realidade"
    - Nem todos os tokens são processados igualmente
    - Tarefas com 10k tokens são menos confiáveis
    - Custos sobem exponencialmente
    - 10 falhas distintas podem comprometer o resultado

!!! warning "Sistemas agênticos são não-determinísticos — o gerenciamento de contexto deve ser automático."

---

### As 10 Falhas de Contexto

| # | Falha | Descrição |
|---|-------|-----------|
| 01 | **Context Overflow** | Entrada excede o limite da janela |
| 02 | **Token Costs** | Custos crescem exponencialmente |
| 03 | **Context Distraction** | Modelo esquece instrução original |
| 04 | **Lost in the Middle** | Ignora info no meio do contexto |
| 05 | **Prompt Injection** | Instruções maliciosas no contexto |
| 06 | **Context Confusion** | Tools irrelevantes causam erros |
| 07 | **Context Fragmentation** | Info relacionada espalhada e perdida |
| 08 | **Context Clash** | Novas infos conflitam com antigas |
| 09 | **Context Drift** | Perde o objetivo original ao longo do tempo |
| 10 | **Context Poisoning** | Alucinação contamina contexto futuro |

#### Detalhes — Parte 1 (01-03)

| Falha | O que é | Exemplo | Risco |
|-------|---------|---------|-------|
| **Context Overflow** | Entrada excede a janela máxima, forçando truncagem silenciosa ou erro | 45 msgs → 4.150 tokens → `context_length_exceeded` | Perda silenciosa de informações |
| **Token Costs** | Todo o histórico é reprocessado a cada mensagem — custos quadráticos | Turno 1: $0,005 → Turno 50: $0,250 → Total: $6,38 | Contas inesperadamente altas |
| **Context Distraction** | Contexto longo faz o modelo "esquecer" instruções | 8 e-mails casuais → notificação legal informal com emojis | Ignora instrução original |

#### Detalhes — Parte 2 (04-06)

| Falha | O que é | Exemplo | Risco |
|-------|---------|---------|-------|
| **Lost in the Middle** | Modelos prestam mais atenção ao início e fim, ignorando o meio | 9 docs sobre Projeto Phoenix → bug report na posição 6 ignorado | Info crítica no meio tem alta chance de ser ignorada |
| **Prompt Injection** | Conteúdo malicioso engana o modelo para exfiltrar dados | E-mail com instrução HTML oculta → modelo envia todos os e-mails para atacante | Qualquer fonte externa é superfície de ataque |
| **Context Confusion** | Ferramentas irrelevantes levam o modelo a escolhas erradas | 88 tools disponíveis → pergunta '2+2' → modelo chama search_web ao invés de calculator | Tudo no prompt afeta a resposta |

#### Detalhes — Parte 3 (07-10)

| Falha | O que é | Exemplo | Risco |
|-------|---------|---------|-------|
| **Fragmentação** | Informações relacionadas espalhadas pelo contexto | Dados de cliente em msgs 1, 15, 28 e 45 → proposta ignora prazo e problemas | Modelo falha em conectar os pontos |
| **Context Clash** | Informações novas conflitam com suposições anteriores | Modelo escolhe e-mail no turno 1 → pesquisa mostra 73% preferem telefone → continua com e-mail | Modelo não revisa decisões anteriores |
| **Context Drift** | Perde o objetivo original conforme novas informações acumulam | Instrução 'siga PEP-8' → 50 mensagens depois → código não-PEP-8 | Objetivo se dilui com o tempo |
| **Context Poisoning** | Uma alucinação entra no contexto e contamina interações seguintes | Agente Pokémon alucina item 'TEA' → escreve meta falsa → 100+ turnos perseguindo impossível | Erro se propaga indefinidamente |

---

### Custos de Token — Exemplo Prático

```
Model cost: $1.25/M input, $10/M output
Turn 1:  Process   4,000 tokens (4K new)                = $0.005
Turn 2:  Process   8,000 tokens (4K previous + 4K new)  = $0.010
Turn 3:  Process  12,000 tokens (8K previous + 4K new)  = $0.015
...
Turn 25: Process 100,000 tokens (96K previous + 4K new) = $0.125
Turn 50: Process 200,000 tokens (196K previous + 4K new)= $0.250
Total session cost: $6.38
```

!!! warning "LLMs não leem mentes — erram pelos mesmos motivos que humanos erram quando mal informados."

---

### Kiro — Agentic IDE da AWS

IDE agêntico da AWS que transforma prompts em specs estruturadas, código, testes e documentação. Fork do VS Code, powered by Claude Sonnet.

| Pilar | Descrição |
|-------|-----------|
| **01 Spec-Driven** | Em vez de gerar código direto, força clareza primeiro: requisitos → design → tarefas. Evita technical debt |
| **02 Steering Files** | Arquivos .md que definem produto, estrutura e tech stack. Injetados automaticamente no contexto |
| **03 Agent Hooks** | Ações agênticas disparadas por eventos de arquivo (criar, salvar, deletar). Ex: gerar testes ao salvar |
| **04 MCP Nativo** | Conecta a docs externas, APIs, bancos e bases de conhecimento internas. Contexto sempre atualizado |

#### Vibe Coding vs Spec-Driven

=== "⚡ Vibe Coding"
    - ❌ Prompt → código direto
    - ❌ Rápido no começo, lento depois
    - ❌ Código sem documentação
    - ❌ Inconsistência entre componentes
    - ❌ Difícil de manter em equipe
    - ✅ Ótimo para protótipos rápidos

=== "📋 Spec-Driven (Kiro)"
    - ✅ Requisitos → design → tarefas → código
    - ✅ Documentação gerada junto com o código
    - ✅ Consistência entre todos os componentes
    - ✅ Fácil de manter e escalar em equipe
    - ✅ Testes automáticos via hooks
    - ✅ Mais lento no início, muito mais rápido depois

#### Specs, Steering e Hooks

=== "📋 Specs"
    Geradas a partir de um prompt de feature. 3 arquivos markdown:

    - `requirements.md` — User stories + critérios de aceitação (sintaxe EARS)
    - `design.md` — Stack, arquitetura, diagramas, schemas
    - `tasks.md` — Lista rastreável de tarefas de implementação

=== "🎯 Steering"
    Arquivos .md em `.kiro/steering/` — injetados automaticamente em todo contexto:

    - `product.md` — Visão, features, público-alvo do produto
    - `structure.md` — Organização de diretórios, padrões de código
    - `tech.md` — Stack tecnológica e ferramentas do projeto

=== "⚡ Hooks"
    Ações agênticas disparadas por eventos de arquivo ou manualmente:

    - ⚡ Ao salvar código → Gerar/atualizar testes unitários
    - ⚡ Ao criar arquivo → Adicionar ao .gitignore se sensível
    - ⚡ Manualmente → Revisar segurança do código

---

### Técnicas de Context Engineering em Profundidade

| Técnica | Descrição |
|---------|-----------|
| **Context Editing** | Detecta mudança de tópico e remove contexto irrelevante. Reduz de 17.452 → 9.156 tokens |
| **Summarization** | 2.847 tokens de relatório → 156 tokens de resumo. Redução de 95% mantendo fatos essenciais |
| **Memory Offloading** | Agente escreve regras em scratchpad e lê depois. Evita que políticas se percam em 15+ mensagens |
| **Prompt Optimization** | Prompt de 1.784 tokens com 64% de acurácia → 43 tokens com 67%. Redução via análise de erros |
| **Few-Shot Learning** | Sem exemplos: lista sem formato. Com 2 exemplos JSON: extrai entidades corretamente |
| **RAG + Tool Loadout** | RAG: busca vetorial em 10.000 docs → 3 chunks relevantes. Tool Loadout: 124 ferramentas → 3 selecionadas via RAG |

#### Context Editing — 4 Operações

O LLM não tem memória — ele só vê a lista de mensagens que você manda. Context Editing é modificar essa lista antes de cada chamada.

| # | Operação | Descrição | Exemplo |
|---|----------|-----------|---------|
| 01 | **Editar** | Corrigir uma mensagem errada no histórico | Usuário digitou "#123" mas era "#321" |
| 02 | **Remover** | Apagar conteúdo sensível antes de persistir | Senha ou cartão digitado por engano |
| 03 | **Injetar** | Inserir contexto novo em qualquer posição | Dados da conta buscados no banco após login |
| 04 | **Comprimir** | Resumir mensagens antigas para liberar espaço | Histórico de 20 msgs → resumo de 100 tokens |

```python
# Editar mensagem errada
def editar(hist, i, novo):
    hist[i]["content"] = novo

# Remover dado sensível
def remover(hist, i):
    hist.pop(i)

# Injetar contexto novo
def injetar(hist, texto, pos=0):
    hist.insert(pos, {"role": "user", "content": texto})

# Comprimir histórico
def comprimir(hist, llm):
    antigas = hist[:-6]
    resumo = llm.resumir(antigas)
    return [resumo] + hist[-6:]
```

!!! tip "Regra de Ouro"
    Você controla 100% da lista. O LLM só vê o que você deixar passar.

---

### Sumarização de Contexto

Quando o histórico cresce demais, resumir é melhor do que truncar — preserva o sentido sem desperdiçar tokens.

```
HISTÓRICO COMPLETO → LLM RESUME → RESUMO COMPACTO → NOVO CONTEXTO
(20 msgs, ~4.000 tokens)            (1 msg, ~200 tokens)   (Resumo + 6 recentes)
```

#### 3 Tipos de Resumo

| Tipo | Descrição | Quando usar |
|------|-----------|-------------|
| **Resumo Progressivo** | A cada N mensagens, comprima as mais antigas em um bloco de memória | Conversas longas contínuas |
| **Resumo por Intenção** | Extraia só o que importa: decisões tomadas, dados coletados, pendências | Agentes com objetivo claro |
| **Resumo Hierárquico** | Mantenha resumos em níveis — sessão atual, histórico da semana, perfil fixo | Assistentes pessoais |

#### Sumarização — Geral vs Específica vs Hierárquica

=== "Geral"
    Resume o texto sem considerar a tarefa final.
    ✅ Reutilizável entre aplicações
    ⚠️ Pode omitir exatamente o detalhe relevante

=== "Específica"
    Resume com a tarefa final em mente.
    ✅ Retém exatamente o que importa para sua aplicação
    ⚠️ Se a tarefa mudar, resume tudo do zero

=== "Hierárquica"
    Texto > janela? Divida → resuma partes → resuma os resumos. Repita.
    ✅ Custo ∝ texto original
    ⚠️ Cuidado com "telefone sem fio" em hierarquias profundas

!!! info "RAG faz zoom-in (snippets mais relevantes). Sumarização faz zoom-out (condensa grandes blocos). Compressão nunca é lossless — o tipo de sumarização importa muito."

---

### Memory Offloading

Mover memórias da janela de contexto para armazenamento externo — e buscá-las só quando necessário.

=== "Contexto Ativo (~1.500 tokens)"
    - System prompt
    - Perfil do usuário
    - Última intenção detectada
    - 3-6 mensagens recentes
    - Resultado da busca na memória

=== "Memória Externa (ilimitada)"
    - **Episódica** — Histórico de conversas anteriores
    - **Semântica** — Fatos sobre o usuário e preferências
    - **Procedural** — Passos de processos já executados
    - **Cache** — Respostas de chamadas de ferramentas

---

### DSPy — Prompt Optimization Automático

DSPy (Stanford) trata o prompt como um programa compilável. Você define métricas e o framework otimiza os prompts automaticamente.

=== "Prompt Engineering Manual"
    - Escrever prompt à mão
    - Testar, observar, ajustar
    - Escolher exemplos few-shot manualmente
    - Repetir até ficar bom o suficiente

=== "DSPy — Compilação de Prompt"
    - Definir: entradas, saídas e métrica
    - Otimizador testa variações automaticamente
    - Prompt final gerado pelo framework

```python
import dspy

class Suporte(dspy.Signature):  # define entradas e saídas
    pergunta = dspy.InputField()
    resposta = dspy.OutputField()

otimizador = dspy.BootstrapFewShot(metric=acuracia)
programa = otimizador.compile(dspy.Predict(Suporte), trainset=exemplos)
```

#### DSPy no Ecossistema de Context Engineering

Context Engineering e DSPy são camadas complementares — você gerencia **O QUE** entra no contexto; o DSPy otimiza **COMO** esse conteúdo é formulado.

| Camada | Função |
|--------|--------|
| **DSPy** | Otimiza a formulação do prompt automaticamente |
| **Prompt Optimization** | Reduzir tokens, clareza, estrutura |
| **Context Editing** | Editar, injetar, remover, comprimir |
| **Context Building** | RAG, memória, histórico, tool loadout |

**Otimizadores do DSPy:**

| Otimizador | Função |
|-----------|--------|
| `BootstrapFewShot` | Seleciona os melhores exemplos few-shot automaticamente |
| `MIPRO` | Otimiza instruções e exemplos via Bayesian search |
| `BetterTogether` | Combina fine-tuning com otimização de prompt |

#### DSPy — Vantagens

| Vantagem | Descrição |
|----------|-----------|
| **Automatização do ajuste** | O otimizador encontra a melhor formulação com base em dados reais |
| **Prompts que evoluem com o modelo** | Trocou de GPT-4 para Claude? Basta recompilar |
| **Few-shot baseado em evidência** | BootstrapFewShot testa combinações e seleciona os que melhoram a métrica |
| **Separação de lógica e prompt** | Você escreve código, não strings. Facilita versionamento e testes |

#### DSPy — Limitações e Quando Usar

=== "⚠️ Limitações"
    - Exige exemplos rotulados (trainset com inputs e outputs esperados)
    - Compilação é lenta e cara (dezenas de chamadas ao LLM)
    - Curva de aprendizado (modelo mental diferente do prompt engineering clássico)
    - Não substitui bom design (se a arquitetura for ruim, o resultado ainda será ruim)

=== "✅ Quando Usar"
    - Pipeline já funcionando, quer extrair mais performance
    - Tarefa bem definida com métrica mensurável (F1, acurácia)
    - Vai trocar ou atualizar o modelo com frequência
    - ❌ Está prototipando — use prompt manual primeiro
    - ❌ Não tem exemplos rotulados disponíveis

---

### Council — Múltiplos Agentes, Uma Decisão

Padrão onde vários LLMs respondem independentemente ao mesmo problema e uma camada de consenso escolhe ou sintetiza a melhor resposta.

```
PERGUNTA DO USUÁRIO → AGENTE A (GPT-4o) ─┐
                    → AGENTE B (Claude)  ──┼→ CONSENSO → RESPOSTA FINAL
                    → AGENTE C (Gemini)  ──┘
```

#### Métodos de Consenso

| Método | Descrição | Quando usar |
|--------|-----------|-------------|
| **Votação Majoritária** | Cada agente vota em uma opção. A mais votada vence | Classificação e decisões binárias |
| **Síntese por LLM** | Um LLM árbitro lê as respostas de todos e gera uma síntese | Respostas abertas |
| **Self-Consistency** | Mesma pergunta, múltiplos samples. A resposta mais frequente é escolhida | Reduz alucinação |

!!! tip "Quando usar Council"
    Decisões de alto risco, tarefas criativas, redução de viés de um único modelo.

---

### LLM as a Judge — Avaliação Automática

Usar um LLM como avaliador de saídas de outro LLM. Substitui avaliação humana em escala — o juiz lê a resposta e atribui notas segundo critérios definidos.

```
RESPOSTA DO SISTEMA → LLM JUIZ → VEREDICTO
"O pedido #321 foi       Critérios:           Fidelidade: 9/10
 enviado ontem."         - Fidelidade (RAG)   Correção: 8/10
                         - Correção factual   Alucinação: nenhuma
                         - Ausência de        Tom: adequado
                           alucinação
                         - Tom e adequação
```

---

### LLMs em Recomendação

=== "Filtro Colaborativo (tradicional)"
    Algoritmo matemático — padrão de uso:

    - Compara seu histórico com o de outros usuários
    - Encontra usuários similares → recomenda o que eles leram
    - Ignora qualquer texto, contexto ou preferência pessoal
    - Entrada: 'Leu Moby Dick + Huck Finn'
    - Saída: To Kill a Mockingbird (razoável, mas genérico)

=== "LLM com Contexto Rico"
    Linguagem natural — senso comum humanizado:

    - Lê texto messy sobre você e faz inferências
    - Combina dados demográficos + preferências + experiências
    - Explica o raciocínio da recomendação
    - Entrada: histórico + hobbies + viagem recente + idade
    - Saída: recomendações muito mais precisas e personalizadas

!!! info "Diferencial"
    LLMs processam dados textuais variados — mas é sua função fornecer esses dados! A qualidade do prompt define a qualidade da recomendação.

---

## Referências Bibliográficas

- BERRYMAN, John; ZIEGLER, Albert. **Prompt Engineering for LLMs: The Art and Science of Building Large Language Model–Based Applications**. Sebastopol: O'Reilly Media, 2024.
- HUYEN, Chip. **AI Engineering: Building Applications with Foundation Models**. Sebastopol: O'Reilly Media, 2024.
- TAYLOR, Mike. **Context Engineering with DSPy**. O'Reilly Learning Platform. Sebastopol: O'Reilly Media. Disponível em: [https://learning.oreilly.com](https://learning.oreilly.com).
- ANTHROPIC. **Prompt Engineering Interactive Tutorial**. GitHub repository. Disponível em: [https://github.com/anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial).
- Phil Schmid. **Memory in Agents**. Disponível em: [https://www.philschmid.de/memory-in-agents](https://www.philschmid.de/memory-in-agents).

---

[:octicons-pencil-24: Teste seus conhecimentos — Quiz B1S02](quiz-b1s02.md){ .md-button }
