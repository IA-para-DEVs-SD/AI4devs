# S02 — Memória e Orquestração

!!! info "Semana 2 · Bloco 2"
    **Ementa:** Padrões de agentes (ReAct, Planner-Executor, Toolformer), RAG com Qdrant, tipos de memória (Working, Episodic, Semantic, Procedural), MemoryBank com Ebbinghaus, Context Engineering, orquestração multi-agente e pipeline prático.

## Referências Bibliográficas

| Livro | Autor | Editora |
|-------|-------|---------|
| Prompt Engineering for LLMs | John Berryman & Albert Ziegler | O'Reilly, 2024 |
| AI Engineering: Building Applications with Foundation Models | Chip Huyen | O'Reilly, 2024 |
| Context Engineering with DSPy | Mike Taylor | O'Reilly (Early Release) |

---

## Aula 1 — Padrões de Agentes

### Os 3 Padrões Fundamentais

| Padrão | Filosofia | Quando usar |
|--------|-----------|-------------|
| **ReAct** | Pensar → Agir → Observar (loop) | Tarefas exploratórias, sem plano claro |
| **Planner-Executor** | Planejar tudo → Executar etapas | Tarefas estruturadas, multi-step |
| **Toolformer** | Modelo aprende sozinho a usar tools | Pesquisa, modelos auto-suficientes |

---

### ReAct — Reasoning + Acting

O agente alterna entre **pensar** e **agir** em ciclos até resolver o problema.

```
Thought → Action → Observation → Thought → Action → Observation → ... → Final Answer
```

!!! tip "Ciclo ReAct"
    1. **Thought**: o modelo raciocina sobre o que precisa fazer
    2. **Action**: chama uma tool (busca, cálculo, API)
    3. **Observation**: recebe o resultado da tool
    4. Repete até ter confiança na resposta

#### Implementação com Gemini (Function Calling)

```python
import google.generativeai as genai

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash",
    tools=[search_web, calculate, get_weather]
)

chat = model.start_chat(enable_automatic_function_calling=True)
response = chat.send_message("Qual a temperatura em Florianópolis agora?")
```

O Gemini executa o ciclo ReAct automaticamente quando `enable_automatic_function_calling=True` — ele decide qual tool chamar, observa o resultado e continua raciocinando.

---

### Planner-Executor — Separação de Responsabilidades

Divide o problema em duas fases distintas:

=== "Planner"
    ```python
    # O Planner gera um plano estruturado
    plan = llm.generate(f"""
    Tarefa: {user_task}
    Gere um plano passo a passo em JSON:
    [{{"step": 1, "action": "...", "tool": "..."}}, ...]
    """)
    ```

=== "Executor"
    ```python
    # O Executor segue o plano mecanicamente
    for step in plan:
        result = execute_tool(step["tool"], step["action"])
        results.append(result)
    ```

!!! warning "Trade-off"
    O Planner-Executor é mais previsível, mas **não se adapta** se algo der errado no meio. O ReAct é mais flexível mas pode entrar em loops.

---

### Toolformer — O Modelo Aprende a Usar Tools

Diferente dos anteriores, o Toolformer não recebe tools via prompt — ele foi **treinado** (SFT/RL) para saber quando e como chamar APIs.

| Aspecto | ReAct / Planner | Toolformer |
|---------|-----------------|------------|
| Como aprende tools | Descrição no prompt | Treinamento (SFT/RL) |
| Flexibilidade | Alta (qualquer tool) | Limitada ao treinamento |
| Custo de prompt | Alto (tool descriptions) | Baixo (já sabe) |
| Exemplo | GPT-4 + function calling | Gorilla, ToolLLM |

---

### Quando Usar Cada Padrão

| Cenário | Padrão Recomendado |
|---------|-------------------|
| Pergunta exploratória, sem passos claros | ReAct |
| Tarefa com etapas bem definidas | Planner-Executor |
| Alto volume, custo de prompt importa | Toolformer |
| Precisa se adaptar a erros no meio | ReAct |
| Pipeline determinístico | Planner-Executor |


