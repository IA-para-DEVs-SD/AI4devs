# 📝 Quiz — Agentes em Produção

Teste seus conhecimentos sobre deploy, observabilidade e operação de agentes em produção.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="b">
<h3>Questão 1</h3>

<p>Qual a principal diferença entre um protótipo de agente e um agente pronto para produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O protótipo usa Python e produção usa Java.</li>
  <li data-option="b"><strong>b.</strong> Produção exige observabilidade, fallbacks, limites de autonomia e tratamento de falhas.</li>
  <li data-option="c"><strong>c.</strong> Protótipos não usam LLMs reais.</li>
  <li data-option="d"><strong>d.</strong> Produção não precisa de testes porque o LLM se auto-corrige.</li>
</ul>
<div class="quiz-feedback" data-explanation="Um agente em produção precisa de logging, métricas, circuit breakers, fallbacks e limites claros de autonomia — coisas que protótipos ignoram."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 2</h3>

<p>O que é um "fallback" no contexto de agentes de IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um modelo de backup que é treinado automaticamente.</li>
  <li data-option="b"><strong>b.</strong> Um log de erros para análise posterior.</li>
  <li data-option="c"><strong>c.</strong> Uma métrica de qualidade do agente.</li>
  <li data-option="d"><strong>d.</strong> Um comportamento alternativo quando o caminho principal falha (ex: escalonar para humano).</li>
</ul>
<div class="quiz-feedback" data-explanation="Fallback é o plano B: se o LLM falha, timeout ou retorna lixo, o sistema tem um caminho seguro — pode ser resposta padrão, outro modelo, ou escalonamento humano."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>Por que modularizar um agente em componentes separados (tools, memory, orchestrator)?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Permite testar, substituir e escalar cada parte independentemente.</li>
  <li data-option="b"><strong>b.</strong> Porque LLMs não funcionam com código monolítico.</li>
  <li data-option="c"><strong>c.</strong> Para reduzir o número de tokens usados.</li>
  <li data-option="d"><strong>d.</strong> Porque é obrigatório pelo protocolo MCP.</li>
</ul>
<div class="quiz-feedback" data-explanation="Modularidade permite trocar o modelo sem mudar tools, atualizar uma tool sem afetar o orquestrador, e testar cada componente isoladamente."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 4</h3>

<p>Como definir o nível de autonomia adequado para um agente em produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Sempre dar autonomia total — o LLM sabe o que fazer.</li>
  <li data-option="b"><strong>b.</strong> Nunca dar autonomia — humano aprova tudo.</li>
  <li data-option="c"><strong>c.</strong> Baseado no risco: ações de baixo risco são autônomas; alto risco exige aprovação humana.</li>
  <li data-option="d"><strong>d.</strong> Baseado no custo de tokens da operação.</li>
</ul>
<div class="quiz-feedback" data-explanation="Autonomia escalonada: responder perguntas (autônomo) → enviar e-mail (confirma) → deletar dados (requer aprovação). Risco define o nível de human-in-the-loop."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 5</h3>

<p>Qual o risco de memória persistente sem controle em agentes de produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O agente fica mais lento com o tempo.</li>
  <li data-option="b"><strong>b.</strong> Informações desatualizadas ou incorretas podem contaminar respostas futuras indefinidamente.</li>
  <li data-option="c"><strong>c.</strong> O banco de dados vetorial fica cheio e para de funcionar.</li>
  <li data-option="d"><strong>d.</strong> Não há risco — mais memória é sempre melhor.</li>
</ul>
<div class="quiz-feedback" data-explanation="Context Poisoning: uma alucinação salva na memória vira 'verdade' para o agente. Memória em produção precisa de TTL, validação e mecanismo de correção."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 6</h3>

<p>O que é um "circuit breaker" no contexto de agentes de IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um componente que aumenta a velocidade do agente.</li>
  <li data-option="b"><strong>b.</strong> Um teste unitário que roda antes de cada deploy.</li>
  <li data-option="c"><strong>c.</strong> Um mecanismo que interrompe chamadas a um serviço quando ele está falhando repetidamente, evitando cascata de erros.</li>
  <li data-option="d"><strong>d.</strong> Um limite de tokens por sessão.</li>
</ul>
<div class="quiz-feedback" data-explanation="Circuit breaker: após N falhas consecutivas, para de chamar o serviço por um tempo. Evita que um LLM fora do ar derrube todo o sistema com timeouts em cascata."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Por que registrar (logar) todas as decisões de um agente em produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Para auditoria, debugging e melhoria contínua — entender por que o agente tomou cada decisão.</li>
  <li data-option="b"><strong>b.</strong> Porque é obrigatório por lei em todos os países.</li>
  <li data-option="c"><strong>c.</strong> Para treinar o modelo com os logs.</li>
  <li data-option="d"><strong>d.</strong> Apenas para calcular custos de tokens.</li>
</ul>
<div class="quiz-feedback" data-explanation="Logs de decisão permitem: debugar comportamentos inesperados, auditar ações do agente, identificar padrões de erro e melhorar prompts/tools com base em dados reais."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 8</h3>

<p>Qual estratégia de deploy é mais segura para um agente novo?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Deploy direto para 100% dos usuários.</li>
  <li data-option="b"><strong>b.</strong> Rodar apenas em ambiente de desenvolvimento indefinidamente.</li>
  <li data-option="c"><strong>c.</strong> Substituir o agente antigo sem período de transição.</li>
  <li data-option="d"><strong>d.</strong> Rollout gradual (canary) — começar com % pequeno de tráfego e expandir conforme métricas confirmam qualidade.</li>
</ul>
<div class="quiz-feedback" data-explanation="Canary deploy: direciona 5-10% do tráfego para o novo agente, monitora métricas (qualidade, erros, latência) e só expande se tudo estiver saudável."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 9</h3>

<p>O que é "human escalation" e quando deve ser acionada?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Quando o agente precisa de mais tokens para responder.</li>
  <li data-option="b"><strong>b.</strong> Quando o agente detecta que não tem confiança suficiente ou a ação é de alto risco — transfere para um humano.</li>
  <li data-option="c"><strong>c.</strong> Quando o usuário pede para falar com outro modelo.</li>
  <li data-option="d"><strong>d.</strong> Quando o custo da sessão ultrapassa um limite.</li>
</ul>
<div class="quiz-feedback" data-explanation="Human escalation: o agente reconhece seus limites e transfere para um humano. Critérios: baixa confiança, ação irreversível, tema sensível, ou pedido explícito do usuário."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Qual item NÃO faz parte de um checklist de "agente pronto para produção"?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O agente deve ter 100% de acurácia em todas as respostas.</li>
  <li data-option="b"><strong>b.</strong> Fallbacks definidos para quando o LLM falha.</li>
  <li data-option="c"><strong>c.</strong> Observabilidade com traces por request.</li>
  <li data-option="d"><strong>d.</strong> Limites de autonomia por nível de risco.</li>
</ul>
<div class="quiz-feedback" data-explanation="100% de acurácia é impossível com LLMs (são probabilísticos). O checklist real inclui: fallbacks, observabilidade, limites de autonomia, rate limiting e plano de rollback."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
