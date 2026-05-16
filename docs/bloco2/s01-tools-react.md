# S01 — Tools, Guardrails e Padrão ReAct

## O que é um Agente de IA?

Um agente **não é** um prompt mais longo nem uma IA mais inteligente. Um agente é uma **arquitetura**.

```mermaid
flowchart LR
    subgraph "Chatbot"
        C1[Pergunta] --> C2[Resposta]
    end
    
    subgraph "Agente"
        A1[Evento/Pedido] --> A2[Percepção]
        A2 --> A3[Raciocínio]
        A3 --> A4[Ação]
        A4 --> A5[Verificação]
        A5 -->|continua| A2
        A5 -->|concluiu| A6[Resultado]
    end
    
    style C1 fill:#666,color:#fff
    style A1 fill:#7c4dff,color:#fff
    style A4 fill:#ff6d00,color:#000
```

| | Chatbot | Automação | Agente |
|---|---|---|---|
| **Gera texto** | ✅ | ❌ | ✅ |
| **Executa ações** | ❌ | ✅ | ✅ |
| **Decide caminho** | ❌ | ❌ | ✅ |
| **Usa ferramentas** | ❌ | ✅ (fixas) | ✅ (dinâmicas) |

---

## Ciclo de Funcionamento

```mermaid
flowchart TD
    P[👁️ Percepção<br/>Coleta dados: diffs, logs, APIs]
    R[🧠 Raciocínio<br/>Decide estratégia e ferramentas]
    A[⚡ Ação<br/>Executa: comenta PR, abre issue, chama API]
    V[✅ Verificação<br/>Valida resultado, detecta falhas]
    
    P --> R --> A --> V
    V -->|objetivo não atingido| P
    V -->|sucesso| F[🏁 Fim]
    
    style P fill:#2196f3,color:#fff
    style R fill:#7c4dff,color:#fff
    style A fill:#ff6d00,color:#000
    style V fill:#4caf50,color:#fff
```

!!! warning "Verificação é o que separa protótipo de produção"
    Sem verificação, o agente acumula erros silenciosamente.

---

## Componentes Mínimos em Produção

```mermaid
flowchart TD
    subgraph "Agente"
        OBJ[🎯 Objetivo<br/>Mensurável e operacional]
        CTX[📚 Contexto<br/>Dados + restrições]
        TOOLS[🔧 Ferramentas<br/>Ações disponíveis]
        RULES[🚫 Regras/Limites<br/>O que NÃO pode fazer]
    end
    
    subgraph "Ambiente"
        API[APIs]
        DB[Bancos]
        GIT[Repositórios]
        LOG[Logs/Observabilidade]
    end
    
    TOOLS --> API & DB & GIT
    OBJ & CTX & RULES --> LLM[🤖 LLM]
    LLM --> TOOLS
    TOOLS --> LOG
    
    style LLM fill:#7c4dff,color:#fff
```

---

## Tools (Ferramentas)

Tools são **funções que o agente pode chamar** para interagir com o mundo real.

```python
tools = [
    {
        "name": "get_order_status",
        "description": "Retorna o status de um pedido pelo ID",
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string", 
                    "description": "ID do pedido"
                }
            },
            "required": ["order_id"]
        }
    }
]
```

!!! tip "O campo `description` é crucial"
    É ele que guia o modelo na decisão de **quando** e **como** usar a ferramenta. Descrições vagas = uso incorreto.

---

## Guardrails (Proteções)

Guardrails são **camadas de segurança** que impedem o agente de causar dano.

```mermaid
flowchart LR
    subgraph "Camadas de Proteção"
        direction TB
        I[🛡️ Input<br/>Valida entrada]
        P[🧠 Processamento<br/>Limita iterações]
        A[⚡ Ação<br/>Restringe escopo]
        O[📤 Output<br/>Filtra saída]
    end
    
    U[Usuário] --> I --> P --> A --> O --> R[Resposta]
```

### Exemplos práticos

=== "Restrição de diretório"
    ```python
    ALLOWED_DIRS = ['./codigo_alvo']
    
    def safe_read(path):
        if not any(path.startswith(d) for d in ALLOWED_DIRS):
            return {'error': 'Diretório não permitido'}
        return read_file(path)
    ```
    *Mitiga: escalada de privilégio (camada de ação)*

=== "Limite de iterações"
    ```python
    MAX_ITERATIONS = 10
    iterations = 0
    
    while True:
        response = client.messages.create(...)
        iterations += 1
        if iterations >= MAX_ITERATIONS:
            break  # Previne loop infinito
        if response.stop_reason == "end_turn":
            break
    ```
    *Mitiga: loop infinito e consumo ilimitado de tokens*

=== "Validação de output"
    ```python
    def sanitize_response(text):
        # Remove dados sensíveis da resposta
        text = re.sub(r'\b\d{3}\.\d{3}\.\d{3}-\d{2}\b', '[CPF]', text)
        text = re.sub(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', '[EMAIL]', text)
        return text
    ```
    *Mitiga: vazamento de dados sensíveis*

---

## Padrão ReAct (Reason + Act)

O padrão ReAct é o ciclo fundamental de um agente: **pensar → agir → observar → repetir**.

```mermaid
sequenceDiagram
    participant U as Usuário
    participant A as Agente (LLM)
    participant T as Tools
    
    U->>A: "Analise o código em ./codigo_alvo"
    
    Note over A: 💭 Thought: Preciso listar os arquivos primeiro
    A->>T: list_files("./codigo_alvo")
    T-->>A: ["main.py", "utils.py", "test_main.py"]
    
    Note over A: 💭 Thought: Vou ler cada arquivo
    A->>T: read_file("./codigo_alvo/main.py")
    T-->>A: conteúdo do arquivo
    
    Note over A: 💭 Thought: Agora rodo análise estática
    A->>T: run_linting("./codigo_alvo")
    T-->>A: resultados do linting
    
    Note over A: 💭 Thought: Tenho tudo, vou gerar o relatório
    A->>T: write_file("relatorio.md", conteúdo)
    T-->>A: arquivo criado
    
    A->>U: ✅ Relatório gerado em relatorio.md
```

!!! info "Características do ReAct"
    - **Iterativo** — não planeja tudo de uma vez
    - **Observável** — cada passo é rastreável
    - **Adaptativo** — muda de estratégia com base nos resultados
    - **Fundamentado** — decisões baseadas em dados reais (não alucinação)

---

## Quando NÃO Usar Agentes

!!! danger "Agente é excesso quando..."
    - O fluxo é **determinístico** (sem decisão condicional)
    - Não há **variação** no input
    - Uma automação simples resolve
    - O custo de erro é **irreversível** sem supervisão

!!! quote "Princípio"
    **Autonomia não é meta. Confiabilidade é.** Um agente que faz menos, mas faz certo e com segurança, vale mais que um agente "autônomo" que toma decisões erradas.
