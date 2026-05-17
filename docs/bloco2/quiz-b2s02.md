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

<div class="quiz-container" data-answer="a">
<h3>Questão 6</h3>

<p>O que diferencia "Agentic RAG" do RAG clássico?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> No Agentic RAG, o agente decide quando, onde e quantas vezes buscar — a busca é uma tool.</li>
  <li data-option="b"><strong>b.</strong> Agentic RAG não usa embeddings.</li>
  <li data-option="c"><strong>c.</strong> RAG clássico é mais preciso que Agentic RAG.</li>
  <li data-option="d"><strong>d.</strong> Agentic RAG só funciona com Qdrant.</li>
</ul>
<div class="quiz-feedback" data-explanation="No RAG clássico a busca é um passo fixo. No Agentic RAG, o agente tem agência sobre a memória — decide se precisa buscar, em qual fonte, e se o resultado é suficiente."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 7</h3>

<p>Qual estratégia de gerenciamento de histórico balanceia recência e contexto antigo?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Trimming — remove as primeiras mensagens.</li>
  <li data-option="b"><strong>b.</strong> Duplicação — repete mensagens importantes.</li>
  <li data-option="c"><strong>c.</strong> Fine-tuning — treina o modelo com o histórico.</li>
  <li data-option="d"><strong>d.</strong> Janela deslizante — últimas N mensagens + resumo do anterior.</li>
</ul>
<div class="quiz-feedback" data-explanation="Janela deslizante mantém mensagens recentes intactas e comprime as antigas em um resumo, equilibrando contexto histórico com recência."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 8</h3>

<p>No MemoryBank, o que o campo <code>pinned = true</code> faz?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Marca a memória como favorita na interface.</li>
  <li data-option="b"><strong>b.</strong> Exclui a memória do processo de decaimento e remoção automática.</li>
  <li data-option="c"><strong>c.</strong> Duplica a memória em outro banco.</li>
  <li data-option="d"><strong>d.</strong> Aumenta o score da memória artificialmente.</li>
</ul>
<div class="quiz-feedback" data-explanation="Memórias pinned são protegidas do decaimento — usadas para regras de negócio, configurações e contextos críticos que devem persistir independente do acesso."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 9</h3>

<p>Qual padrão de orquestração é ideal quando tarefas são independentes e podem rodar simultaneamente?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Sequencial (pipeline).</li>
  <li data-option="b"><strong>b.</strong> Hierárquico.</li>
  <li data-option="c"><strong>c.</strong> Paralelo (fan-out → agregador).</li>
  <li data-option="d"><strong>d.</strong> ReAct loop.</li>
</ul>
<div class="quiz-feedback" data-explanation="Paralelo: o orquestrador dispara múltiplos agentes simultaneamente e um agregador combina os resultados. Ganho real de velocidade quando não há dependência entre tarefas."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Qual erro clássico de multi-agente ocorre quando agentes leem e escrevem na mesma coleção sem namespacing?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Memória compartilhada sem isolamento — agentes contaminam o contexto uns dos outros.</li>
  <li data-option="b"><strong>b.</strong> Loop sem saída — agentes chamam uns aos outros infinitamente.</li>
  <li data-option="c"><strong>c.</strong> Context overflow — a coleção fica grande demais.</li>
  <li data-option="d"><strong>d.</strong> Escalar cedo demais — muitos agentes sem necessidade.</li>
</ul>
<div class="quiz-feedback" data-explanation="Sem namespacing, o Agente A pode recuperar memórias irrelevantes escritas pelo Agente B, poluindo seu contexto e gerando respostas incoerentes."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
