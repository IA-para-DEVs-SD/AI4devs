# 💻 Repositório Unificado

<div style="background: #0d1117; padding: 1rem 1.5rem; border-radius: 8px; border: 1px solid #30363d; margin-bottom: 2rem;">
<span style="color: #58a6ff; font-weight: bold;">📁 ia4devs-labs</span> <span style="color: #8b949e;">— Todos os exercícios do curso em um só lugar</span>
</div>

## 🚀 Quick Start

```bash
# 1. Clone todos os repos
git clone https://github.com/LAB365/agentes_B2_S01-02.git labs/agentes
git clone https://github.com/LAB365/stack-sentinel-lab.git labs/stack-sentinel
git clone https://github.com/LAB365/supportops-agent-lab.git labs/supportops

# 2. Suba a infraestrutura
cd labs/agentes/exemplos_exercicios/agentes
docker compose up -d

# 3. Configure as API keys
cp .env.example .env
# Edite .env com suas chaves:
#   GOOGLE_API_KEY=...
#   ANTHROPIC_API_KEY=...
#   OPENAI_API_KEY=...
```

---

## 🐳 Docker Compose — Infraestrutura Completa

```yaml
services:
  # Langfuse — Observabilidade de LLMs
  # http://localhost:3008
  langfuse:
    image: langfuse/langfuse:latest
    ports: ["3008:3000"]
    depends_on: [langfuse-db, clickhouse]
    environment:
      DATABASE_URL: postgresql://langfuse:langfuse@langfuse-db:5432/langfuse
      CLICKHOUSE_URL: http://langfuse-clickhouse:8123
      NEXTAUTH_URL: http://localhost:3008

  langfuse-db:
    image: postgres:16
    environment:
      POSTGRES_USER: langfuse
      POSTGRES_PASSWORD: langfuse
      POSTGRES_DB: langfuse

  clickhouse:
    image: clickhouse/clickhouse-server:24.3
    environment:
      CLICKHOUSE_DB: langfuse
      CLICKHOUSE_USER: langfuse
      CLICKHOUSE_PASSWORD: langfuse

  # MLflow — Experimentos e métricas
  # http://localhost:5001
  mlflow:
    image: ghcr.io/mlflow/mlflow:latest
    ports: ["5001:5000"]
    command: >
      mlflow server
      --backend-store-uri sqlite:///mlflow/mlflow.db
      --host 0.0.0.0 --port 5000
```

| Serviço | URL | Função |
|---------|-----|--------|
| **Langfuse** | http://localhost:3008 | Traces, custos, avaliação de LLMs |
| **MLflow** | http://localhost:5001 | Experimentos, métricas, comparação |
| **Mock API (Sentinel)** | http://localhost:8000 | Tickets, builds, docs, health |
| **Mock API (SupportOps)** | http://localhost:8000 | Tickets, users, access, incidents |

---

## 📦 Dependências Python

=== "Lab 2 — Agentes (semanas 1-2)"
    ```txt
    pandas==2.2.2
    python-dotenv==1.0.1
    anthropic==0.89.0
    openai==2.31.0
    google-genai==1.47.0
    qdrant-client==1.17.1
    sentence-transformers==5.4.1
    langfuse==4.5.0
    mlflow==3.11.1
    sqlalchemy==2.0.49
    psycopg2-binary==2.9.11
    exa-py==2.11.0
    ```

=== "Lab 3 — Stack Sentinel (semana 3)"
    ```txt
    fastapi>=0.115,<1
    uvicorn[standard]>=0.30,<1
    mcp[cli]>=1.0,<2
    langgraph>=0.2,<1
    ```

=== "Lab 4 — SupportOps (semana 4)"
    ```txt
    fastapi>=0.115,<1
    uvicorn[standard]>=0.30,<1
    pydantic>=2.7,<3
    langgraph>=0.2,<1
    google-genai>=1.0,<2
    numpy>=1.26,<3
    faiss-cpu==1.9.0.post1
    deepeval>=2.0,<3
    ```

---

## 📂 Árvore de Arquivos