---

## Aula 2 — RAG e Memória

### O Problema: LLMs Não Sabem de Tudo

LLMs têm limitações fundamentais de conhecimento:

- **Dados desatualizados** — treinamento tem data de corte
- **Dados privados** — não conhecem documentos internos da empresa
- **Alucinação** — inventam respostas quando não sabem

!!! info "Solução"
    **RAG (Retrieval-Augmented Generation)**: buscar informação relevante e injetar no prompt antes de gerar a resposta.

---

### Embeddings — Texto Vira Vetor

Embeddings transformam texto em vetores numéricos de alta dimensão, onde textos semanticamente similares ficam próximos no espaço vetorial.

```python
from openai import OpenAI

llm = OpenAI()

def embed(text: str) -> list[float]:
    return llm.embeddings.create(
        input=text,
        model="text-embedding-3-small"
    ).data[0].embedding

# Resultado: vetor com 1536 dimensões
vec = embed("Flamingos são rosas por causa dos carotenoides")
# [0.23, -0.81, 0.45, 0.12, -0.67, 0.38, ...]
```

#### Similaridade por Cosseno

Para comparar dois vetores, usamos **cosine similarity**:

- `1.0` = idênticos semanticamente
- `0.0` = sem relação
- `-1.0` = opostos

```python
from numpy import dot
from numpy.linalg import norm

def cosine_similarity(a, b):
    return dot(a, b) / (norm(a) * norm(b))
```

---

### RAG em Detalhe — Duas Fases

#### Fase 1 — Ingestion (feita uma vez)

| Etapa | Ação | Descrição |
|-------|------|-----------|
| 1 | **Documentos** | PDFs, docs, base de código, tickets |
| 2 | **Chunking** | Dividir em pedaços menores (parágrafos, sentenças) |
| 3 | **Embedding** | Modelo transforma cada chunk em vetor numérico |
| 4 | **Vector DB** | Vetores armazenados para busca rápida por similaridade |

#### Fase 2 — Inference (a cada query)

| Etapa | Ação | Descrição |
|-------|------|-----------|
| 1 | **Embed query** | Query do usuário vira vetor com o mesmo modelo |
| 2 | **Similarity search** | Compara vetor da query com vetores do banco — retorna top-K |
| 3 | **Augment prompt** | Documentos relevantes + query combinados no prompt |
| 4 | **Generate** | LLM gera resposta baseada no contexto recuperado |

---

### Qdrant — Vector Database

Qdrant é um vector database open-source de alta performance. Armazena vetores + metadata e permite busca por similaridade em milissegundos.

#### Conceitos Fundamentais

| SQL | Qdrant | Descrição |
|-----|--------|-----------|
| Table | **Collection** | Agrupa pontos com mesma dimensão de vetor |
| Row | **Point** | Um registro: id único + vetor + payload |
| Column | **Payload field** | Metadata associada (texto, fonte, data, tags) |
| WHERE clause | **Filter** | Combina busca vetorial com filtros no payload |

#### Anatomia de um Point

```json
{
  "id": "a3f8b2c1-...",
  "vector": [0.23, -0.81, 0.45, 0.12, -0.67, 0.38, ...],
  "payload": {
    "text": "Flamingos são rosas por causa dos carotenoides na dieta",
    "source": "docs/animais.pdf",
    "page": 42,
    "agent": "scrum",
    "tags": ["flamingo", "biologia"]
  }
}
```

#### Pipeline RAG Completo com Qdrant

