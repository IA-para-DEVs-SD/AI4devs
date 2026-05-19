# S02B — Engenharia de Contexto

!!! info "Semana 2 · Bloco 1 · Aula 2"
    **Ementa:** Prompting Avançado e Engenharia de Contexto — multi-step prompting, Chain of Thought, reasoning, ReAct, RAG e o conceito de engenharia de contexto.

---

## Aula 2 — Prompting Avançado e Engenharia de Contexto

### Multi-Step Prompting

**Uma técnica de prompt engineering que divide uma tarefa complexa em etapas sequenciais, guiando o modelo através de um processo estruturado de raciocínio.**

| Característica | Descrição |
|----------------|-----------|
| **Estruturado** | Cada etapa tem um objetivo claro e definido |
| **Sequencial** | O resultado de uma etapa alimenta a próxima |
| **Controlado** | Maior previsibilidade e qualidade nas respostas |

#### Por que usar?

- Reduz erros em tarefas longas e complexas
- Permite verificação e ajuste em cada etapa
- Melhora a consistência e coerência das respostas
- Facilita o debug — você sabe onde o modelo falhou
- Aumenta a reprodutibilidade dos resultados
- Ideal para pipelines de automação com IA

**Quando usar:** Análise de documentos · Geração de código · Pesquisa e síntese · Revisão em camadas · Tomada de decisão

#### Anatomia de um Multi-Step Prompt

1. **Contexto** — Define o papel, objetivo e restrições do modelo
2. **Etapa inicial** — Coleta, análise ou processamento dos dados de entrada
3. **Etapas intermediárias** — Transformações, raciocínio e refinamentos
4. **Output final** — Formato, estrutura e entrega do resultado esperado

#### Exemplo Prático

**Tarefa:** Analisar feedback de clientes e gerar relatório de melhorias.

| Step | Objetivo | Prompt |
|------|----------|--------|
| 1 — Extrair temas | Identificar assuntos | "Liste os principais temas mencionados nos feedbacks abaixo. Retorne apenas uma lista numerada." |
| 2 — Classificar sentimento | Avaliar cada tema | "Para cada tema listado, classifique o sentimento geral: Positivo, Negativo ou Neutro." |
| 3 — Priorizar | Ordenar por impacto | "Ordene os temas por impacto no negócio (Alto / Médio / Baixo). Justifique em 1 linha." |
| 4 — Gerar relatório | Produzir output final | "Com base na análise anterior, escreva um relatório executivo com recomendações de ação." |

#### Boas Práticas

| ✅ Faça | ❌ Evite |
|---------|---------|
| Defina um objetivo claro por etapa | Misturar múltiplos objetivos numa etapa |
| Use o output de uma etapa como input da próxima | Instruções ambíguas ou vagas |
| Especifique o formato de saída | Passos redundantes sem valor |
| Teste cada etapa individualmente | Dependências circulares entre etapas |
| Documente o fluxo do prompt | Outputs sem formato definido |

!!! quote "Insight"
    Multi-step prompting é design de sistema, não só engenharia de texto.

    - O loop pode rodar 1x ou centenas de vezes — projete para ambos
    - Fique no caminho do training set — prompts familiares geram completions estáveis
    - Force o raciocínio explícito — Chain-of-Thought melhora respostas complexas
    - Ferramentas conectam o modelo ao mundo real — use com confirmação do usuário
    - Meça o que importa — telemetria e métricas de negócio, não só thumbs up/down

---

### Chain of Thought (CoT)

**Técnica de prompt que instrui o modelo a mostrar o raciocínio passo a passo antes de entregar a resposta final — reduzindo erros em tarefas complexas.**

```
[Problema] → [Raciocínio explícito] → [Resposta]
```

Exemplo de instrução: *"Pense passo a passo antes de responder."*

---

### Reasoning em Modelos de Linguagem

Capacidade do modelo de realizar inferências lógicas, planejar etapas e resolver problemas de forma estruturada — vai além da recuperação de informação.

| Tipo | Descrição |
|------|-----------|
| **Dedutivo** | Parte de premissas gerais para conclusões específicas |
| **Indutivo** | Generaliza a partir de exemplos e padrões observados |
| **Abdutivo** | Infere a melhor explicação para uma observação |
| **Analógico** | Aplica raciocínio de situações similares a novos contextos |

---

### ReAct (Reasoning + Acting)

