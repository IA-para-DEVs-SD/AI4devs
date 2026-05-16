# 📝 Quiz — Memória, Agentes LLM e Padrões de Orquestração

Teste seus conhecimentos! Clique na resposta que considerar correta.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="c">
<h3>Questão 1</h3>

<p>Memória de curto prazo (*short-term*): o que ela representa em agentes LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Cache de KV (*key-value*) que o modelo usa internamente para evitar recomputar atenção.</li>
  <li data-option="b"><strong>b.</strong> O estado do agente persistido entre sessões diferentes do mesmo usuário.</li>
  <li data-option="c"><strong>c.</strong> O contexto ativo da janela de tokens que o modelo processa na requisição atual (*context window*).</li>
  <li data-option="d"><strong>d.</strong> Um banco de dados Redis que armazena sessões do usuário por até 24 horas.</li>
  <li data-option="e"><strong>e.</strong> A capacidade do modelo de lembrar fatos aprendidos no pré-treino.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 2</h3>

<p>Um agente analista tem as ferramentas abaixo:</p>
<p><pre><code class="language-text">get_schema(table)       → retorna as colunas e tipos de uma tabela
query_data(sql)         → executa uma query SELECT e retorna os dados
calculate_metrics(data) → calcula métricas sobre os dados retornados
generate_report(metrics)→ gera o relatório final em markdown</code></pre></p>
<p>Ele recebe:</p>
<p><pre><code class="language-text">"Gere um relatório de vendas do mês de março."</code></pre></p>
<p>Quais ferramentas podem rodar em paralelo e quais precisam ser sequenciais?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Todas em paralelo — o modelo monta o relatório com os dados que chegarem primeiro.</li>
  <li data-option="b"><strong>b.</strong> <code>get_schema → query_data → generate_report</code>, pulando <code>calculate_metrics</code>.</li>
  <li data-option="c"><strong>c.</strong> <code>calculate_metrics</code> e <code>generate_report</code> em paralelo — ambas processam dados.</li>
  <li data-option="d"><strong>d.</strong> <code>get_schema</code> e <code>query_data</code> em paralelo → <code>calculate_metrics</code> → <code>generate_report</code> — as últimas duas sequenciais.</li>
  <li data-option="e"><strong>e.</strong> <code>query_data → get_schema → calculate_metrics → generate_report</code> — todas sequenciais.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 3</h3>

<p>Observe o trecho abaixo de um agente que usa o padrão <strong>Planner-Executor</strong>:</p>
<p><pre><code class="language-python"># PLANNER
plano = planner.messages.create(
   system="Você é um planejador. Dado um objetivo, quebre em passos executáveis.",
   messages=[{"role": "user", "content": objetivo}]
)</p>
<p>passos = parse_steps(plano)</p>
<p># EXECUTOR
for passo in passos:
   resultado = executor.messages.create(
       system="Você é um executor. Execute o passo usando as ferramentas disponíveis.",
       messages=[{"role": "user", "content": passo}]
   )</code></pre></p>
<p>Qual é a principal vantagem do padrão <strong>Planner-Executor</strong> em relação ao <strong>ReAct simples</strong>?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Planner-Executor é mais rápido porque usa menos tokens por chamada.</li>
  <li data-option="b"><strong>b.</strong> Planner-Executor elimina a necessidade de ferramentas — o Planner resolve tudo em linguagem natural.</li>
  <li data-option="c"><strong>c.</strong> Separar quem planeja de quem executa permite controlar melhor tarefas longas — o plano é validável antes da execução começar.</li>
  <li data-option="d"><strong>d.</strong> É equivalente ao ReAct — a única diferença é que usa dois modelos em vez de um.</li>
  <li data-option="e"><strong>e.</strong> O Executor nunca comete erros porque segue um plano fixo gerado pelo Planner.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 4</h3>

<p>Um desenvolvedor precisa escolher entre <strong>ReAct</strong> e <strong>Planner-Executor</strong> para dois cenários:</p>
<p><strong>Cenário A:</strong></p>
<p><pre><code class="language-text">"Qual é o status do pedido #1042?"</code></pre></p>
<p><strong>Cenário B:</strong></p>
<p><pre><code class="language-text">"Analise todos os arquivos em ./codigo_alvo, corrija os erros
de linting, execute os testes e gere um relatório final."</code></pre></p>
<p>Qual combinação de padrões faz mais sentido para cada cenário?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> ReAct para os dois — mais simples e suficiente em qualquer situação.</li>
  <li data-option="b"><strong>b.</strong> Nenhum dos dois — tarefas com arquivos exigem sempre um agente com memória persistente.</li>
  <li data-option="c"><strong>c.</strong> ReAct para o Cenário A e Planner-Executor para o Cenário B.</li>
  <li data-option="d"><strong>d.</strong> Planner-Executor para o Cenário A e ReAct para o Cenário B.</li>
  <li data-option="e"><strong>e.</strong> Planner-Executor para os dois — mais organizado e seguro em qualquer situação.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 5</h3>

