# 📝 Quiz — Tools, Guardrails e ReAct

Teste seus conhecimentos sobre tools, guardrails e o padrão ReAct.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="a">
<h3>Questão 1</h3>

<p>No padrão ReAct, qual é a sequência correta do ciclo?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Thought → Action → Observation (repete até resolver).</li>
  <li data-option="b"><strong>b.</strong> Plan → Execute → Validate → Deploy.</li>
  <li data-option="c"><strong>c.</strong> Input → Output → Feedback → Retrain.</li>
  <li data-option="d"><strong>d.</strong> Query → Retrieve → Generate → Store.</li>
</ul>
<div class="quiz-feedback" data-explanation="ReAct alterna entre raciocinar (Thought), agir chamando uma tool (Action) e observar o resultado (Observation) até chegar na resposta."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 2</h3>

<p>Qual é o papel de um guardrail em um sistema com LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aumentar a velocidade de resposta do modelo.</li>
  <li data-option="b"><strong>b.</strong> Treinar o modelo com dados novos em tempo real.</li>
  <li data-option="c"><strong>c.</strong> Validar e restringir inputs/outputs para evitar comportamentos indesejados.</li>
  <li data-option="d"><strong>d.</strong> Substituir o system prompt por regras hardcoded.</li>
</ul>
<div class="quiz-feedback" data-explanation="Guardrails são camadas de validação que filtram entradas perigosas e saídas inadequadas, protegendo o sistema de prompt injection, dados sensíveis e respostas fora do escopo."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 3</h3>

<p>O que define uma "tool" no contexto de agentes LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um plugin instalado no navegador do usuário.</li>
  <li data-option="b"><strong>b.</strong> Um modelo de linguagem secundário.</li>
  <li data-option="c"><strong>c.</strong> Um banco de dados vetorial.</li>
  <li data-option="d"><strong>d.</strong> Uma função com nome, descrição e parâmetros que o LLM pode decidir chamar.</li>
</ul>
<div class="quiz-feedback" data-explanation="Tools são funções expostas ao LLM via schema (nome + descrição + parâmetros). O modelo decide quando e como chamá-las baseado no contexto."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 4</h3>

<p>Por que é importante limitar o número de tools disponíveis para um agente?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque o modelo só suporta 3 tools por chamada.</li>
  <li data-option="b"><strong>b.</strong> Porque muitas tools confundem o modelo e aumentam erros de seleção.</li>
  <li data-option="c"><strong>c.</strong> Porque cada tool custa dinheiro adicional.</li>
  <li data-option="d"><strong>d.</strong> Porque tools ocupam memória GPU.</li>
</ul>
<div class="quiz-feedback" data-explanation="Context Confusion: muitas tools irrelevantes no prompt levam o modelo a escolhas erradas. Melhor expor apenas as tools relevantes para a tarefa."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 5</h3>

<p>Qual a vantagem do ReAct sobre um pipeline fixo de prompts?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O agente se adapta dinamicamente com base nos resultados intermediários.</li>
  <li data-option="b"><strong>b.</strong> É sempre mais rápido que pipelines fixos.</li>
  <li data-option="c"><strong>c.</strong> Não precisa de tools para funcionar.</li>
  <li data-option="d"><strong>d.</strong> Garante que nunca haverá loops infinitos.</li>
</ul>
<div class="quiz-feedback" data-explanation="ReAct é exploratório — o agente observa resultados e decide o próximo passo, podendo mudar de estratégia se algo não funcionar."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
