# 📝 Quiz — Tools, Guardrails e Padrão ReAct

Teste seus conhecimentos! Clique na resposta que considerar correta.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="c">
<h3>Questão 1</h3>

<p>Observe o trecho de código abaixo:</p>
<p><pre><code class="language-python">tools = [
  {
    "name": "get_order_status",
    "description": "Retorna o status de um pedido pelo ID",
    "input_schema": {
      "type": "object",
      "properties": {
        "order_id": {"type": "string", "description": "ID do pedido"}
      },
      "required": ["order_id"]
    }
  }
]</code></pre></p>
<p>Qual é a função do campo <code>description</code> dentro do schema da ferramenta?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Gerar a interface visual da ferramenta no front-end.</li>
  <li data-option="b"><strong>b.</strong> Definir o tipo de retorno da ferramenta.</li>
  <li data-option="c"><strong>c.</strong> Guiar o modelo na decisão de quando e como usar a ferramenta.</li>
  <li data-option="d"><strong>d.</strong> Validar os parâmetros enviados pelo usuário.</li>
  <li data-option="e"><strong>e.</strong> Documentar o código para o desenvolvedor humano.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 2</h3>

<p>Um agente possui as ferramentas <code>list_files</code>, <code>read_file</code> e <code>run_linting</code>.</p>
<p>Ele recebe a tarefa:</p>
<p><pre><code class="language-text">"Analise todos os arquivos Python em ./codigo_alvo."</code></pre></p>
<p>Qual é a ordem correta de uso das ferramentas e por quê?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Apenas <code>run_linting</code> é necessária — ela lê e analisa automaticamente.</li>
  <li data-option="b"><strong>b.</strong> <code>run_linting → read_file → list_files</code>.</li>
  <li data-option="c"><strong>c.</strong> Todas as ferramentas podem ser chamadas ao mesmo tempo em qualquer ordem.</li>
  <li data-option="d"><strong>d.</strong> <code>list_files → read_file → run_linting</code>.</li>
  <li data-option="e"><strong>e.</strong> <code>read_file → list_files → run_linting</code>.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 3</h3>

<p>Observe o guardrail abaixo:</p>
<p><pre><code class="language-python">ALLOWED_DIRS = ['./codigo_alvo']</p>
<p>def safe_read(path):
    if not any(path.startswith(d) for d in ALLOWED_DIRS):
        return {'error': 'Diretorio nao permitido'}
    return read_file(path)</code></pre></p>
<p>Qual ameaça esse guardrail mitiga e em qual camada do agente ele atua?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Loop infinito — camada de ação, impedindo que o agente leia o mesmo arquivo repetidamente.</li>
  <li data-option="b"><strong>b.</strong> Prompt injection — camada de input, antes de enviar a mensagem ao modelo.</li>
  <li data-option="c"><strong>c.</strong> Escalada de privilégio — camada de ação, impedindo que o agente leia arquivos fora do escopo autorizado.</li>
  <li data-option="d"><strong>d.</strong> SQL Injection — camada de ação, sanitizando o parâmetro <code>path</code> antes de abrir o arquivo.</li>
  <li data-option="e"><strong>e.</strong> Vazamento de dados — camada de output, mascarando dados sensíveis na resposta.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 4</h3>

<p>Observe o loop abaixo:</p>
<p><pre><code class="language-python">MAX_ITERATIONS = 10
iterations = 0</p>
<p>while True:
    response = client.messages.create(...)
    iterations += 1</p>
<p>    if iterations >= MAX_ITERATIONS:
        break</p>
<p>    if response.stop_reason == "end_turn":
        break</code></pre></p>
<p>Qual problema o limite <code>MAX_ITERATIONS</code> previne e o que acontece com a tarefa se ele for atingido?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Previne prompt injection — se atingido, o agente bloqueia inputs maliciosos.</li>
  <li data-option="b"><strong>b.</strong> Previne erros de parâmetro nas tools — se atingido, o agente tenta corrigir os parâmetros automaticamente.</li>
  <li data-option="c"><strong>c.</strong> Previne vazamento de dados — se atingido, mascara dados sensíveis na resposta final.</li>
  <li data-option="d"><strong>d.</strong> Previne loop infinito — se atingido, o agente para mesmo sem concluir a tarefa, evitando consumo ilimitado de tokens e custo.</li>
  <li data-option="e"><strong>e.</strong> Previne timeout de rede — se atingido, a conexão com a API é encerrada corretamente.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="e">