```python
from qdrant_client import QdrantClient
from openai import OpenAI

qdrant = QdrantClient("localhost", port=6333)
llm = OpenAI()

def embed(text):
    return llm.embeddings.create(
        input=text,
        model="text-embedding-3-small"
    ).data[0].embedding

# Inference: query → busca → resposta
def rag_query(user_query):
    query_vec = embed(user_query)

    # Similarity search no Qdrant
    results = qdrant.search(
        collection_name="empresa_docs",
        query_vector=query_vec,
        limit=3
    )
    context = " ".join([r.payload["text"] for r in results])

    # Augmented prompt
    response = llm.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": f"Contexto: {context}"},
            {"role": "user", "content": user_query}
        ]
    )
    return response.choices[0].message.content
```

!!! tip "Boas Práticas RAG"
    - **Chunking com overlap** — evita cortar informação no meio
    - **Mesmo modelo de embedding** sempre (ingestion = inference)
    - **Payload rico** em metadata — facilita filtros depois
    - **limit=3-5** — mais que isso polui o contexto


---

### Por que Memória Importa

LLMs são entidades esquecidas por natureza — **stateless**. Cada chamada começa do zero. Sem memória, não há agente — apenas um chatbot glorificado.

| Sem memória... | Consequência |
|----------------|-------------|
| Sem assistente pessoal | Não lembra seu nome, preferências, stack |
| Sem agente de código | Não entende a codebase inteira, começa do zero |
| Ações repetidas | Pode rodar a mesma operação duas vezes |

!!! warning "Definição ampla de memória"
    Memória não é só "lembrar conversas". Inclui: histórico de ações, informação externa (docs, banco), armazenar novo conhecimento gerado, e lógica application-specific.

---

### Tipos de Memória — Human-Inspired

A memória de agentes segue os tipos de memória humana (Cognitive Architectures for Language Agents):

| Tipo | Escopo | Humano | Agente | Exemplo |
|------|--------|--------|--------|---------|
| **Working Memory** | Short-term (sessão) | Info temporária para decisão | Histórico da conversa atual | `messages[]` passados ao LLM |
| **Episodic Memory** | Long-term (persistente) | Eventos passados | Ações tomadas e resultados | Log de tool calls, decisões |
| **Semantic Memory** | Long-term (persistente) | Conhecimento do mundo | Base de conhecimento externa | Vector database (Qdrant), RAG |
| **Procedural Memory** | Fixo (treinamento) | Como fazer coisas | Parâmetros do modelo + system prompt | System prompt, pesos do LLM |

---

### Short-Term Memory — Conversation History

O LLM não "lembra" — ele é alimentado com o histórico completo da conversa a cada chamada. **Stateless por natureza; stateful por engenharia.**

```python
messages = [
    {"role": "system", "content": "Você é um assistente..."},
    {"role": "user", "content": "Adoro flamingos."},
    {"role": "assistant", "content": "Legal! Flamingos são lindos."},
    {"role": "user", "content": "Por que eles são rosas?"},
]
# LLM responde "flamingo" — não porque lembrou,
# mas porque o histórico foi injetado no prompt
```

#### O Problema: Context Window

À medida que a conversa cresce, o histórico não cabe mais no contexto — respostas cortadas ou erros.

#### 3 Estratégias de Gerenciamento

| # | Estratégia | Como funciona | Prós | Contras |
|---|-----------|---------------|------|---------|
| 1 | **Trimming** | Remove as primeiras mensagens quando fica grande | Simples | Perde contexto antigo |
| 2 | **Summarização** | LLM sumariza o histórico após cada turno | Eficiente | Custo de LLM call extra |
| 3 | **Janela deslizante** | Últimas N conversas + resumo do anterior | Equilibrado | Mais complexo |

!!! tip "Recomendação"
    Comece com **trimming** (simples). Evolua para **janela deslizante** quando precisar de contexto histórico sem explodir tokens.

---

### Long-Term Memory — RAG

**Retrieval-Augmented Generation (RAG)**: a forma mais comum de dar memória de longo prazo a um LLM.

O RAG funciona como **Semantic Memory** — o agente busca conhecimento externo relevante e injeta no prompt antes de gerar a resposta. Veja a seção anterior para implementação completa.


---

### MemoryBank — Memória que Esquece e Reforça

