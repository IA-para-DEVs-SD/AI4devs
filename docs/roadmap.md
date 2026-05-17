# 🗺️ Roadmap — AI Engineer

> Baseado no [roadmap.sh/ai-engineer](https://roadmap.sh/ai-engineer). Itens marcados com ✅ foram cobertos no curso. Itens com ⬜ são complementares para estudo individual.

!!! info "O que é um AI Engineer?"
    Um AI Engineer usa modelos pré-treinados e ferramentas de IA existentes para criar soluções inteligentes. Diferente de ML Engineers (que treinam modelos) ou AI Researchers (que criam teoria), o AI Engineer foca em **aplicar IA em produtos reais**.

---

## Stage 1 — Fundamentos

### Programação

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Python para IA | Coberto nos labs |
| ✅ | APIs REST (consumir e criar) | Labs + Tools |
| ✅ | JSON/estruturas de dados | Prompt Engineering |
| ⬜ | Git avançado (branching, CI/CD) | [roadmap.sh/git-github](https://roadmap.sh/git-github) |
| ⬜ | Docker básico | [roadmap.sh/docker](https://roadmap.sh/docker) |
| ⬜ | Async/concorrência em Python | Para pipelines paralelos |

### Como LLMs Funcionam

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Tokens e tokenização | B1S01 |
| ✅ | Transformers e mecanismo de atenção | B1S01 |
| ✅ | Context window e limites | B1S01 + B1S02 |
| ✅ | Temperature e sampling | B1S01 |
| ✅ | Pré-treinamento vs fine-tuning | B1S01 |
| ⬜ | Arquitetura encoder/decoder | Papers: Attention Is All You Need |
| ⬜ | Quantização e otimização de modelos | Para deploy local (llama.cpp, GGUF) |
| ⬜ | Modelos open-source (Llama, Mistral, Gemma) | Hugging Face |

---

## Stage 2 — Engenharia de Prompt e Contexto

### Prompt Engineering

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Zero-shot e few-shot prompting | B1S02 Aula 1 |
| ✅ | Chain of Thought (CoT) | B1S02 Aula 2 |
| ✅ | Roles e system prompts | B1S02 Aula 1 |
| ✅ | XML tags para estruturação | B1S02 Aula 1 |
| ✅ | Prefill e controle de formato | B1S02 Aula 1 |
| ✅ | Output estruturado (JSON) | B1S02 Aula 1 |
| ✅ | Multi-step prompting (pipelines) | B1S02 Aula 2 |
| ✅ | Evitar alucinações | B1S02 Aula 1 |

### Context Engineering

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Os 3 pilares (Recuperar, Formatar, Manter) | B1S02 Aula 2-3 |
| ✅ | 10 falhas de contexto | B1S02 Aula 3 |
| ✅ | Context Editing (editar, remover, injetar, comprimir) | B1S02 Aula 3 |
| ✅ | Sumarização de contexto | B1S02 Aula 3 |
| ✅ | Memory Offloading | B1S02 Aula 3 |
| ✅ | Lost-in-the-Middle e Context Rot | B1S02 Aula 3 + B2S02 |
| ✅ | DSPy (prompt optimization automático) | B1S02 Aula 3 |
| ⬜ | Caching de prompts (prompt caching APIs) | Anthropic/OpenAI docs |
| ⬜ | Structured outputs com Pydantic | OpenAI Structured Outputs |

---

## Stage 3 — RAG (Retrieval-Augmented Generation)

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Embeddings e similaridade por cosseno | B2S02 Aula 2 |
| ✅ | Chunking com overlap | B2S02 Aula 2 |
| ✅ | Vector databases (Qdrant) | B2S02 Aula 2 |
| ✅ | Pipeline RAG completo (Ingestion + Inference) | B2S02 Aula 2 |
| ✅ | Metadata filtering | B2S05 |
| ✅ | Agentic RAG | B2S02 Aula 2 |
| ✅ | MMR (Maximal Marginal Relevance) | B2S02 Aula 2 |
| ✅ | Re-ranking | B2S02 Aula 2 |
| ⬜ | Hybrid search (vetorial + keyword BM25) | Qdrant docs |
| ⬜ | Multi-modal RAG (imagens + texto) | LlamaIndex |
| ⬜ | Graph RAG (knowledge graphs + vetores) | Microsoft GraphRAG |
| ⬜ | Avaliação de RAG (RAGAS framework) | ragas.io |

---

## Stage 4 — Tools e Function Calling

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Function calling (JSON schema) | B2S01 |
| ✅ | Padrão ReAct (Thought → Action → Observation) | B2S01 + B2S02 |
| ✅ | Planner-Executor | B2S02 Aula 1 |
| ✅ | Guardrails (input/output) | B2S01 |
| ✅ | Tool descriptions eficazes | B2S01 |
| ✅ | MCP (Model Context Protocol) | B2S04 |
| ⬜ | Parallel function calling | OpenAI/Anthropic docs |
| ⬜ | Tool use com streaming | Para UX responsiva |
| ⬜ | Criar MCP servers customizados | MCP SDK docs |

---

## Stage 5 — Memória e Estado

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | 4 tipos de memória (Working, Episodic, Semantic, Procedural) | B2S02 Aula 2 |
| ✅ | Short-term: conversation history | B2S02 Aula 2 |
| ✅ | Estratégias: trimming, sumarização, janela deslizante | B2S02 Aula 2 |
| ✅ | Long-term: RAG como Semantic Memory | B2S02 Aula 2 |
| ✅ | MemoryBank (decaimento Ebbinghaus) | B2S02 Aula 2 |
| ✅ | Pinned memories | B2S02 Aula 2 |
| ⬜ | Mem0 (memory layer for AI) | mem0.ai |
| ⬜ | Zep (long-term memory service) | getzep.com |
| ⬜ | User profiles persistentes | Para personalização |

---

## Stage 6 — Agentes e Orquestração

### Agentes

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Quando usar multi-agente (e quando NÃO) | B2S02 Aula 3 |
| ✅ | 3 padrões: Sequencial, Paralelo, Hierárquico | B2S02 Aula 3 |
| ✅ | O papel do orquestrador (6 passos) | B2S02 Aula 3 |
| ✅ | Roteamento (regras fixas → LLM → memória) | B2S02 Aula 3 |
| ✅ | Erros clássicos em multi-agente | B2S02 Aula 3 |
| ✅ | Handoff cirúrgico (short-term + long-term) | B2S02 Aula 3 |

### Frameworks

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | LangGraph (grafos de estado, checkpoints) | B2S04 |
| ✅ | Kiro (spec-driven, steering, hooks) | B1S02 Aula 3 |
| ⬜ | CrewAI (multi-agent framework) | crewai.com |
| ⬜ | AutoGen (Microsoft) | github.com/microsoft/autogen |
| ⬜ | LangChain (chains, agents, tools) | langchain.com |
| ⬜ | Semantic Kernel (Microsoft) | Para .NET/Java |
| ⬜ | OpenAI Assistants API | Para agentes stateful |

---

## Stage 7 — Avaliação e Qualidade

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | LLM as a Judge | B1S02 Aula 3 |
| ✅ | Council (múltiplos modelos, consenso) | B1S02 Aula 3 |
| ✅ | Faithfulness e answer relevance | B2S05 |
| ✅ | Retrieval recall | B2S05 |
| ⬜ | RAGAS (framework de avaliação RAG) | ragas.io |
| ⬜ | DeepEval (unit tests para LLMs) | deepeval.com |
| ⬜ | Promptfoo (eval framework) | promptfoo.dev |
| ⬜ | Human evaluation workflows | Para ground truth |
| ⬜ | A/B testing de prompts | Em produção |

---

## Stage 8 — Produção e Operações

### Deploy

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Modularidade (tools, memory, orchestrator separados) | B2S06 |
| ✅ | Fallbacks e circuit breakers | B2S06 |
| ✅ | Autonomia por nível de risco | B2S06 |
| ✅ | Human escalation | B2S06 |
| ⬜ | Rate limiting e throttling | Para controle de custos |
| ⬜ | Caching de respostas (semantic cache) | GPTCache, Redis |
| ⬜ | Load balancing entre modelos | Fallback: GPT-4 → Claude → local |
| ⬜ | Containerização de agentes (Docker/K8s) | Para escala |

### Observabilidade

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Traces por request | B2S03 + B2S06 |
| ✅ | Drift detection | B2S03 |
| ✅ | Monitoramento de custos | B2S03 |
| ⬜ | LangSmith (tracing LangChain) | smith.langchain.com |
| ⬜ | Langfuse (open-source observability) | langfuse.com |
| ⬜ | Weights & Biases (experiment tracking) | wandb.ai |
| ⬜ | Alertas automáticos (qualidade, custo, latência) | Grafana + custom metrics |

---

## Stage 9 — Low Code e Integrações

| Status | Tópico | Recurso |
|--------|--------|---------|
| ✅ | Flowise (fluxos de LLM/RAG visuais) | B2S03 |
| ✅ | N8N (automação geral + IA) | B2S03 |
| ⬜ | Zapier AI / Make.com | Automações no-code |
| ⬜ | Vercel AI SDK | Para apps web com streaming |
| ⬜ | Streamlit / Gradio | Protótipos de UI rápidos |

---

## Stage 10 — Tópicos Avançados (Próximos Passos)

| Status | Tópico | Descrição |
|--------|--------|-----------|
| ⬜ | Fine-tuning de modelos | Quando RAG não é suficiente — LoRA, QLoRA |
| ⬜ | Modelos locais (Ollama, llama.cpp) | Para privacidade e custo zero |
| ⬜ | Multi-modal (visão + texto + áudio) | GPT-4V, Gemini Pro Vision |
| ⬜ | Voice AI (TTS + STT + LLM) | Agentes por voz |
| ⬜ | Computer Use (agentes que usam GUI) | Anthropic Computer Use, Browser Use |
| ⬜ | AI Safety e Alignment | Red teaming, RLHF, constitutional AI |
| ⬜ | Compliance (LGPD, GDPR, AI Act) | Regulamentação de IA |
| ⬜ | Custos e otimização em escala | Batching, caching, model routing |

---

## Resumo de Progresso

```
Coberto no curso:  52 tópicos ✅
Para estudar:      35 tópicos ⬜
Progresso:         ████████████░░░░ ~60%
```

!!! success "Você já tem a base"
    O curso cobriu os fundamentos e a prática de um AI Engineer. Os tópicos ⬜ são especializações que você pode aprender conforme a necessidade do projeto — não precisa dominar tudo de uma vez.

!!! tip "Próximos passos recomendados"
    1. **RAG avançado** — Graph RAG + Hybrid Search (maior impacto prático)
    2. **Avaliação** — RAGAS + DeepEval (essencial para produção)
    3. **Observabilidade** — Langfuse (open-source, fácil de começar)
    4. **Modelos locais** — Ollama (custo zero para experimentar)
