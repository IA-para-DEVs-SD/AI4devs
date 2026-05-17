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

<div class="quiz-container" data-answer="b">
<h3>Questão 6</h3>

<p>O que é um "state" no LangGraph?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O estado do servidor onde o agente roda.</li>
  <li data-option="b"><strong>b.</strong> Um objeto compartilhado entre nós do grafo que acumula informações ao longo da execução.</li>
  <li data-option="c"><strong>c.</strong> O histórico de mensagens do chat.</li>
  <li data-option="d"><strong>d.</strong> A configuração do modelo (temperature, max_tokens).</li>
</ul>
<div class="quiz-feedback" data-explanation="State no LangGraph é um TypedDict que flui entre nós — cada nó lê e modifica o estado, permitindo que informações persistam ao longo do grafo."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Qual a arquitetura do MCP (Model Context Protocol)?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Cliente (IDE/app) ↔ Servidor MCP (expõe tools/resources) — comunicação via JSON-RPC.</li>
  <li data-option="b"><strong>b.</strong> Modelo ↔ Banco de dados — comunicação via SQL.</li>
  <li data-option="c"><strong>c.</strong> Browser ↔ API REST — comunicação via HTTP.</li>
  <li data-option="d"><strong>d.</strong> Agente ↔ Agente — comunicação via WebSocket.</li>
</ul>
<div class="quiz-feedback" data-explanation="MCP usa arquitetura cliente-servidor: o cliente (Claude, Kiro, etc) se conecta a servidores MCP que expõem tools, resources e prompts via protocolo JSON-RPC padronizado."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 8</h3>

<p>O que é um "checkpoint" no LangGraph?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um ponto de validação de segurança.</li>
  <li data-option="b"><strong>b.</strong> Um log de performance.</li>
  <li data-option="c"><strong>c.</strong> Um snapshot do estado do grafo que permite retomar execução ou fazer rollback.</li>
  <li data-option="d"><strong>d.</strong> Um teste unitário do nó.</li>
</ul>
<div class="quiz-feedback" data-explanation="Checkpoints salvam o estado completo do grafo em pontos específicos — permite pausar/retomar execuções longas, implementar human-in-the-loop e debugar."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 9</h3>

<p>Qual a vantagem de usar "conditional edges" no LangGraph?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Reduzem o número de nós necessários.</li>
  <li data-option="b"><strong>b.</strong> Tornam o grafo mais rápido.</li>
  <li data-option="c"><strong>c.</strong> Eliminam a necessidade de estado.</li>
  <li data-option="d"><strong>d.</strong> Permitem que o fluxo tome caminhos diferentes baseado no resultado do nó anterior.</li>
</ul>
<div class="quiz-feedback" data-explanation="Conditional edges: 'se o resultado foi X, vá para nó A; se foi Y, vá para nó B'. Permite branching dinâmico baseado em decisões do LLM ou validações."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 10</h3>

<p>Por que MCP é comparado a um "USB-C para IA"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque usa a mesma porta física.</li>
  <li data-option="b"><strong>b.</strong> Porque é um padrão universal — uma integração funciona com qualquer cliente compatível, sem adaptadores.</li>
  <li data-option="c"><strong>c.</strong> Porque transfere dados na mesma velocidade.</li>
  <li data-option="d"><strong>d.</strong> Porque foi criado pela mesma empresa.</li>
</ul>
<div class="quiz-feedback" data-explanation="Assim como USB-C padronizou conectores, MCP padroniza como LLMs se conectam a ferramentas. Um servidor MCP funciona com Claude, Kiro, Cursor — sem reescrever código."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
