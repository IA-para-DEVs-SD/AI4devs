# S02 — Memória, Agentes e Orquestração

## O Problema da Memória

LLMs **não têm memória** entre conversas. Cada chamada é independente. Para agentes que operam em múltiplas etapas, isso é um problema crítico.

```mermaid
flowchart TD
    subgraph "Sem Memória"
        A1[Chamada 1] --> R1[Resposta 1]
        A2[Chamada 2] --> R2[Resposta 2<br/>❌ Não sabe da 1]
    end
    
    subgraph "Com Memória"
        B1[Chamada 1] --> M[(Memória)]
        M --> B2[Chamada 2]
        B2 --> M
        B2 --> S2[Resposta 2<br/>✅ Contexto preservado]
    end
```

---

## Tipos de Memória

```mermaid
flowchart LR
    subgraph "Curto Prazo"
        CP[Histórico da conversa<br/>Janela de contexto]
    end
    
    subgraph "Longo Prazo"
        LP[Base vetorial<br/>Banco de dados<br/>Arquivos]
    end
    
    subgraph "Episódica"
        EP[Experiências passadas<br/>Erros e acertos<br/>Padrões aprendidos]
    end
    
    CP & LP & EP --> AG[🤖 Agente]
    
    style CP fill:#2196f3,color:#fff
    style LP fill:#4caf50,color:#fff
    style EP fill:#ff9800,color:#000
```

| Tipo | Duração | Implementação | Uso |
|------|---------|---------------|-----|
| **Curto prazo** | Uma sessão | Histórico de mensagens | Manter contexto da conversa |
| **Longo prazo** | Persistente | Vector DB, banco relacional | Lembrar preferências, fatos |
| **Episódica** | Persistente | Logs estruturados | Aprender com experiências |

---

## Padrões de Orquestração

### Single Agent (Agente Único)

```mermaid
flowchart LR
    U[Usuário] --> A[🤖 Agente]
    A --> T1[Tool 1]
    A --> T2[Tool 2]
    A --> T3[Tool 3]
    A --> U
```

!!! tip "Quando usar"
    Tarefas simples com poucas ferramentas e escopo bem definido.

---

### Pipeline (Sequencial)

```mermaid
flowchart LR
    A1[Agente 1<br/>Coleta] --> A2[Agente 2<br/>Análise]
    A2 --> A3[Agente 3<br/>Ação]
    A3 --> A4[Agente 4<br/>Verificação]
    
    style A1 fill:#2196f3,color:#fff
    style A2 fill:#7c4dff,color:#fff
    style A3 fill:#ff6d00,color:#000
    style A4 fill:#4caf50,color:#fff
```

!!! tip "Quando usar"
    Fluxos com etapas bem definidas onde a saída de um alimenta o próximo.

---

### Router (Roteador)

```mermaid
flowchart TD
    U[Input] --> R[🔀 Router<br/>Classifica a tarefa]
    R -->|código| A1[Agente de Código]
    R -->|docs| A2[Agente de Docs]
    R -->|deploy| A3[Agente de Infra]
    R -->|dúvida| A4[Agente de Suporte]
    
    style R fill:#7c4dff,color:#fff
```

!!! tip "Quando usar"
    Múltiplos domínios com especialistas diferentes.

---

### Supervisor (Hierárquico)

```mermaid
flowchart TD
    S[👔 Supervisor<br/>Coordena e decide]
    S --> W1[Worker 1<br/>Pesquisa]
    S --> W2[Worker 2<br/>Implementa]
    S --> W3[Worker 3<br/>Testa]
    W1 & W2 & W3 -->|reportam| S
    S --> F[Resultado Final]
    
    style S fill:#7c4dff,color:#fff
```

!!! tip "Quando usar"
    Tarefas complexas que exigem coordenação entre múltiplos agentes especializados.

---

### Multi-Agent Debate

```mermaid
flowchart LR
    A1[Agente A<br/>Propõe] --> A2[Agente B<br/>Critica]
    A2 --> A1
    A1 & A2 --> J[Juiz<br/>Decide]
    J --> R[Resultado<br/>refinado]
    
    style J fill:#4caf50,color:#fff
```

!!! tip "Quando usar"
    Decisões que se beneficiam de perspectivas opostas (ex: segurança vs usabilidade).

---

## Comparativo de Padrões

| Padrão | Complexidade | Controle | Melhor para |
|--------|-------------|----------|-------------|
| Single Agent | ⭐ | Total | Tarefas simples |
| Pipeline | ⭐⭐ | Alto | Fluxos sequenciais |
| Router | ⭐⭐ | Alto | Multi-domínio |
| Supervisor | ⭐⭐⭐ | Médio | Tarefas complexas |
| Multi-Agent | ⭐⭐⭐⭐ | Baixo | Decisões críticas |

!!! danger "Mais agentes ≠ melhor"
    Cada agente adicional aumenta latência, custo e superfície de erro. Use o padrão mais simples que resolve o problema.