MemoryBank aplica a **Curva do Esquecimento de Ebbinghaus** a um RAG dinâmico: memórias acessadas frequentemente persistem; as não acessadas são gradualmente removidas.

#### O Problema do RAG Tradicional

| Problema | Descrição |
|----------|-----------|
| Armazena tudo | Guarda memórias indefinidamente, sem critério de relevância |
| Acumula ruído | Com o tempo, memórias irrelevantes poluem o contexto |
| Não aprende | Sistema estático — não evolui com o uso real |

#### Como Funciona — Metadados por Memória

Cada memória mantém metadados que controlam seu ciclo de vida:

| Campo | Descrição |
|-------|-----------|
| `last_accessed_at` | Quando a memória foi usada pela última vez |
| `access_count` | Quantas vezes foi recuperada no total |
| `avg_score` | Média de relevância nas buscas |

!!! info "Regra"
    Esses três campos juntos definem se uma memória deve crescer, decair ou ser removida.

#### Atualização em Tempo Real

Durante a busca, memórias relevantes são imediatamente reforçadas:

```python
for result in top_k:
    if result.score > threshold:
        update_memory(result)  # Reforça a memória usada
```

#### Lógica de Retenção — 3 Fatores

| Fator | Efeito | Descrição |
|-------|--------|-----------|
| **Frequência ↑** | Mais Relevante | Memórias acessadas frequentemente ganham peso |
| **Recência ↑** | Mais Relevante | Acesso recente aumenta prioridade na recuperação |
| **Score ↑** | Mais Confiável | Alta similaridade média indica memória de qualidade |

#### Fórmula de Decaimento (Ebbinghaus)

Memórias não acessadas perdem relevância exponencialmente:

$$
decay = e^{(-\lambda \times tempo\_sem\_acesso)}
$$

| Variável | Significado |
|----------|-------------|
| `e` | Base natural — curva de decaimento contínua |
| `λ (lambda)` | Taxa de esquecimento — quão rápido uma memória decai |
| `tempo_sem_acesso` | Dias/horas desde o último acesso |
| `decay ∈ [0, 1]` | 0 = esquecida totalmente, 1 = fresca na memória |

#### Benefícios

| Benefício | Descrição |
|-----------|-----------|
| ✅ Reduz Ruído | Contexto limpo, sem memórias obsoletas |
| ✅ Melhor Qualidade | Respostas mais precisas com memórias de alto score |
| ✅ Aprende com Uso Real | Sistema evolui organicamente conforme é utilizado |
| ✅ Sem Crescimento Infinito | Memórias sem uso são descartadas automaticamente |

!!! warning "Pinned Memories"
    Nem tudo que não é acessado é irrelevante! Regras de negócio, contextos críticos e configurações devem usar `pinned = true` — excluídas do processo de decaimento e remoção automática.

---

### Agentic RAG — O Agente Controla a Memória

=== "RAG Clássico"
    Passo estático antes do LLM. O modelo **não tem controle** sobre o que é buscado — um script decide. Apenas uma busca, resultado passado direto.

=== "Agentic RAG"
    O agente decide **quando** buscar, em **qual fonte**, **quantas vezes**, e se o resultado é suficiente. A busca é uma **tool** — o agente tem agência sobre a memória.

#### Fluxo do Agentic RAG

```
Query → Agente planeja → Busca 1 (Qdrant) → Avalia → Busca 2 (Web/API) → Responde
```

O agente pode:

- Decidir quais fontes consultar e em qual ordem
- Avaliar se o resultado é suficiente
- Fazer segunda busca em fonte diferente se necessário
- Gerar resposta com contexto completo

#### A-MEM — Memória Inspirada em Zettelkasten

| Princípio | Descrição |
|-----------|-----------|
| **Atomicidade** | Cada nota contém apenas 1 unidade de conhecimento (1 interação) |
| **Hypertextual** | Notas são linkadas entre si por similaridade semântica |
| **Evolutiva** | Novas memórias atualizam tags e descrições das antigas |