<p>Considerando o pseudocódigo abaixo:</p>
<p><pre><code class="language-python">memory = []</p>
<p>function add_message(msg):
  memory.append(msg)</code></pre></p>
<p>Qual é o papel da variável <code>memory</code>?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Armazenar dados permanentemente.</li>
  <li data-option="b"><strong>b.</strong> Executar buscas semânticas.</li>
  <li data-option="c"><strong>c.</strong> Guardar contexto recente da conversa.</li>
  <li data-option="d"><strong>d.</strong> Substituir banco de dados.</li>
  <li data-option="e"><strong>e.</strong> Armazenar embeddings.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 6</h3>

<p>Considerando o contexto como combinação da memória de curto e longo prazo, como no pseudocódigo abaixo:</p>
<p><pre><code class="language-python">context = short_term + long_term_results</code></pre></p>
<p>Qual o benefício dessa combinação?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Eliminar a necessidade de banco de dados.</li>
  <li data-option="b"><strong>b.</strong> Melhorar contexto da resposta.</li>
  <li data-option="c"><strong>c.</strong> Reduzir o uso de embeddings.</li>
  <li data-option="d"><strong>d.</strong> Permitir busca inteligente.</li>
  <li data-option="e"><strong>e.</strong> Garantir respostas sempre corretas.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="e">
<h3>Questão 7</h3>

<p>Sendo o pseudocódigo abaixo:</p>
<p><pre><code class="language-python">context = all_memory</code></pre></p>
<p>Representando que o contexto acumulou toda a memória.</p>
<p>Qual problema isso pode causar?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Código mais rápido.</li>
  <li data-option="b"><strong>b.</strong> Redução de custo.</li>
  <li data-option="c"><strong>c.</strong> Menos latência.</li>
  <li data-option="d"><strong>d.</strong> Mais precisão sempre.</li>
  <li data-option="e"><strong>e.</strong> Confusão no modelo.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 8</h3>

<p>Considerando o código para inserir embeddings no banco:</p>
<p><pre><code class="language-python">embedding = embed(text)
vector_db.insert(embedding, text)</code></pre></p>
<p>Para que é usado?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Para ordenar documentos por data automaticamente.</li>
  <li data-option="b"><strong>b.</strong> Para reduzir o tamanho do texto armazenado.</li>
  <li data-option="c"><strong>c.</strong> Para criptografar os dados antes de armazenar.</li>
  <li data-option="d"><strong>d.</strong> Para representar significado em formato vetorial e permitir busca por similaridade.</li>
  <li data-option="e"><strong>e.</strong> Para substituir completamente bancos de dados tradicionais.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 9</h3>

<p>Considerando três agentes e sendo <code>result_1</code> o resultado do <code>agent_1</code>, <code>result_2</code> o resultado do <code>agent_2</code> e <code>final_result</code> o resultado do <code>agent_3</code>, cada um com os inputs mostrados abaixo:</p>
<p><pre><code class="language-python">result_1 = agent_1(input)
result_2 = agent_2(result_1)
final_result = agent_3(result_2)</code></pre></p>
<p>Em relação ao fluxo, qual é a principal característica desse fluxo de orquestração?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Os agentes trabalham ao mesmo tempo.</li>
  <li data-option="b"><strong>b.</strong> Todos os agentes recebem o mesmo input inicial sem dependência.</li>
  <li data-option="c"><strong>c.</strong> O resultado do <code>agent_1</code> depende do input. Os demais dependem da saída do agente anterior.</li>
  <li data-option="d"><strong>d.</strong> O processamento é distribuído de forma assíncrona.</li>
  <li data-option="e"><strong>e.</strong> O fluxo elimina a necessidade de memória.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 10</h3>

<p>Em sistemas com agentes, qual é o principal papel da memória?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Fazer todos os agentes produzirem a mesma resposta.</li>
  <li data-option="b"><strong>b.</strong> Guardar contexto e informações úteis para uso em interações futuras.</li>
  <li data-option="c"><strong>c.</strong> Eliminar a necessidade de contexto na entrada do prompt.</li>
  <li data-option="d"><strong>d.</strong> Garantir que o agente sempre responda mais rápido.</li>
  <li data-option="e"><strong>e.</strong> Substituir completamente o uso de tools.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>