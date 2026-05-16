# 📝 Quiz — Prompt Engineering

Teste seus conhecimentos! Clique na resposta que considerar correta.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="d">
<h3>Questão 1</h3>

<p>Um desenvolvedor usa o seguinte prompt:</p>
<p>Prompt =
'''Classifique o sentimento do texto como positivo ou negativo.</p>
<p>Texto: "O atendimento foi rápido e resolveu meu problema."
'''</p>
<p>Qual técnica está sendo usada?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Few-shot prompting.</li>
  <li data-option="b"><strong>b.</strong> Chain of Thought (CoT).</li>
  <li data-option="c"><strong>c.</strong> One-shot prompting.</li>
  <li data-option="d"><strong>d.</strong> Zero-shot prompting.</li>
  <li data-option="e"><strong>e.</strong> Multi-prompting.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 2</h3>

<p>Um desenvolvedor inclui exemplos no prompt:</p>
<p>Prompt = ””
Texto: "Adorei o produto!" → positivo
Texto: "O serviço foi péssimo." → negativo</p>
<p>Agora classifique:</p>
<p>Texto: "O atendimento foi rápido."
””</p>
<p>Qual técnica está sendo usada?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Chain-of-thought.</li>
  <li data-option="b"><strong>b.</strong> Few-shot prompting.</li>
  <li data-option="c"><strong>c.</strong> Zero-shot prompting.</li>
  <li data-option="d"><strong>d.</strong> Prompt injection.</li>
  <li data-option="e"><strong>e.</strong> RAG (Retrieval-Augmented Generation).</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 3</h3>

<p>Um desenvolvedor escreve o seguinte prompt:</p>
<p>Prompt = '''
Resolva o problema abaixo.</p>
<p>Explique seu raciocínio passo a passo antes de dar a resposta final.
'''</p>
<p>Qual técnica está sendo utilizada?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Compressão de prompt.</li>
  <li data-option="b"><strong>b.</strong> Multi-prompt.</li>
  <li data-option="c"><strong>c.</strong> Chain-of-thought prompting.</li>
  <li data-option="d"><strong>d.</strong> Few-shot prompting.</li>
  <li data-option="e"><strong>e.</strong> Zero-shot prompting.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="e">
<h3>Questão 4</h3>

<p>Um desenvolvedor cria um prompt dividido em partes:</p>
<p>Prompt = '''</p>
<p># Papel
Você é um analista de suporte técnico.</p>
<p># Tarefa
Analise o ticket e identifique o problema principal.</p>
<p># Formato da resposta
Retorne apenas JSON.</p>
<p>'''</p>
<p>Qual é o objetivo principal dessa estrutura?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Treinar o modelo.</li>
  <li data-option="b"><strong>b.</strong> Realizar fine-tuning do modelo.</li>
  <li data-option="c"><strong>c.</strong> Reduzir o número de tokens.</li>
  <li data-option="d"><strong>d.</strong> Tornar o modelo mais criativo.</li>
  <li data-option="e"><strong>e.</strong> Controlar melhor o comportamento e a saída do modelo.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 5</h3>

<p>Um desenvolvedor está ajustando os parâmetros de um modelo de linguagem e define:</p>
<p>temperature = 0.1</p>
<p>Qual é o efeito mais provável dessa configuração?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo produzirá respostas mais criativas e variadas.</li>
  <li data-option="b"><strong>b.</strong> O modelo passará a aprender com a conversa.</li>
  <li data-option="c"><strong>c.</strong> O modelo utilizará fontes externas de informação para responder.</li>
  <li data-option="d"><strong>d.</strong> O modelo produzirá respostas mais determinísticas e previsíveis.</li>
  <li data-option="e"><strong>e.</strong> O modelo utilizará menos memória durante a geração.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 6</h3>

<p>Um sistema de IA usa o seguinte fluxo:</p>
<p>Pergunta do usuário
↓
Prompt 1 – classificar a pergunta
↓
Prompt 2 – buscar informações relevantes
↓
Prompt 3 – gerar resposta final</p>
<p>Esse tipo de arquitetura é conhecido como:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Fine-tuning supervisionado.</li>
  <li data-option="b"><strong>b.</strong> Chain-of-thought (CoT) prompting.</li>
  <li data-option="c"><strong>c.</strong> Multi-prompting.</li>
  <li data-option="d"><strong>d.</strong> Prompt injection.</li>
  <li data-option="e"><strong>e.</strong> Token compression.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Um desenvolvedor usa o seguinte prompt:</p>
<p>Prompt = '''
Analise o ticket e retorne a resposta no seguinte formato JSON:</p>
<p>{
"categoria": "",
"prioridade": "",
"resumo": ""
}</p>
<p>'''</p>
<p>Qual é a principal vantagem dessa abordagem?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Permitir integração com sistemas automatizados.</li>
  <li data-option="b"><strong>b.</strong> Melhorar a criatividade do modelo.</li>
  <li data-option="c"><strong>c.</strong> Reduzir custo do modelo.</li>
  <li data-option="d"><strong>d.</strong> Evitar ataques de prompt injection.</li>
  <li data-option="e"><strong>e.</strong> Treinar o modelo durante a execução.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 8</h3>

<p>Um desenvolvedor precisa analisar um texto longo. Ele decide dividir o processo em etapas:</p>
<p>Etapa 1 → extrair entidades 
Etapa 2 → classificar entidades 
Etapa 3 → gerar relatório</p>
<p>Por que dividir o problema em várias etapas?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Para aumentar a criatividade do modelo.</li>
  <li data-option="b"><strong>b.</strong> Para reduzir o tamanho do prompt.</li>
  <li data-option="c"><strong>c.</strong> Para melhorar controle e qualidade da resposta.</li>
  <li data-option="d"><strong>d.</strong> Para ensinar o modelo pelo exemplo.</li>
  <li data-option="e"><strong>e.</strong> Para treinar o modelo.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 9</h3>

<p>Um desenvolvedor escreve o seguinte prompt:</p>
<p>Prompt = '''
Você é um especialista em suporte técnico.</p>
<p>Analise o ticket abaixo e sugira a melhor solução para o problema.
'''</p>
<p>Qual é a principal vantagem de definir um papel para o modelo no prompt?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Controlar o estilo e o tipo de resposta gerada.</li>
  <li data-option="b"><strong>b.</strong> Treinar o modelo durante a execução.</li>
  <li data-option="c"><strong>c.</strong> Garantir que a resposta esteja sempre correta.</li>
  <li data-option="d"><strong>d.</strong> Reduzir o custo de execução do modelo.</li>
  <li data-option="e"><strong>e.</strong> Aumentar a criatividade do modelo.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="e">
<h3>Questão 10</h3>

<p>Um desenvolvedor escreve o seguinte prompt:</p>
<p>Prompt = '''
Resolva o problema abaixo.</p>
<p>Mostre seu raciocínio antes de apresentar a resposta final.
'''</p>
<p>Por que esse tipo de instrução pode melhorar a resposta do modelo?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque isso torna o modelo mais criativo.</li>
  <li data-option="b"><strong>b.</strong> Porque isso treina o modelo automaticamente.</li>
  <li data-option="c"><strong>c.</strong> Porque o modelo passa a aprender durante a conversa.</li>
  <li data-option="d"><strong>d.</strong> Porque isso reduz o número de tokens usados pelo modelo.</li>
  <li data-option="e"><strong>e.</strong> Porque o modelo é incentivado a desenvolver o raciocínio antes de responder.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>