---

### Context Engineering — O Próximo Nível

=== "Prompt Engineering (antes)"
    Otimizar system prompt e user prompt.
    Foco: **como perguntar** ao LLM.

=== "Context Engineering (agora)"
    Otimizar **TODO** o contexto: memória, tools, histórico, docs, planos.
    Foco: **o que colocar, onde e como**.

#### 4 Estratégias de Otimização

| # | Estratégia | Descrição |
|---|-----------|-----------|
| 01 | **Context Tracking & Storage** | Tool usage, reasoning steps, intenção do usuário, snapshots de bases |
| 02 | **Context Selection (Re-ranking)** | RAG retorna top-K → Re-ranker refina por relevância considerando query + docs |
| 03 | **Context Compression (MMR)** | Resumir histórico com LLM, evitar docs redundantes, balancear relevância + diversidade |
| 04 | **Context Ordering** | LLMs atendem mais ao início e fim. Info crítica → começo ou fim do prompt |

---

### Context Ordering & Compression — Detalhes

#### Lost-in-the-Middle

LLMs prestam mais atenção ao **início** e ao **fim** do prompt. Informação colocada no meio é frequentemente ignorada (Liu et al., 2023).

```
✅ Início (lembrado) → ❌ Meio (esquecido) → ✅ Fim (lembrado)
```

!!! tip "Regra prática"
    Coloque as informações mais importantes no **começo** (system prompt) ou no **fim** (instrução final). Nunca no meio de um contexto longo.

!!! warning "Context Rot (Chroma, 2025)"
    Encher o contexto com informação demais — mesmo relevante — degrada a performance. **Quantidade ≠ qualidade.**

#### Maximal Marginal Relevance (MMR)

MMR balanceia **relevância** e **diversidade** dos documentos recuperados. Evita que o LLM receba 5 documentos dizendo a mesma coisa.

| Etapa | Ação |
|-------|------|
| 1. Relevance vector | Calcula similaridade de cada doc com a query → vetor de relevância |
| 2. Redundancy matrix | Calcula similaridade entre os próprios docs → matriz NxN |
| 3. Seleção iterativa | Seleciona doc mais relevante; para o próximo, penaliza similaridade com já escolhidos |
| 4. Parâmetro λ | λ alto = mais diversidade; λ baixo = mais relevância |


---

## Aula 3 — Multi-Agentes e Orquestração

### Quando Usar Multi-Agente

Use quando o problema tem **ao menos um** destes critérios:

| Critério | Descrição |
|----------|-----------|
| **Domínios Diferentes** | Pesquisar, analisar e redigir são habilidades distintas — especializar melhora qualidade |
| **Paralelismo Real** | Partes da tarefa são independentes e podem rodar ao mesmo tempo |
| **Contexto Estoura** | O volume de informação não cabe na janela de um único agente |
| **Verificação Cruzada** | Um agente gera, outro critica — padrão gerador/avaliador |

### Quando NÃO Usar Multi-Agente

A maioria dos casos **não precisa** de múltiplos agentes:

| Sinal | Descrição |
|-------|-----------|
| Um bom prompt resolve | Se uma única chamada bem estruturada resolve, multi-agente é over-engineering |
| Só burocracia sem especialização | Agente A passa para B que passa para C sem diferença real de domínio |
| O agente único ainda não funciona bem | Multi-agente amplifica problemas existentes. Resolva primeiro o simples |
| Sem observabilidade | Se você não consegue debugar um agente, não conseguirá debugar cinco |

!!! warning "Regra de Ouro"
    **Faça funcionar com 1 agente primeiro. Só então adicione agentes.**

#### Checklist Antes de Ir para Multi-Agente

