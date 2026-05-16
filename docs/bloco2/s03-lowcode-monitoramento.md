# S03 — Low Code, Flowise, N8N e Monitoramento

## Plataformas Low-Code para IA

Plataformas low-code permitem criar agentes e automações **visualmente**, sem escrever todo o código do zero.

```mermaid
flowchart LR
    subgraph "Código Puro"
        C[Python/JS<br/>Controle total<br/>Mais esforço]
    end
    
    subgraph "Low-Code"
        L[N8N / Flowise<br/>Visual + código<br/>Equilíbrio]
    end
    
    subgraph "No-Code"
        N[Zapier / Make<br/>Só visual<br/>Limitado]
    end
    
    C ---|flexibilidade| L ---|simplicidade| N
```

---

## N8N — Automação com IA

O N8N é uma plataforma de automação **self-hosted** que conecta serviços via workflows visuais.

```mermaid
flowchart LR
    T[Trigger<br/>Webhook/Cron/Evento] --> P[Processamento<br/>LLM / Código / API]
    P --> A[Ação<br/>Email / Slack / DB]
    A --> V[Verificação<br/>Condição / Loop]
    V -->|retry| P
    V -->|ok| F[Fim]
    
    style T fill:#ff6d00,color:#000
    style P fill:#7c4dff,color:#fff
    style A fill:#4caf50,color:#fff
```

### Casos de uso com IA

| Caso | Trigger | LLM faz | Ação |
|------|---------|---------|------|
| Resumo de PR | Webhook GitHub | Analisa diff | Comenta no PR |
| Triagem de tickets | Novo ticket | Classifica prioridade | Atribui equipe |
| Docs automáticas | Push em main | Gera changelog | Atualiza wiki |
| Alerta inteligente | Log de erro | Analisa causa raiz | Notifica Slack |

---

## Flowise — Agentes Visuais

Flowise permite construir **chains e agentes LangChain** visualmente.

```mermaid
flowchart TD
    subgraph "Flowise Canvas"
        LLM[ChatModel<br/>GPT-4/Claude]
        MEM[Memory<br/>Buffer/Vector]
        TOOL[Tools<br/>API/Search/Code]
        PROMPT[Prompt Template]
    end
    
    PROMPT --> LLM
    MEM --> LLM
    LLM --> TOOL
    TOOL --> LLM
    
    style LLM fill:#7c4dff,color:#fff
```

### Quando usar cada um

| | N8N | Flowise |
|---|---|---|
| **Foco** | Automação de workflows | Agentes conversacionais |
| **Força** | Integrações (500+ conectores) | Chains LangChain visuais |
| **IA** | Nó de LLM no fluxo | Agente completo com memória |
| **Deploy** | Self-hosted, Docker | Self-hosted, Docker |
| **Melhor para** | Automações com IA | Chatbots e RAG |

---

## Monitoramento de Agentes

!!! danger "Agentes em produção PRECISAM de observabilidade"
    Sem monitoramento, você não sabe se o agente está funcionando, errando ou gastando demais.

### Métricas essenciais

```mermaid
flowchart TD
    subgraph "O que monitorar"
        M1[📊 Latência<br/>Tempo por iteração]
        M2[💰 Custo<br/>Tokens consumidos]
        M3[❌ Erros<br/>Taxa de falha]
        M4[🔄 Iterações<br/>Loops por tarefa]
        M5[✅ Sucesso<br/>Taxa de conclusão]
    end
    
    subgraph "Ferramentas"
        F1[LangSmith]
        F2[Helicone]
        F3[Prometheus + Grafana]
        F4[Logs estruturados]
    end
    
    M1 & M2 & M3 & M4 & M5 --> F1 & F2 & F3 & F4
```

### Checklist de produção

- [ ] Logs estruturados em cada decisão do agente
- [ ] Alerta quando custo/iterações excedem threshold
- [ ] Dashboard com taxa de sucesso/falha
- [ ] Trace completo de cada execução (input → decisões → output)
- [ ] Fallback definido para quando o agente falha

!!! tip "Regra prática"
    Se você não consegue explicar **por que** o agente tomou uma decisão olhando os logs, seu monitoramento é insuficiente.