**Técnica que combina raciocínio (*Reasoning*) e ação (*Acting*) em ciclos iterativos — o modelo pensa, age e observa até chegar à resposta final.**

| Fase | Descrição |
|------|-----------|
| **Thought** | O modelo raciocina sobre o que precisa fazer antes de agir |
| **Action** | Executa uma ação — busca, cálculo, chamada de ferramenta |
| **Observation** | Analisa o resultado e decide o próximo passo |

```
Thought → Action → Observation → (repete se necessário) → Final Answer
```

---

### RAG (Retrieval-Augmented Generation)

**RAG combina a capacidade generativa de um LLM com recuperação dinâmica de documentos externos — entregando respostas precisas, atualizadas e fundamentadas em fontes reais.**

| Componente | Função |
|------------|--------|
| **R** — Retrieval | Busca os trechos mais relevantes numa base de conhecimento |
| **A** — Augmented | Enriquece o contexto do prompt com o conteúdo recuperado |
| **G** — Generation | O LLM gera a resposta final baseada no contexto aumentado |

#### Como Funciona o Pipeline RAG

1. **Ingestão** — Documentos são carregados, divididos em *chunks* e vetorizados via embedding model
2. **Indexação** — Os vetores são armazenados num vetor store (ex: Pinecone, Weaviate, FAISS)
3. **Recuperação** — A query do usuário é vetorizada e os chunks mais similares são recuperados (top-k)
4. **Geração** — O LLM recebe query + chunks como contexto e gera a resposta final fundamentada

#### Embeddings & Vector Store

Embeddings são representações numéricas (vetores) do significado semântico de um texto. O vector store indexa e permite busca por similaridade em alta velocidade.

**Embeddings:**

- Transformam texto em vetores de alta dimensão
- Capturam significado semântico além de palavras-chave
- Gerados por modelos como `text-embedding-ada-002`
- Permitem busca por similaridade (cosine similarity)

**Vector Stores populares:**

| Store | Perfil |
|-------|--------|
| Pinecone | Gerenciado, escala na nuvem |
| Weaviate | Open-source, multimodal |
| FAISS | Local, alta performance (Meta) |
| Chroma | Leve, ideal para prototipagem |

---

### Engenharia de Contexto

**Engenharia de contexto = projetar tudo que entra no contexto do modelo para que ele produza a melhor resposta possível.**

Ou seja, não é só o prompt. É **todo o pacote de informação** enviado para o LLM.

#### O que é Engenharia de Contexto?

A disciplina de **curar sistematicamente** quais informações um modelo de linguagem recebe para **maximizar performance** enquanto minimiza custos e erros.

| Pilar | Descrição |
|-------|-----------|
| **Recuperar** | Como buscar as informações certas no momento certo |
| **Formatar** | Como estruturar e apresentar o contexto ao modelo |
| **Manter** | Como gerenciar o contexto ao longo de interações |

#### O que é Contexto?

Contexto é o **conjunto completo de tokens** que um LLM tem acesso ao gerar uma resposta:

- 📄 Instruções do sistema (system prompt)
- 💬 Mensagens do usuário
- 🕐 Histórico da conversa
- 🔧 Definições de ferramentas
- 📋 Documentos recuperados (RAG)
- 💡 Exemplos e memórias

!!! info "Distinção essencial"
    **Prompt Engineering** → escrever prompts eficazes | **Context Engineering** → gerenciar automaticamente o contexto em sistemas agênticos

#### Por que LLMs Erram?

LLMs não leem mentes — erram pelos mesmos motivos que humanos erram quando mal informados.

| Problema | Descrição |
|----------|-----------|
| **Contexto insuficiente** | O modelo não tem as informações necessárias. Como um novo funcionário sem briefing — capaz, mas sem direção. |
| **Contexto excessivo** | O modelo recebe informação demais e se perde. Detalhes irrelevantes diluem o sinal e aumentam alucinações. |

!!! tip "Aprofundamento"
    A [Aula 3 — Técnicas Avançadas](s02c-tecnicas-avancadas.md) detalha as 10 falhas de contexto, técnicas avançadas (Context Editing, Sumarização, DSPy) e ferramentas (Kiro, Council, LLM as Judge).

---

[:octicons-arrow-right-24: Próximo: S02C — Técnicas Avançadas](s02c-tecnicas-avancadas.md){ .md-button }