- [ ] O agente único já funciona bem? → Se não → resolva primeiro
- [ ] Há domínios realmente distintos? → Se não → um agente com tools resolve
- [ ] Existe ganho real de paralelismo ou escopo? → Se não → latência sem benefício
- [ ] Você tem observabilidade por agente? → Se não → instrumente antes
- [ ] Cada agente tem escopo definido? → Se não → defina antes de codar
- [ ] Está claro quem encerra o fluxo? → Se não → você terá loops

---

### Os 3 Padrões de Orquestração

#### 1. Sequencial (Pipeline)

```
ORQUESTRADOR → PESQUISA → ANÁLISE → REDAÇÃO
```

Etapas com dependência clara. Simples e previsível.

#### 2. Paralelo

```
                ┌→ AGENTE A ─┐
ORQUESTRADOR ──┼→ AGENTE B ──┼→ AGREGADOR
                └→ AGENTE C ─┘
```

Tarefas independentes em paralelo — velocidade real.

#### 3. Hierárquico

```
ORQUESTRADOR PRINCIPAL
        │
  SUB-ORQUESTRADOR
        │
   [agentes...]
```

Alta complexidade — use com parcimônia.

---

### O que o Orquestrador Faz

O orquestrador não é apenas um roteador — ele **prepara, decide e fecha** o ciclo:

| # | Ação | Descrição |
|---|------|-----------|
| 1 | **Interpreta o input** | Entende a intenção — não só as palavras. Usa memória para desambiguar |
| 2 | **Busca contexto** | Consulta memória compartilhada antes de qualquer decisão |
| 3 | **Roteia para o agente** | Seleciona o agente certo com base no input + contexto |
| 4 | **Passa contexto filtrado** | Envia ao subagente só o que ele precisa — cada handoff é cirúrgico |
| 5 | **Recebe e valida** | Valida se o resultado atende ao objetivo. Pode re-rotear |
| 6 | **Fecha o ciclo** | Atualiza memórias usadas, registra resultado, decide se encerrou |

---

### Como o Orquestrador Roteia

Três formas de decidir qual agente acionar — com trade-offs diferentes:

=== "1. Regras Fixas"
    ```python
    if "financeiro" in input:
        return agente_financeiro
    ```
    ✅ Simples, rápido, determinístico
    ⚠️ Frágil — falha em inputs ambíguos

=== "2. Classificador LLM"
    ```python
    agent = llm.classify(input, agents_list)
    ```
    ✅ Flexível, entende contexto e nuance
    ⚠️ Latência + custo extra por chamada

=== "3. Memória + Classificador"
    ```python
    ctx = memory.search(input)
    agent = llm.classify(input, ctx, agents_list)
    ```
    ✅ Usa histórico — decide melhor com o tempo
    ⚠️ Mais complexo de implementar

!!! tip "Evolução gradual"
    Comece com **regras fixas**. Migre para **classificador LLM** quando encontrar inputs ambíguos. Adicione **memória** quando precisar de personalização.

---

### Erros Clássicos em Multi-Agente

| Erro | Descrição |
|------|-----------|
| **Sem escopo definido** | Todo agente precisa saber o que NÃO é responsabilidade dele. Sem limite, agentes se sobrepõem |
| **Contexto em excesso no handoff** | Passar o histórico inteiro incha e confunde. Cada handoff deve ser cirúrgico |
| **Loop sem saída** | Agente A chama B que chama A. Sempre defina quem tem autoridade para encerrar |
| **Sem observabilidade** | Sem logs por agente + rastreabilidade, depurar multi-agente é impossível |
| **Escalar cedo demais** | Adicionou multi-agente antes de ter 1 agente funcionando. A complexidade mascara o problema |
| **Memória compartilhada sem isolamento** | Agentes lendo e escrevendo na mesma coleção sem namespacing contaminam o contexto |


---

### Pipeline Prático — 3 Agentes Especializados

Uma User Story entra → 3 agentes especializados processam em sequência → relatório completo sai. Cada agente usa tools, salva no Qdrant e passa contexto para o próximo.

#### Visão Geral