```
ia4devs-labs/
│
├── 📁 agentes/                          ← Lab 2: Agentes via API
│   ├── docker-compose.yml               ← Langfuse + MLflow + Postgres
│   ├── requirements.txt
│   ├── 📁 semana1_aula2/topic_tools/
│   │   ├── exe1/
│   │   │   ├── support_agent_basic.py   ← Agente básico (sem tools)
│   │   │   ├── tools.py                 ← Definição de tools
│   │   │   └── run_support_agent.py     ← Runner
│   │   └── exe2/
│   │       ├── support_agent_toolcalling.py  ← Agente com tool calling
│   │       ├── classification.py        ← Classificação de tickets
│   │       └── tools.py
│   ├── 📁 semana1_aula3/
│   │   ├── topic_guardrails/exe5/
│   │   │   ├── guardrails.py            ← Implementação de guardrails
│   │   │   ├── tools.py
│   │   │   └── run_guardrail_agent.py
│   │   └── topic_exa_search/exe7/
│   │       └── tools_external.py        ← Busca web com Exa
│   ├── 📁 semana2_aula1/
│   │   ├── react/
│   │   │   ├── agent_react.py           ← Agente ReAct
│   │   │   ├── orchestration_react.py   ← Loop ReAct
│   │   │   └── tools.py
│   │   └── planner/
│   │       ├── agent_planner.py         ← Planner-Executor
│   │       ├── agent_exec.py
│   │       └── orchestration.py
│   ├── 📁 semana2_aula3/               ← Multi-agente
│   │   ├── agente_01_scrum/agent.py
│   │   ├── agente_02_requisitos/agent.py
│   │   ├── agente_03_auditoria/agent.py
│   │   ├── orchestrator/pipeline.py     ← Pipeline multi-agente
│   │   └── memory/qdrant_client.py      ← Memória vetorial
│   ├── 📁 semana2_aulas2e3/topic_memory/
│   │   ├── no_mem.py                    ← Sem memória (baseline)
│   │   ├── with_mem_claude.py           ← Com memória curto prazo
│   │   └── with_rag_claude.py           ← Com RAG
│   └── 📁 semana3_monitoramento/
│       ├── 1_exemplo/agent.py           ← Agente com Langfuse
│       ├── 2_llm_as_judge.py/agent.py   ← LLM como avaliador
│       └── 3_mlflow/ml_flow_example.py  ← Métricas com MLflow
│
├── 📁 stack-sentinel/                   ← Lab 3: MCP + LangGraph
│   ├── run.py                           ← CLI (doctor, setup, test, demo)
│   ├── requirements.txt
│   ├── 📁 stack_sentinel/
│   │   ├── 📁 clients/
│   │   │   ├── mock_service_client.py   ← Ex01: HTTP client
│   │   │   └── mcp_client.py           ← MCP client
│   │   ├── 📁 mcp_server/
│   │   │   ├── tools.py                ← Ex02,05: fetch_ticket, fetch_build
│   │   │   ├── resources.py            ← Ex06: read_doc_resource
│   │   │   ├── prompts.py             ← Ex07: incident_triage_prompt
│   │   │   ├── server.py              ← Ex03: SimpleMCPServer
│   │   │   └── fastmcp_server.py      ← Ex04.5: FastMCP
│   │   ├── 📁 agent/
│   │   │   ├── state.py               ← Ex09: AgentState (TypedDict)
│   │   │   ├── nodes.py               ← Ex10-14: classify, fetch, fallback
│   │   │   └── graph.py               ← Ex08,11,16: grafo + roteamento
│   │   └── 📁 llm/
│   │       ├── fake_client.py          ← Testes determinísticos
│   │       └── provider_client.py      ← Gemini/OpenAI real
│   ├── 📁 exercises/                    ← Enunciados (ex00-ex16)
│   └── 📁 tests/                        ← Testes automatizados
│
├── 📁 supportops/                       ← Lab 4: RAG + Guardrails
│   ├── run.py
│   ├── requirements.txt
│   ├── 📁 supportops_agent/
│   │   ├── 📁 tools/
│   │   │   ├── ticket_tools.py         ← get_ticket_context (capability)
│   │   │   ├── access_tools.py         ← check_user_access
│   │   │   └── guardrail_tools.py      ← injection, allowlist, output
│   │   ├── 📁 rag/
│   │   │   ├── chunking.py            ← Estratégias de chunking
│   │   │   ├── embeddings.py          ← Vetorização
│   │   │   ├── faiss_store.py         ← Vector store local
│   │   │   ├── loader.py             ← Ingestão de docs
│   │   │   └── retrieval.py          ← Busca por similaridade
│   │   ├── 📁 agent/
│   │   │   ├── state.py
│   │   │   ├── nodes.py
│   │   │   ├── graph.py
│   │   │   ├── prompts.py            ← C.A.R.T.A. prompt
│   │   │   └── output_schemas.py     ← Pydantic schemas
│   │   ├── 📁 evals/
│   │   │   ├── dataset.py            ← Dataset de avaliação
│   │   │   └── deepeval_runner.py    ← Faithfulness, Relevancy
│   │   └── 📁 mock_api/
│   │       └── server.py             ← FastAPI mockada
│   ├── 📁 exercises/                   ← Enunciados (dia1-dia3)
│   └── 📁 tests/
│
└── 📁 kiro-examples/                    ← Lab 1: Vulnerabilidades
    ├── context/messages.md              ← Context distraction
    ├── context/tools.md                 ← Context confusion
    ├── ai_docs.md                       ← Prompt injection
    └── ticket_classifier.py             ← Classificador base
```

