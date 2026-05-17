# 📝 Quiz — RAG e Avaliação de LLMs

Teste seus conhecimentos sobre RAG, integração de tools e avaliação.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="b">
<h3>Questão 1</h3>

<p>Qual o principal motivo para usar RAG em vez de fine-tuning quando se quer adicionar conhecimento específico a um LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> RAG é sempre mais preciso que fine-tuning.</li>
  <li data-option="b"><strong>b.</strong> RAG permite atualizar o conhecimento sem retreinar o modelo.</li>
  <li data-option="c"><strong>c.</strong> Fine-tuning não funciona com modelos modernos.</li>
  <li data-option="d"><strong>d.</strong> RAG não precisa de embeddings.</li>
</ul>
<div class="quiz-feedback" data-explanation="RAG busca informação atualizada em tempo real de uma base externa. Fine-tuning congela o conhecimento no momento do treino e é caro para atualizar."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 2</h3>

<p>O que é "chunking com overlap" e por que é importante?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Dividir texto em pedaços que se sobrepõem para reduzir custos.</li>
  <li data-option="b"><strong>b.</strong> Comprimir chunks para caber mais no contexto.</li>
  <li data-option="c"><strong>c.</strong> Dividir texto com sobreposição entre pedaços para não perder informação nas bordas.</li>
  <li data-option="d"><strong>d.</strong> Duplicar todos os chunks para redundância.</li>
</ul>
<div class="quiz-feedback" data-explanation="Overlap garante que informações que cruzam a fronteira entre dois chunks não sejam perdidas — cada chunk compartilha algumas sentenças com o anterior/próximo."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>No padrão "LLM as a Judge", qual é a função do modelo avaliador?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Avaliar a qualidade das respostas de outro LLM segundo critérios definidos.</li>
  <li data-option="b"><strong>b.</strong> Gerar respostas melhores que o modelo principal.</li>
  <li data-option="c"><strong>c.</strong> Treinar o modelo principal com feedback.</li>
  <li data-option="d"><strong>d.</strong> Substituir avaliadores humanos permanentemente.</li>
</ul>
<div class="quiz-feedback" data-explanation="LLM as a Judge usa um modelo para pontuar saídas de outro em dimensões como fidelidade, correção e tom — escalando avaliação sem depender 100% de humanos."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 4</h3>

<p>Qual métrica avalia se a resposta do RAG é fiel aos documentos recuperados (sem inventar)?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Recall.</li>
  <li data-option="b"><strong>b.</strong> Latência.</li>
  <li data-option="c"><strong>c.</strong> Throughput.</li>
  <li data-option="d"><strong>d.</strong> Faithfulness (fidelidade ao contexto).</li>
</ul>
<div class="quiz-feedback" data-explanation="Faithfulness mede se a resposta gerada é suportada pelos documentos recuperados — detecta quando o modelo alucina além do contexto fornecido."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 5</h3>

<p>Por que usar o mesmo modelo de embedding na ingestion e na inference do RAG?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque modelos diferentes são mais caros.</li>
  <li data-option="b"><strong>b.</strong> Porque vetores de modelos diferentes vivem em espaços incompatíveis — a busca por similaridade não funciona.</li>
  <li data-option="c"><strong>c.</strong> Porque a API só aceita um modelo por collection.</li>
  <li data-option="d"><strong>d.</strong> Não é necessário — qualquer modelo funciona.</li>
</ul>
<div class="quiz-feedback" data-explanation="Cada modelo de embedding cria um espaço vetorial próprio. Misturar modelos é como comparar coordenadas GPS com CEPs — os números não são compatíveis."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 6</h3>

<p>O que é "retrieval recall" na avaliação de um sistema RAG?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> A velocidade com que documentos são recuperados.</li>
  <li data-option="b"><strong>b.</strong> O custo total de embeddings gerados.</li>
  <li data-option="c"><strong>c.</strong> A proporção de documentos relevantes que foram efetivamente recuperados pelo sistema.</li>
  <li data-option="d"><strong>d.</strong> O número total de documentos no banco vetorial.</li>
</ul>
<div class="quiz-feedback" data-explanation="Retrieval recall: dos documentos que DEVERIAM ser encontrados, quantos o sistema realmente encontrou? Recall baixo = informação relevante não chega ao LLM."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Qual a diferença entre avaliação "reference-based" e "reference-free"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Reference-based compara com uma resposta esperada; reference-free avalia qualidade sem gabarito.</li>
  <li data-option="b"><strong>b.</strong> Reference-based usa RAG; reference-free não.</li>
  <li data-option="c"><strong>c.</strong> Reference-free é sempre mais preciso.</li>
  <li data-option="d"><strong>d.</strong> Não há diferença prática entre os dois.</li>
</ul>
<div class="quiz-feedback" data-explanation="Reference-based: tem 'ground truth' para comparar (ex: resposta correta). Reference-free: avalia coerência, tom e formato sem gabarito — útil quando não há resposta única correta."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 8</h3>

<p>O que é "answer relevance" na avaliação de RAG?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Se os documentos recuperados são recentes.</li>
  <li data-option="b"><strong>b.</strong> Se o modelo respondeu rápido o suficiente.</li>
  <li data-option="c"><strong>c.</strong> Se o embedding foi gerado corretamente.</li>
  <li data-option="d"><strong>d.</strong> Se a resposta gerada realmente responde à pergunta do usuário.</li>
</ul>
<div class="quiz-feedback" data-explanation="Answer relevance: o modelo pode gerar texto fiel aos documentos mas que não responde a pergunta feita. Mede se a resposta é útil para o que foi perguntado."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 9</h3>

<p>Por que usar "metadata filtering" junto com busca vetorial no RAG?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Para reduzir o tamanho dos embeddings.</li>
  <li data-option="b"><strong>b.</strong> Para restringir a busca a um subconjunto relevante (ex: só docs do agente X, ou só de 2024).</li>
  <li data-option="c"><strong>c.</strong> Para acelerar a geração de embeddings.</li>
  <li data-option="d"><strong>d.</strong> Para substituir a busca por similaridade.</li>
</ul>
<div class="quiz-feedback" data-explanation="Filtros de metadata combinam busca semântica com restrições exatas — ex: buscar por similaridade MAS apenas em documentos do departamento financeiro."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Qual o risco de usar limit muito alto (ex: top-20) na busca vetorial do RAG?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Documentos irrelevantes poluem o contexto e degradam a qualidade da resposta (context rot).</li>
  <li data-option="b"><strong>b.</strong> O banco vetorial fica mais lento permanentemente.</li>
  <li data-option="c"><strong>c.</strong> O modelo se recusa a responder com muitos documentos.</li>
  <li data-option="d"><strong>d.</strong> Não há risco — mais contexto é sempre melhor.</li>
</ul>
<div class="quiz-feedback" data-explanation="Mais documentos ≠ melhor resposta. Documentos de baixa relevância diluem o sinal e confundem o modelo. Best practice: limit=3-5 com re-ranking."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
