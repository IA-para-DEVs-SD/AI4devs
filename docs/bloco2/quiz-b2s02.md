# 📝 Quiz — Memória e Orquestração

Teste seus conhecimentos sobre memória de agentes e orquestração multi-agente.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="c">
<h3>Questão 1</h3>

<p>Qual tipo de memória corresponde ao array <code>messages[]</code> passado ao LLM a cada chamada?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Semantic Memory.</li>
  <li data-option="b"><strong>b.</strong> Procedural Memory.</li>
  <li data-option="c"><strong>c.</strong> Working Memory (short-term).</li>
  <li data-option="d"><strong>d.</strong> Episodic Memory.</li>
</ul>
<div class="quiz-feedback" data-explanation="Working Memory é o histórico da conversa atual — as mensagens injetadas no prompt a cada chamada. É volátil e limitada pela context window."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 2</h3>

<p>No RAG, qual é a ordem correta da fase de Inference?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Embed query → Similarity search → Augment prompt → Generate.</li>
  <li data-option="b"><strong>b.</strong> Generate → Search → Validate → Return.</li>
  <li data-option="c"><strong>c.</strong> Chunk → Embed → Store → Index.</li>
  <li data-option="d"><strong>d.</strong> Query → Fine-tune → Generate → Cache.</li>
</ul>
<div class="quiz-feedback" data-explanation="Na inference do RAG: a query vira vetor, busca documentos similares no vector DB, injeta no prompt e o LLM gera a resposta com esse contexto."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 3</h3>

<p>Qual o principal problema que o MemoryBank resolve em relação ao RAG tradicional?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> RAG tradicional não suporta embeddings.</li>
  <li data-option="b"><strong>b.</strong> RAG tradicional é muito caro para rodar.</li>
  <li data-option="c"><strong>c.</strong> RAG tradicional não funciona com Qdrant.</li>
  <li data-option="d"><strong>d.</strong> RAG tradicional acumula memórias indefinidamente, poluindo o contexto com ruído.</li>
</ul>
<div class="quiz-feedback" data-explanation="MemoryBank aplica decaimento (Ebbinghaus) — memórias não acessadas perdem relevância e são removidas, mantendo o contexto limpo."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 4</h3>

<p>Quando NÃO se deve usar arquitetura multi-agente?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Quando há domínios realmente distintos.</li>
  <li data-option="b"><strong>b.</strong> Quando um único agente com bom prompt já resolve o problema.</li>
  <li data-option="c"><strong>c.</strong> Quando existe ganho real de paralelismo.</li>
  <li data-option="d"><strong>d.</strong> Quando o contexto de um agente não é suficiente.</li>
</ul>
<div class="quiz-feedback" data-explanation="Regra de ouro: faça funcionar com 1 agente primeiro. Multi-agente adiciona complexidade e latência — só vale quando há ganho real."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 5</h3>

<p>No padrão de orquestração, por que o orquestrador passa apenas um resumo (não o histórico completo) entre agentes?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque os agentes não aceitam mais de 100 tokens.</li>
  <li data-option="b"><strong>b.</strong> Porque resumos são mais bonitos visualmente.</li>
  <li data-option="c"><strong>c.</strong> Para evitar context rot e reduzir custos — detalhes ficam no Qdrant para busca sob demanda.</li>
  <li data-option="d"><strong>d.</strong> Porque o orquestrador não tem acesso ao histórico completo.</li>
</ul>
<div class="quiz-feedback" data-explanation="Handoff cirúrgico: passa resumo via messages[] (rápido e barato) e deixa detalhes no Qdrant para busca semântica quando necessário."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
