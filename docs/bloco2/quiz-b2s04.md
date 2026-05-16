# 📝 Quiz — MCP, LangGraph e Agentes

Teste seus conhecimentos sobre MCP, LangGraph e arquitetura de agentes.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="d">
<h3>Questão 1</h3>

<p>O que é o Model Context Protocol (MCP)?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um formato de compressão de prompts.</li>
  <li data-option="b"><strong>b.</strong> Um modelo de linguagem da Anthropic.</li>
  <li data-option="c"><strong>c.</strong> Um banco de dados vetorial.</li>
  <li data-option="d"><strong>d.</strong> Um protocolo padrão para conectar LLMs a fontes de dados e ferramentas externas.</li>
</ul>
<div class="quiz-feedback" data-explanation="MCP padroniza como aplicações expõem contexto (dados, tools, prompts) para LLMs — como um 'USB-C para IA'."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 2</h3>

<p>Qual a principal diferença entre LangChain e LangGraph?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> LangGraph modela fluxos como grafos com estados, permitindo ciclos e condicionais complexos.</li>
  <li data-option="b"><strong>b.</strong> LangGraph é uma versão mais leve do LangChain.</li>
  <li data-option="c"><strong>c.</strong> LangChain não suporta tools.</li>
  <li data-option="d"><strong>d.</strong> LangGraph só funciona com modelos da OpenAI.</li>
</ul>
<div class="quiz-feedback" data-explanation="LangGraph usa grafos dirigidos com estado persistente — permite loops, branching condicional e checkpoints, ideal para agentes complexos."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 3</h3>

<p>No MCP, qual a diferença entre um "resource" e uma "tool"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Resources são mais rápidos que tools.</li>
  <li data-option="b"><strong>b.</strong> Tools são read-only, resources podem modificar dados.</li>
  <li data-option="c"><strong>c.</strong> Resources fornecem dados/contexto; tools executam ações com efeitos colaterais.</li>
  <li data-option="d"><strong>d.</strong> Não há diferença — são sinônimos.</li>
</ul>
<div class="quiz-feedback" data-explanation="Resources são fontes de contexto (leitura), enquanto tools são funções que o modelo pode invocar para realizar ações no mundo externo."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 4</h3>

<p>Por que usar um grafo de estados (LangGraph) em vez de um pipeline linear para um agente?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Grafos são sempre mais rápidos.</li>
  <li data-option="b"><strong>b.</strong> Permite que o agente volte a etapas anteriores, faça loops e tome decisões condicionais.</li>
  <li data-option="c"><strong>c.</strong> Pipelines lineares não suportam LLMs.</li>
  <li data-option="d"><strong>d.</strong> Grafos usam menos memória.</li>
</ul>
<div class="quiz-feedback" data-explanation="Agentes reais precisam de ciclos (retry, re-plan) e condicionais (se X então vá para Y). Grafos modelam isso naturalmente; pipelines lineares não."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 5</h3>

<p>Qual benefício o MCP traz para o ecossistema de ferramentas de IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Elimina a necessidade de API keys.</li>
  <li data-option="b"><strong>b.</strong> Torna todos os modelos open-source.</li>
  <li data-option="c"><strong>c.</strong> Reduz o custo de tokens em 50%.</li>
  <li data-option="d"><strong>d.</strong> Permite que uma integração funcione com qualquer cliente compatível, sem reescrever código.</li>
</ul>
<div class="quiz-feedback" data-explanation="MCP é um padrão aberto — um servidor MCP escrito uma vez funciona com Claude, Kiro, Cursor ou qualquer cliente que implemente o protocolo."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
