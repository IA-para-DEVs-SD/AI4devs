# Erros Comuns ao Usar IA no Desenvolvimento

## 1. Pedir código sem especificação

❌ "Refatore esta classe."

✅ "Analise esta classe Java. Identifique responsabilidades misturadas, riscos de regressão e queries caras. Proponha refatoração incremental sem alterar comportamento."

## 2. Aceitar output sem revisar

A IA gera código que **compila** mas pode ter:

- Lógica invertida
- Edge cases ignorados
- Dependências desnecessárias
- Vulnerabilidades de segurança

!!! danger "Regra: se você não entende o código gerado, não faça merge."

## 3. Usar prompt gigante sem estrutura

Prompts longos sem separação clara entre instrução, dados e formato esperado confundem o modelo.

**Solução:** Use XML tags, seções claras e formato de saída explícito.

## 4. Não validar JSON de saída

O modelo pode retornar JSON com campos extras, faltantes ou tipos errados.

**Solução:** Sempre valide com Pydantic/Zod antes de consumir.

## 5. Usar agente onde workflow bastava

| Sintoma | Problema |
|---------|----------|
| Agente faz sempre a mesma sequência | Deveria ser workflow |
| Custo alto sem benefício | LLM desnecessário no loop |
| Resultados imprevisíveis em tarefa fixa | Falta determinismo |

## 6. Fazer RAG sem avaliação

Sem métricas, você não sabe se o RAG está:

- Recuperando os documentos certos (Context Recall)
- Gerando respostas fiéis (Faithfulness)
- Respondendo a pergunta (Answer Relevancy)

**Solução:** Crie um dataset de 20 perguntas e meça antes de ir para produção.

## 7. Colocar dado sensível no prompt

- Senhas, tokens, CPFs no contexto
- Dados de produção em ferramentas de terceiros
- Código proprietário em modelos públicos

**Solução:** Sanitize inputs, use modelos locais para dados sensíveis.

## 8. Não medir custo e latência

Sem observabilidade:

- Conta da API explode silenciosamente
- Usuário espera 30s sem feedback
- Retry infinito em caso de erro

**Solução:** Monitore custo/request, latência p95 e taxa de erro desde o dia 1.

## 9. Confiar no prompt para segurança

"Não faça X" no prompt **não é controle de segurança**. O modelo pode ignorar.

**Solução:** Validações determinísticas em código. Prompt é orientação, não barreira.

## 10. Não versionar prompts

Prompts mudam com frequência. Sem versionamento:

- Não sabe qual versão causou regressão
- Não consegue fazer rollback
- Não consegue comparar A/B

**Solução:** Trate prompts como código — git, review, testes.