---

## ⚙️ Setup por Lab

=== "Lab 2 — Agentes"
    ```bash
    cd labs/agentes
    python -m venv .venv && source .venv/bin/activate
    pip install -r requirements.txt
    
    # Infra (Langfuse + MLflow)
    cd exemplos_exercicios/agentes
    docker compose up -d
    
    # Configurar
    cp .env.example .env
    # Editar: ANTHROPIC_API_KEY, OPENAI_API_KEY, GOOGLE_API_KEY
    
    # Testar
    python exemplos_exercicios/agentes/semana1_aula2/topic_tools/exe1/run_support_agent.py
    ```

=== "Lab 3 — Stack Sentinel"
    ```bash
    cd labs/stack-sentinel
    python run.py doctor    # Verifica Python 3.10+
    python run.py setup     # Cria venv + instala deps
    python run.py mock-api  # Sobe API em localhost:8000
    
    # Em outro terminal:
    python run.py test ex01  # Testa exercício 1
    python run.py test all   # Testa todos
    python run.py demo       # Demo interativa
    ```

=== "Lab 4 — SupportOps"
    ```bash
    cd labs/supportops
    python run.py doctor
    python run.py setup
    python run.py mock-api   # Terminal 1
    
    # Terminal 2:
    python run.py test ex01
    
    # Configurar LLM:
    cp .env.example .env
    # GOOGLE_API_KEY=...
    # GEMINI_MODEL=gemini-2.5-flash
    ```

---

## 🔑 Variáveis de Ambiente

```bash
# .env (criar na raiz de cada lab)

# LLMs
GOOGLE_API_KEY=your-gemini-key
ANTHROPIC_API_KEY=your-claude-key
OPENAI_API_KEY=your-openai-key
GEMINI_MODEL=gemini-2.5-flash

# Observabilidade (Lab 2)
LANGFUSE_PUBLIC_KEY=pk-lf-...
LANGFUSE_SECRET_KEY=sk-lf-...
LANGFUSE_HOST=http://localhost:3008

# Busca web (Lab 2, opcional)
EXA_API_KEY=your-exa-key
```

---

## 🧭 Ordem de Execução

```mermaid
flowchart TD
    subgraph "Semana 1"
        A[Lab 1: kiro-examples<br/>Vulnerabilidades de prompt] --> B
        B[Lab 2: exe1-2<br/>Agente básico + tools]
    end
    
    subgraph "Semana 2"
        B --> C[Lab 2: exe5<br/>Guardrails]
        C --> D[Lab 2: ReAct + Planner<br/>Padrões de orquestração]
        D --> E[Lab 2: Multi-agente<br/>Pipeline + memória]
    end
    
    subgraph "Semana 3"
        E --> F[Lab 3: ex01-07<br/>MCP tools/resources/prompts]
        F --> G[Lab 3: ex08-16<br/>LangGraph state/nodes/edges]
    end
    
    subgraph "Semana 4"
        G --> H[Lab 4: dia1<br/>Tool design + agent loop]
        H --> I[Lab 4: dia2<br/>RAG + guardrails]
        I --> J[Lab 4: dia3<br/>DeepEval + avaliação]
    end
    
    J --> K[Lab 2: monitoramento<br/>Langfuse + MLflow]
    
    style A fill:#4caf50,color:#fff
    style F fill:#7c4dff,color:#fff
    style H fill:#ff6d00,color:#000
    style K fill:#f44336,color:#fff
```
