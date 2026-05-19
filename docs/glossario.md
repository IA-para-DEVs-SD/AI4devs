# Glossário

Termos essenciais do curso, em ordem alfabética.

| Termo | Definição |
|-------|----------|
| **Agent** | Sistema que usa LLM para decidir ações, executar tools e iterar até resolver um problema |
| **Chain-of-Thought (CoT)** | Técnica que pede ao modelo raciocinar passo a passo antes de responder |
| **Chunking** | Dividir documentos em pedaços menores para indexação em vector DB |
| **Context Engineering** | Disciplina de curar quais informações o modelo recebe para maximizar performance |
| **Context Window** | Limite de tokens que o modelo consegue processar em uma chamada (entrada + saída) |
| **Embedding** | Representação numérica (vetor) do significado semântico de um texto |
| **Faithfulness** | Métrica que avalia se a resposta é fiel aos documentos fornecidos (sem inventar) |
| **Few-Shot** | Técnica de incluir exemplos no prompt para demonstrar o padrão esperado |
| **Fine-tuning** | Retreinar um modelo com dados específicos para especializar seu comportamento |
| **Guardrail** | Camada de validação que impede o agente de executar ações indevidas |
| **Hallucination** | Quando o modelo gera informação que parece correta mas é inventada |
| **HITL** | Human-in-the-Loop — exigir aprovação humana antes de ações sensíveis |
| **JSON-RPC** | Protocolo de comunicação usado pelo MCP entre client e server |
| **LangGraph** | Framework para construir agentes como grafos de estado com controle explícito |
| **LLM** | Large Language Model — rede neural treinada para prever o próximo token |
| **LLM-as-Judge** | Usar um LLM para avaliar a qualidade das respostas de outro LLM |
| **MCP** | Model Context Protocol — padrão aberto para conectar LLMs a ferramentas externas |
| **Prompt Engineering** | Técnica de escrever instruções eficazes para obter resultados ótimos de LLMs |
| **RAG** | Retrieval-Augmented Generation — combinar busca em documentos com geração de resposta |
| **ReAct** | Reasoning + Acting — ciclo de pensar, agir e observar até resolver o problema |
| **Reranking** | Reavaliar candidatos recuperados com modelo mais preciso antes de enviar ao LLM |
| **State** | Objeto compartilhado entre nós de um grafo que acumula dados da execução |
| **Temperature** | Parâmetro que controla aleatoriedade da resposta (0=determinístico, 1+=criativo) |
| **Token** | Unidade mínima de texto processada pelo modelo (~4 caracteres em inglês) |
| **Tool** | Função que o agente pode invocar para executar ações no mundo externo |
| **Tool Calling** | Capacidade do LLM de solicitar execução de funções externas com argumentos tipados |
| **Top-k** | Número de chunks mais similares retornados na busca vetorial |
| **Vector DB** | Banco de dados otimizado para busca por similaridade semântica |