| Agente | Input | Output | Tools |
|--------|-------|--------|-------|
| 🧑 **01 — Scrum Master** | User Story | Backlog priorizado (JSON) | `search_exa()`, `break_tasks()`, `prioritize()` |
| 🔮 **02 — Req. Ocultos** | User Story + Backlog (Qdrant) | Riscos, casos de borda, dependências | `search_exa()`, `find_edge_cases()`, `search_qdrant()` |
| 📋 **03 — Auditoria** | Backlog + Req. Ocultos (Qdrant) | Relatório + Score de qualidade | `audit_reqs()`, `search_qdrant()`, `score_quality()` |

#### Agente 01 — Scrum Master

```python
# agente_01_scrum/agent.py
import google.generativeai as genai
from .tools import search_exa, break_tasks, prioritize
from memory.qdrant_client import save_to_qdrant

def run(user_story: str) -> dict:
    model = genai.GenerativeModel(
        model_name="gemini-2.0-flash",
        tools=[search_exa, break_tasks, prioritize]
    )
    chat = model.start_chat(enable_automatic_function_calling=True)
    response = chat.send_message(
        SYSTEM_PROMPT + f"\nUser Story: {user_story}"
    )
    return backlog  # JSON com tasks priorizadas (RICE score)
```

**O que faz:** Analisa a User Story → Busca referências (Exa) → Quebra em tasks técnicas → Prioriza (RICE) → Salva no Qdrant

#### Agente 02 — Descoberta de Requisitos Ocultos

O que descobre:

- ⚠️ **Casos de borda** — "E se o usuário não tiver conexão?"
- 🔗 **Dependências não declaradas** — APIs de terceiros, outros times
- 🛡️ **Riscos de segurança** — OWASP Top 10 aplicado à story
- 📊 **Requisitos não-funcionais** — Performance, disponibilidade, LGPD
- 💥 **Gaps de especificação** — Ambiguidades que causarão retrabalho

**Como usa a memória:**

- ⚡ **Short-term (messages[])** — Recebe resumo do backlog do Agente 1 via orquestrador
- 💾 **Long-term (Qdrant)** — Busca semanticamente o backlog completo: "quais tasks envolvem autenticação?"

#### Agente 03 — Auditoria de Requisitos

O que audita (scores 0-1):

| Dimensão | Pergunta |
|----------|----------|
| **Completude** | Todos os critérios de aceitação estão cobertos pelas tasks? |
| **Consistência** | As tasks são consistentes entre si? Sem contradições? |
| **Cobertura de riscos** | Os requisitos ocultos do Agente 2 estão endereçados? |
| **Testabilidade** | Cada task é testável e tem critério de done claro? |

```json
{
  "scores": {
    "completude": 0.82,
    "consistencia": 0.91,
    "cobertura_riscos": 0.65,
    "testabilidade": 0.78,
    "score_geral": 0.79
  },
  "gaps": [
    "T2 não menciona tratamento de erro para token inválido",
    "Nenhuma task cobre LGPD para dados do usuário"
  ],
  "sugestoes": [
    "Adicionar T5: Validação de expiração com refresh token"
  ]
}
```

!!! info "Por que esse agente é poderoso?"
    Ele vê o pipeline completo — acessa no Qdrant o que os Agentes 1 e 2 produziram e audita a coerência entre eles. É impossível fazer isso sem memória compartilhada.

---

### Estrutura de Pastas — Cada Agente no seu Lugar

```
pipeline_agentes/
├── agente_01_scrum/
│   ├── agent.py          ← lógica do agente
│   ├── tools.py          ← tools: exa, break_tasks
│   ├── prompts.py        ← system prompt + templates
│   └── README.md         ← o que faz, input, output
├── agente_02_requisitos/
│   ├── agent.py
│   ├── tools.py          ← exa, find_edges, qdrant
│   ├── prompts.py
│   └── README.md
├── agente_03_auditoria/
│   ├── agent.py
│   ├── tools.py          ← qdrant, score_quality
│   ├── prompts.py
│   └── README.md
├── memory/
│   └── qdrant_client.py  ← conexão compartilhada
├── orchestrator/
│   └── pipeline.py       ← conecta os 3 agentes
└── main.py               ← ponto de entrada
```

