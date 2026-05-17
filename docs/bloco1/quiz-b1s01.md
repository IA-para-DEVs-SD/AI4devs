# 📝 Quiz — Fundamentos de IA

Teste seus conhecimentos sobre LLMs, tokens, transformers e conceitos fundamentais.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="c">
<h3>Questão 1</h3>

<p>O que são "tokens" para um LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Caracteres individuais do texto.</li>
  <li data-option="b"><strong>b.</strong> Palavras completas separadas por espaço.</li>
  <li data-option="c"><strong>c.</strong> Pedaços de texto (subpalavras) que o modelo usa como unidade de processamento.</li>
  <li data-option="d"><strong>d.</strong> Sentenças inteiras codificadas em binário.</li>
</ul>
<div class="quiz-feedback" data-explanation="Tokens são subpalavras geradas por algoritmos como BPE. 'Desenvolvimento' pode virar ['Desen', 'volv', 'imento']. O modelo não vê texto — vê sequências de tokens."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 2</h3>

<p>Qual é a função do mecanismo de "atenção" (attention) nos Transformers?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Permitir que cada token considere o contexto de todos os outros tokens na sequência.</li>
  <li data-option="b"><strong>b.</strong> Filtrar tokens irrelevantes antes do processamento.</li>
  <li data-option="c"><strong>c.</strong> Comprimir o texto para caber na memória.</li>
  <li data-option="d"><strong>d.</strong> Traduzir tokens de um idioma para outro.</li>
</ul>
<div class="quiz-feedback" data-explanation="Self-attention calcula a relevância de cada token em relação a todos os outros, permitindo que o modelo entenda relações de longo alcance no texto."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 3</h3>

<p>O que é a "janela de contexto" de um LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O tempo máximo que o modelo leva para responder.</li>
  <li data-option="b"><strong>b.</strong> A quantidade de memória RAM que o modelo usa.</li>
  <li data-option="c"><strong>c.</strong> O número de camadas do transformer.</li>
  <li data-option="d"><strong>d.</strong> O número máximo de tokens que o modelo pode processar em uma única chamada (input + output).</li>
</ul>
<div class="quiz-feedback" data-explanation="A context window define o limite total de tokens (prompt + resposta). Ex: 128K tokens no GPT-4o. Tudo que não cabe é ignorado ou causa erro."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 4</h3>

<p>Por que LLMs são considerados "probabilísticos" e não "determinísticos"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque usam números aleatórios para gerar texto.</li>
  <li data-option="b"><strong>b.</strong> Porque selecionam o próximo token com base em distribuição de probabilidades, podendo variar a cada execução.</li>
  <li data-option="c"><strong>c.</strong> Porque não conseguem processar a mesma entrada duas vezes.</li>
  <li data-option="d"><strong>d.</strong> Porque dependem de conexão com a internet para funcionar.</li>
</ul>
<div class="quiz-feedback" data-explanation="LLMs geram texto token a token, amostrando de uma distribuição de probabilidades. Com temperature>0, a mesma entrada pode gerar saídas diferentes."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 5</h3>

<p>Qual a diferença entre pré-treinamento e fine-tuning de um LLM?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Pré-treinamento usa dados rotulados; fine-tuning usa dados brutos.</li>
  <li data-option="b"><strong>b.</strong> Fine-tuning cria um modelo do zero; pré-treinamento ajusta um existente.</li>
  <li data-option="c"><strong>c.</strong> Pré-treinamento aprende linguagem geral em dados massivos; fine-tuning especializa em uma tarefa com dados menores.</li>
  <li data-option="d"><strong>d.</strong> Não há diferença — são sinônimos.</li>
</ul>
<div class="quiz-feedback" data-explanation="Pré-treinamento: bilhões de tokens da internet → modelo generalista. Fine-tuning: milhares de exemplos específicos → modelo especializado em uma tarefa."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 6</h3>

<p>O que significa dizer que um LLM é "autoregressive"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Ele se corrige automaticamente quando erra.</li>
  <li data-option="b"><strong>b.</strong> Ele gera texto um token por vez, usando os tokens anteriores como contexto.</li>
  <li data-option="c"><strong>c.</strong> Ele regride para versões anteriores quando detecta alucinação.</li>
  <li data-option="d"><strong>d.</strong> Ele aprende continuamente com cada conversa.</li>
</ul>
<div class="quiz-feedback" data-explanation="Autoregressive: o modelo prediz o próximo token baseado em todos os anteriores. Gera texto sequencialmente, token a token, sem 'ver o futuro'."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 7</h3>

<p>Qual a relação entre tamanho da context window e custo?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Janelas maiores são sempre mais baratas.</li>
  <li data-option="b"><strong>b.</strong> O custo é fixo independente do tamanho do contexto.</li>
  <li data-option="c"><strong>c.</strong> Só o output é cobrado, o input é gratuito.</li>
  <li data-option="d"><strong>d.</strong> Mais tokens no contexto = mais custo, pois APIs cobram por token processado.</li>
</ul>
<div class="quiz-feedback" data-explanation="APIs cobram por token de input e output. Contexto grande = mais tokens processados a cada chamada = custo maior. E o custo cresce a cada turno pois o histórico é reenviado."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 8</h3>

<p>O que é "alucinação" em LLMs?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo gera informação que parece plausível mas é factualmente incorreta ou inventada.</li>
  <li data-option="b"><strong>b.</strong> O modelo se recusa a responder perguntas difíceis.</li>
  <li data-option="c"><strong>c.</strong> O modelo repete a mesma frase em loop.</li>
  <li data-option="d"><strong>d.</strong> O modelo gera texto em idioma diferente do solicitado.</li>
</ul>
<div class="quiz-feedback" data-explanation="Alucinação: o modelo 'inventa' fatos com alta confiança. Acontece porque ele otimiza para texto plausível, não para verdade factual."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 9</h3>

<p>Qual o papel do desenvolvedor na era dos LLMs, segundo o conceito de "dev como orquestrador"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Escrever todo o código manualmente sem usar IA.</li>
  <li data-option="b"><strong>b.</strong> Treinar modelos de linguagem do zero.</li>
  <li data-option="c"><strong>c.</strong> Definir objetivos, impor limites, validar resultados e orquestrar agentes de IA.</li>
  <li data-option="d"><strong>d.</strong> Apenas revisar código gerado sem entender o que faz.</li>
</ul>
<div class="quiz-feedback" data-explanation="O dev evolui de executor para orquestrador: decide O QUÊ e POR QUÊ, define limites de autonomia, valida outputs e garante qualidade — a IA executa o COMO."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 10</h3>

<p>Por que <code>temperature=0.9</code> é usada para geração criativa mas não para extração de dados?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque temperature alta torna o modelo mais inteligente.</li>
  <li data-option="b"><strong>b.</strong> Porque temperature alta aumenta a aleatoriedade na seleção de tokens — bom para criatividade, ruim para precisão.</li>
  <li data-option="c"><strong>c.</strong> Porque temperature alta reduz o custo de tokens.</li>
  <li data-option="d"><strong>d.</strong> Porque temperature alta faz o modelo acessar mais dados de treinamento.</li>
</ul>
<div class="quiz-feedback" data-explanation="Temperature controla a 'ousadia' do modelo. Alta = mais variação e criatividade. Baixa = mais previsível e preciso. Para extração/classificação, use 0; para brainstorming, use 0.7-0.9."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
