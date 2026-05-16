# S03 — IA no Desenvolvimento

## Ferramentas de IA: Categorias

Nem toda "ferramenta de IA" é igual. Elas operam em níveis diferentes:

```mermaid
flowchart TD
    subgraph "Nível 1 — Escrita Local"
        A[Autocomplete<br/>GitHub Copilot, Codeium]
        A1[Sugere próximas linhas]
        A2[Pouco contexto]
        A3[Acelera mecânica]
    end
    
    subgraph "Nível 2 — Projeto"
        B[IDE AI-First<br/>Cursor, Windsurf]
        B1[Indexa múltiplos arquivos]
        B2[Entende arquitetura]
        B3[Gera/refatora com contexto]
    end
    
    subgraph "Nível 3 — Operacional"
        C[Terminal/Agentes<br/>Claude Code, Aider]
        C1[Executa comandos]
        C2[Analisa logs]
        C3[Modifica projeto inteiro]
    end
    
    A --> B --> C
    
    style A fill:#4caf50,color:#fff
    style B fill:#ff9800,color:#000
    style C fill:#f44336,color:#fff
```

!!! warning "Mais contexto = mais poder + mais risco"
    Ferramentas com pouco contexto são previsíveis mas limitadas. Ferramentas com muito contexto são poderosas mas ampliam a superfície de risco.

---

## Cursor AI — Modos de Interação

| Modo | Função | Quando usar |
|------|--------|-------------|
| **Ask** | Entender antes de alterar | Explorar código desconhecido |
| **Plan** | Raciocinar antes de executar | Mudanças complexas, refatorações |
| **Agent** | Execução assistida | Implementar features completas |

---

## Geração de Código com IA

### O Fluxo Correto

```mermaid
flowchart LR
    A[Especificação<br/>clara] --> B[IA gera<br/>rascunho]
    B --> C[Dev revisa<br/>e ajusta]
    C --> D[Testes<br/>validam]
    D -->|falhou| B
    D -->|passou| E[Merge]
    
    style A fill:#7c4dff,color:#fff
    style D fill:#00c853,color:#fff
```

!!! danger "Código gerado = rascunho técnico"
    Nunca trate output da IA como código final. É um **primeiro draft** que precisa de revisão, teste e validação.

### Princípios

1. **Especificação antes do código** — descreva o que quer antes de pedir implementação
2. **Geração incremental** — peça em partes pequenas, valide cada uma
3. **Controle de diffs** — revise cada mudança como faria em um PR
4. **Auditoria** — verifique segurança, performance e edge cases

---

## Testes com IA

```mermaid
flowchart TD
    A[Código existente] --> B[IA gera testes]
    B --> C{Testes são bons?}
    C -->|Asserts fracos| D[❌ Falsa confiança]
    C -->|Testa edge cases| E[✅ Cobertura real]
    
    E --> F[Refatoração segura]
    D --> G[Bug em produção]
    
    style D fill:#f44336,color:#fff
    style E fill:#4caf50,color:#fff
```

### O que a IA faz bem em testes

- ✅ Gerar boilerplate de test cases
- ✅ Sugerir edge cases que você não pensou
- ✅ Criar mocks e fixtures
- ✅ Converter testes entre frameworks

### Onde a IA falha

- ❌ **Asserts fracos** — testa que "não dá erro" em vez de validar comportamento
- ❌ **Happy path only** — ignora inputs inválidos e edge cases
- ❌ **Falsa cobertura** — 100% de linhas, 0% de confiança

!!! tip "Regra de ouro"
    Testes robustos **tentam quebrar** o código. Se a IA só gera testes que passam, ela não está testando — está confirmando.

---

## Documentação com IA

### Tipos que a IA gera bem

| Tipo | Exemplo | Dica |
|------|---------|------|
| **README** | Porta de entrada do projeto | Peça estrutura + tom técnico |
| **API Docs** | OpenAPI/Swagger | Forneça os endpoints como contexto |
| **ADRs** | Decisões arquiteturais | Descreva o trade-off, IA estrutura |
| **Diagramas** | Mermaid, PlantUML | Descreva o fluxo em texto |

!!! info "Documentação para humanos E para IAs"
    Documentação bem estruturada (README, ADRs, contratos) serve como **contexto** para a própria IA em interações futuras.

---

## CI/CD com IA

```mermaid
flowchart LR
    A[Descreva o pipeline] --> B[IA gera YAML]
    B --> C[Dev revisa]
    C --> D[Testa em branch]
    D --> E[Ajusta]
    E --> F[Pipeline final]
```

### O que funciona

- Gerar Dockerfiles a partir de requisitos
- Criar pipelines GitHub Actions/GitLab CI
- Debug de falhas em pipelines (colar log + pedir diagnóstico)

!!! danger "Pipeline é código"
    Mesmas regras de revisão, versionamento e teste se aplicam. IA gera o rascunho, você valida.

---

## Resumo: O Papel do Dev no Loop

```mermaid
flowchart TD
    subgraph "IA faz"
        G[Gera código/testes/docs]
        R[Refatora]
        S[Sugere alternativas]
    end
    
    subgraph "Dev faz"
        D[Define o problema]
        V[Valida e testa]
        A[Decide arquitetura]
        Q[Garante qualidade]
    end
    
    G & R & S --> V
    D --> G
    A --> G
    
    style D fill:#7c4dff,color:#fff
    style V fill:#00c853,color:#fff
```

!!! quote "Princípio fundamental"
    **Autocomplete acelera escrita, não entendimento.** Quando o gargalo é clareza de problema, modelagem ou decisão, a IA pouco ajuda — e pode até atrapalhar, criando ilusão de progresso.
