# S04 — MCP, LangGraph e Agentes Estruturados

## MCP — Model Context Protocol

O MCP é um **protocolo aberto** que padroniza como LLMs se conectam a ferramentas e fontes de dados externas.

```mermaid
flowchart LR
    subgraph "Antes do MCP"
        L1[LLM] -->|integração custom| T1[Tool A]
        L1 -->|integração custom| T2[Tool B]
        L1 -->|integração custom| T3[Tool C]
    end
    
    subgraph "Com MCP"
        L2[LLM] -->|protocolo padrão| MCP[MCP Server]
        MCP --> T4[Tool A]
        MCP --> T5[Tool B]
        MCP --> T6[Tool C]
    end
    
    style MCP fill:#7c4dff,color:#fff
```

### Analogia

!!! info "MCP é como USB para IAs"
    Assim como USB padronizou a conexão de periféricos, MCP padroniza a conexão de ferramentas a LLMs. Qualquer LLM compatível pode usar qualquer servidor MCP.

### Arquitetura

```mermaid
flowchart TD
    subgraph "Host (IDE/App)"
        CLIENT[MCP Client]
    end
    
    subgraph "MCP Server"
        TOOLS[🔧 Tools<br/>Funções executáveis]
        RES[📁 Resources<br/>Dados/arquivos]
        PROMPTS[📝 Prompts<br/>Templates reutilizáveis]
    end
    
    CLIENT <-->|JSON-RPC| TOOLS
    CLIENT <-->|JSON-RPC| RES
    CLIENT <-->|JSON-RPC| PROMPTS
    
    style CLIENT fill:#2196f3,color:#fff
    style TOOLS fill:#ff6d00,color:#000
```

### Componentes MCP

| Componente | Função | Exemplo |
|-----------|--------|---------|
| **Tools** | Ações que o LLM pode executar | `query_database`, `create_file` |
| **Resources** | Dados que o LLM pode ler | Arquivos, schemas, configs |
| **Prompts** | Templates reutilizáveis | Prompts de análise, review |

---

## LangGraph — Grafos de Agentes

LangGraph permite construir agentes como **grafos de estado**, com controle explícito sobre fluxo e decisões.

```mermaid
flowchart TD
    START((Start)) --> PLAN[📋 Planejar]
    PLAN --> DECIDE{Decisão}
    DECIDE -->|precisa pesquisar| SEARCH[🔍 Pesquisar]
    DECIDE -->|precisa codificar| CODE[💻 Codificar]
    DECIDE -->|pronto| REVIEW[🔍 Revisar]
    SEARCH --> DECIDE
    CODE --> DECIDE
    REVIEW --> END((End))
    
    style PLAN fill:#7c4dff,color:#fff
    style DECIDE fill:#ff9800,color:#000
    style END fill:#4caf50,color:#fff
```

### Conceitos-chave

=== "State (Estado)"
    ```python
    class AgentState(TypedDict):
        messages: list[BaseMessage]
        plan: str
        code: str
        review_result: str
    ```
    O estado é compartilhado entre todos os nós do grafo.

=== "Nodes (Nós)"
    ```python
    def plan_node(state: AgentState) -> AgentState:
        # Lógica de planejamento
        plan = llm.invoke("Planeje a tarefa...")
        return {"plan": plan.content}
    ```
    Cada nó é uma função que recebe e retorna estado.

=== "Edges (Arestas)"
    ```python
    def should_continue(state: AgentState) -> str:
        if "DONE" in state["review_result"]:
            return "end"
        return "revise"
    ```
    Arestas condicionais controlam o fluxo.

### LangGraph vs Outros Frameworks

| | LangGraph | LangChain | CrewAI |
|---|---|---|---|
| **Controle de fluxo** | Explícito (grafo) | Implícito (chain) | Implícito (roles) |
| **Estado** | Tipado e compartilhado | Passado entre steps | Por agente |
| **Debugging** | Fácil (visualiza grafo) | Médio | Difícil |
| **Complexidade** | Média | Baixa | Baixa |
| **Produção** | ✅ Projetado para | ⚠️ Possível | ⚠️ Limitado |

---

## Combinando MCP + LangGraph

```mermaid
flowchart TD
    subgraph "LangGraph (Orquestração)"
        S[Start] --> N1[Nó: Analisar]
        N1 --> N2[Nó: Executar]
        N2 --> N3[Nó: Verificar]
        N3 -->|retry| N1
        N3 -->|ok| E[End]
    end
    
    subgraph "MCP Servers (Ferramentas)"
        MCP1[MCP Git<br/>diff, blame, log]
        MCP2[MCP DB<br/>query, schema]
        MCP3[MCP Docs<br/>search, read]
    end
    
    N2 --> MCP1 & MCP2 & MCP3
    
    style S fill:#7c4dff,color:#fff
    style MCP1 fill:#ff6d00,color:#000
    style MCP2 fill:#ff6d00,color:#000
    style MCP3 fill:#ff6d00,color:#000
```

!!! success "Benefício"
    - **LangGraph** controla o *fluxo* (quando fazer o quê)
    - **MCP** padroniza as *ferramentas* (como fazer)
    - Juntos: agentes estruturados, testáveis e extensíveis
