# 📝 Quiz — Prompt Engineering

Teste seus conhecimentos sobre engenharia de prompt e contexto.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="c">
<h3>Questão 1</h3>

<p>Qual a diferença fundamental entre zero-shot e few-shot prompting?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Zero-shot usa mais tokens que few-shot.</li>
  <li data-option="b"><strong>b.</strong> Few-shot treina o modelo com novos dados.</li>
  <li data-option="c"><strong>c.</strong> Few-shot inclui exemplos no prompt para guiar o formato da resposta.</li>
  <li data-option="d"><strong>d.</strong> Zero-shot exige temperature=0 para funcionar.</li>
</ul>
<div class="quiz-feedback" data-explanation="Few-shot fornece exemplos de input→output no prompt, enquanto zero-shot apenas descreve a tarefa sem exemplos."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 2</h3>

<p>O que acontece quando você define <code>temperature=0</code> em uma chamada ao LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo para de funcionar.</li>
  <li data-option="b"><strong>b.</strong> As respostas ficam mais determinísticas e consistentes.</li>
  <li data-option="c"><strong>c.</strong> O modelo usa menos memória.</li>
  <li data-option="d"><strong>d.</strong> O modelo acessa fontes externas para validar.</li>
</ul>
<div class="quiz-feedback" data-explanation="Temperature=0 faz o modelo sempre escolher o token mais provável, gerando respostas consistentes e reproduzíveis."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>Chain of Thought (CoT) melhora respostas porque:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Força o modelo a explicitar o raciocínio antes da resposta final.</li>
  <li data-option="b"><strong>b.</strong> Conecta o modelo a uma base de dados externa.</li>
  <li data-option="c"><strong>c.</strong> Reduz o custo de tokens pela metade.</li>
  <li data-option="d"><strong>d.</strong> Substitui a necessidade de system prompt.</li>
</ul>
<div class="quiz-feedback" data-explanation="CoT faz o modelo 'pensar em voz alta', o que melhora a qualidade em tarefas de raciocínio e lógica."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 4</h3>

<p>Qual a principal vantagem de estruturar a saída do LLM em JSON?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Reduz alucinações do modelo.</li>
  <li data-option="b"><strong>b.</strong> Torna o modelo mais inteligente.</li>
  <li data-option="c"><strong>c.</strong> Elimina a necessidade de validação.</li>
  <li data-option="d"><strong>d.</strong> Permite integração direta com sistemas automatizados.</li>
</ul>
<div class="quiz-feedback" data-explanation="Saída estruturada em JSON pode ser parseada por código, permitindo pipelines automatizados sem intervenção humana."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 5</h3>

<p>Em um pipeline multi-prompt, por que dividir uma tarefa complexa em etapas?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Para treinar o modelo progressivamente.</li>
  <li data-option="b"><strong>b.</strong> Para reduzir o custo total de tokens.</li>
  <li data-option="c"><strong>c.</strong> Para ter mais controle e qualidade em cada etapa.</li>
  <li data-option="d"><strong>d.</strong> Para evitar que o modelo use ferramentas.</li>
</ul>
<div class="quiz-feedback" data-explanation="Dividir em etapas permite validar cada passo, usar prompts especializados e debugar problemas isoladamente."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 6</h3>

<p>O que é "prefill" (pré-preenchimento) na engenharia de prompt?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Iniciar a resposta do assistente com texto parcial para guiar o formato.</li>
  <li data-option="b"><strong>b.</strong> Preencher o system prompt com exemplos.</li>
  <li data-option="c"><strong>c.</strong> Cachear respostas anteriores para reutilizar.</li>
  <li data-option="d"><strong>d.</strong> Enviar múltiplas perguntas de uma vez.</li>
</ul>
<div class="quiz-feedback" data-explanation="Prefill coloca texto no role 'assistant' antes da geração — ex: começar com '{' força o modelo a continuar em JSON."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 7</h3>

<p>Qual a principal função das XML tags em prompts estruturados?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Tornar o prompt compatível com APIs SOAP.</li>
  <li data-option="b"><strong>b.</strong> Reduzir o número de tokens.</li>
  <li data-option="c"><strong>c.</strong> Ativar o modo de raciocínio do modelo.</li>
  <li data-option="d"><strong>d.</strong> Separar claramente dados de instruções, evitando que o modelo confunda contexto com comando.</li>
</ul>
<div class="quiz-feedback" data-explanation="XML tags como <context>, <instructions>, <examples> criam fronteiras claras entre seções do prompt, melhorando a aderência às instruções."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 8</h3>

<p>O que é Context Engineering e como difere de Prompt Engineering?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> São sinônimos — apenas nomes diferentes para a mesma coisa.</li>
  <li data-option="b"><strong>b.</strong> Prompt Engineering foca em escrever bons prompts; Context Engineering foca em gerenciar TODO o contexto (memória, tools, docs) automaticamente.</li>
  <li data-option="c"><strong>c.</strong> Context Engineering é exclusivo para RAG.</li>
  <li data-option="d"><strong>d.</strong> Prompt Engineering é mais avançado que Context Engineering.</li>
</ul>
<div class="quiz-feedback" data-explanation="Prompt Engineering = como perguntar. Context Engineering = o que colocar no contexto, onde e como — inclui memória, RAG, tool selection, histórico."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 9</h3>

<p>O que é "Lost in the Middle" e como mitigar?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo perde tokens no meio da geração. Solução: reduzir max_tokens.</li>
  <li data-option="b"><strong>b.</strong> O modelo esquece o system prompt. Solução: repetir no final.</li>
  <li data-option="c"><strong>c.</strong> O modelo ignora informação no meio do contexto. Solução: colocar info crítica no início ou fim.</li>
  <li data-option="d"><strong>d.</strong> O modelo para de gerar no meio da resposta. Solução: aumentar temperature.</li>
</ul>
<div class="quiz-feedback" data-explanation="LLMs prestam mais atenção ao início e fim do prompt (primacy/recency effect). Info importante deve ficar nessas posições, nunca enterrada no meio."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Qual a vantagem do DSPy sobre prompt engineering manual?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Otimiza prompts automaticamente com base em métricas, sem ajuste manual.</li>
  <li data-option="b"><strong>b.</strong> Elimina a necessidade de LLMs.</li>
  <li data-option="c"><strong>c.</strong> Funciona sem dados de exemplo.</li>
  <li data-option="d"><strong>d.</strong> É mais rápido que qualquer chamada de API.</li>
</ul>
<div class="quiz-feedback" data-explanation="DSPy trata prompts como programas compiláveis — define entradas, saídas e métricas, e o framework encontra a melhor formulação automaticamente."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
