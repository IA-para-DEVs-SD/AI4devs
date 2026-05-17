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

<div class="quiz-container" data-answer="c">
<h3>Questão 6</h3>

<p>O que é "function calling" no contexto de LLMs?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo executa código Python diretamente.</li>
  <li data-option="b"><strong>b.</strong> O usuário chama funções da API do modelo.</li>
  <li data-option="c"><strong>c.</strong> O modelo gera um JSON estruturado indicando qual função chamar e com quais parâmetros.</li>
  <li data-option="d"><strong>d.</strong> O modelo compila e roda funções em sandbox.</li>
</ul>
<div class="quiz-feedback" data-explanation="Function calling: o modelo não executa nada — ele retorna um JSON com nome da função e argumentos. Sua aplicação é responsável por executar e retornar o resultado."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 7</h3>

<p>Qual a diferença entre um guardrail de input e um guardrail de output?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Input guardrails são mais caros que output guardrails.</li>
  <li data-option="b"><strong>b.</strong> Input guardrails filtram o que entra no modelo; output guardrails validam o que sai antes de entregar ao usuário.</li>
  <li data-option="c"><strong>c.</strong> Não há diferença — ambos fazem a mesma coisa.</li>
  <li data-option="d"><strong>d.</strong> Output guardrails treinam o modelo; input guardrails não.</li>
</ul>
<div class="quiz-feedback" data-explanation="Input: bloqueia prompt injection, dados sensíveis, requests fora do escopo. Output: valida formato, filtra conteúdo inadequado, verifica alucinações."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 8</h3>

<p>O que acontece se um agente ReAct não encontrar a resposta após várias iterações?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo trava e não responde.</li>
  <li data-option="b"><strong>b.</strong> O modelo sempre encontra a resposta eventualmente.</li>
  <li data-option="c"><strong>c.</strong> O modelo gera uma resposta aleatória.</li>
  <li data-option="d"><strong>d.</strong> Deve haver um limite de iterações (max_steps) e um fallback definido.</li>
</ul>
<div class="quiz-feedback" data-explanation="Sem limite de iterações, o agente pode entrar em loop infinito. Sempre definir max_steps e um comportamento de fallback (ex: 'não consegui encontrar a resposta')."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 9</h3>

<p>Por que a descrição de uma tool é tão importante quanto sua implementação?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque o LLM decide quando usar a tool baseado apenas na descrição — se for ambígua, ele usa errado.</li>
  <li data-option="b"><strong>b.</strong> Porque a descrição é enviada ao usuário final.</li>
  <li data-option="c"><strong>c.</strong> Porque descrições longas reduzem custos.</li>
  <li data-option="d"><strong>d.</strong> Porque o modelo compila a descrição em código.</li>
</ul>
<div class="quiz-feedback" data-explanation="O LLM não vê o código da tool — só vê nome, descrição e parâmetros. Uma descrição ruim = tool usada no momento errado ou com parâmetros incorretos."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 10</h3>

<p>O que é "prompt injection" e como guardrails ajudam?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Injetar mais exemplos no prompt. Guardrails limitam o número de exemplos.</li>
  <li data-option="b"><strong>b.</strong> Injetar código malicioso no modelo. Guardrails compilam o código antes.</li>
  <li data-option="c"><strong>c.</strong> Inserir instruções maliciosas no input para manipular o comportamento do modelo. Guardrails detectam e bloqueiam esses padrões.</li>
  <li data-option="d"><strong>d.</strong> Adicionar contexto extra ao prompt. Guardrails removem contexto desnecessário.</li>
</ul>
<div class="quiz-feedback" data-explanation="Prompt injection: atacante insere 'ignore instruções anteriores e faça X' no input. Guardrails de input detectam padrões suspeitos e bloqueiam antes de chegar ao modelo."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