**Por que essa estrutura?**

- 🔒 **Responsabilidade única** — cada pasta = um agente = fácil de entender
- ✅ **Testável isoladamente** — rode o agente_01 sozinho com uma user story
- 📦 **Substituível** — troque o Agente 2 por versão melhor sem mudar o pipeline
- 🏭 **Padrão de mercado** — microsserviços, modular agents

---

### Orquestrador — O Maestro do Pipeline

```python
# orchestrator/pipeline.py
from agente_01_scrum.agent import run as scrum
from agente_02_requisitos.agent import run as requisitos
from agente_03_auditoria.agent import run as auditoria

def run_pipeline(user_story: str) -> dict:
    print("🧑 Agente 1: Scrum Master...")
    backlog = scrum(user_story)

    # Short-term: passa resumo pro agente 2
    contexto_ag2 = {
        "user_story": user_story,
        "backlog_resumo": backlog["summary"],
        # Long-term: Agente 2 busca detalhes no Qdrant
    }

    print("🔮 Agente 2: Requisitos Ocultos...")
    req_ocultos = requisitos(contexto_ag2)

    # Short-term: passa tudo consolidado pro agente 3
    contexto_ag3 = {
        "user_story": user_story,
        "backlog_resumo": backlog["summary"],
        "riscos_resumo": req_ocultos["summary"],
        # Long-term: Agente 3 busca detalhes no Qdrant
    }

    print("📋 Agente 3: Auditoria...")
    relatorio = auditoria(contexto_ag3)
    return relatorio
```

#### Padrão de Memória no Pipeline

| Transição | Short-term (messages[]) | Long-term (Qdrant) |
|-----------|------------------------|---------------------|
| Agente 1 → 2 | ⚡ backlog_resumo (300 tokens) | 💾 backlog completo |
| Agente 2 → 3 | ⚡ riscos_resumo (200 tokens) | 💾 req. ocultos completos |
| Agente 3 | ⚡ contexto_ag3 (500 tokens) | 💾 busca tudo (Qdrant) |

---

### Memória na Prática — Short-term vs Long-term

No pipeline, os dois tipos de memória têm papéis **complementares**:

=== "Short-term (messages[])"
    **Quando usamos?** Para passar contexto imediato entre agentes — o resumo do que o anterior descobriu.

    **Por que não tudo?** Tokens custam dinheiro. Agente 2 não precisa ler o backlog completo — só o resumo executivo.

    ```python
    # Orquestrador passa resumo
    contexto = {
        "backlog_resumo":
            backlog["summary"],  # ~300 tokens
        # Detalhes ficam no Qdrant
    }
    ```
    *Rápido e barato, mas contexto limitado*

=== "Long-term (Qdrant)"
    **Quando usamos?** Para busca semântica profunda — "quais tasks envolvem autenticação?"

    **Por que não messages[] direto?** O backlog completo pode ter 2.000+ tokens. No prompt causaria context rot.

    ```python
    # Agente 2 busca o que precisa
    results = search_qdrant(
        "tasks de autenticação",
        filter={"agent": "scrum"}
    )
    # Retorna só o relevante
    ```
    *Busca precisa, mas requer embedding*

=== "Os dois juntos"
    **O padrão do pipeline:** Messages[] para dar contexto geral e rápido. Qdrant para busca profunda quando necessário.

    ```python
    # Melhor dos mundos
    def run(contexto: dict):
        # Short-term: contexto geral
        resumo = contexto["backlog_resumo"]

        # Long-term: busca específica
        tasks_auth = search_qdrant(
            "autenticação segurança"
        )
    ```
    *Ideal para produção e para ensinar*