<h3>Questão 5</h3>

<p>O agente recebe:</p>
<p><pre><code class="language-text">"Analise o código em ./codigo_alvo: leia os arquivos, rode análise estática e gere um relatório em relatorio.md."</code></pre></p>
<p>Qual sequência descreve corretamente o padrão ReAct aplicado a essa tarefa?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo executa todas as ferramentas em paralelo e gera o relatório em uma única chamada.</li>
  <li data-option="b"><strong>b.</strong> O modelo chama <code>run_linting</code> diretamente sem precisar de <code>list_files</code> ou <code>read_file</code>.</li>
  <li data-option="c"><strong>c.</strong> O modelo planeja todos os passos antes de chamar qualquer ferramenta, depois executa tudo de uma vez.</li>
  <li data-option="d"><strong>d.</strong> O agente gera o relatório com base no conhecimento do modelo, sem precisar chamar nenhuma ferramenta.</li>
  <li data-option="e"><strong>e.</strong> Raciocina sobre a tarefa → chama <code>list_files</code> → lê o resultado → chama <code>read_file</code> e <code>run_linting</code> → lê os resultados → chama <code>write_file</code> com o relatório → conclui com <code>end_turn</code>.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 6</h3>

<p>Um agente de suporte tem as ferramentas <code>search_knowledge_base</code>, <code>create_ticket</code> e <code>escalate_to_human</code>.</p>
<p>Ele recebe:</p>
<p><pre><code class="language-text">"Meu produto parou de funcionar."</code></pre></p>
<p>Qual é a ordem correta de uso das ferramentas?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Todas as ferramentas podem ser chamadas em paralelo simultaneamente.</li>
  <li data-option="b"><strong>b.</strong> <code>search_knowledge_base → create_ticket → escalate_to_human</code>.</li>
  <li data-option="c"><strong>c.</strong> <code>escalate_to_human → search_knowledge_base → create_ticket</code>.</li>
  <li data-option="d"><strong>d.</strong> <code>search_knowledge_base → create_ticket → escalate_to_human</code>.</li>
  <li data-option="e"><strong>e.</strong> <code>search_knowledge_base → escalate_to_human</code>, pulando <code>create_ticket</code>.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 7</h3>

<p>Um agente recebe:</p>
<p><pre><code class="language-text">"Execute todos os scripts em ./codigo_alvo e salve os outputs em resultados.txt."</code></pre></p>
<p>Qual sequência o agente deve seguir?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> <code>list_files → run_linting → execute_script → write_file</code>.</li>
  <li data-option="b"><strong>b.</strong> <code>list_files → read_file → execute_script → write_file</code>.</li>
  <li data-option="c"><strong>c.</strong> <code>write_file → list_files → execute_script</code>.</li>
  <li data-option="d"><strong>d.</strong> <code>execute_script</code> diretamente, sem precisar de <code>list_files</code>.</li>
  <li data-option="e"><strong>e.</strong> <code>list_files → execute_script</code> em paralelo para cada arquivo → <code>write_file</code> com todos os outputs.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 8</h3>

<p>Observe o trecho abaixo:</p>
<p><pre><code class="language-python">result = call_tool("get_customer_data", user_input)</code></pre></p>
<p>Qual é um dos objetivos do uso de tools em agentes?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Permitir que o agente execute ações e acesse sistemas externos ou internos.</li>
  <li data-option="b"><strong>b.</strong> Substituir completamente o modelo de linguagem.</li>
  <li data-option="c"><strong>c.</strong> Melhorar apenas a velocidade de resposta.</li>
  <li data-option="d"><strong>d.</strong> Evitar o uso de memória.</li>
  <li data-option="e"><strong>e.</strong> Reduzir o tamanho do prompt.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>