# 📝 Quiz — Low Code e Monitoramento

Teste seus conhecimentos sobre plataformas low-code e monitoramento de IA.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="b">
<h3>Questão 1</h3>

<p>Qual a principal vantagem de ferramentas low-code como Flowise e N8N para agentes de IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Substituem completamente a necessidade de programadores.</li>
  <li data-option="b"><strong>b.</strong> Permitem prototipar e iterar fluxos de agentes rapidamente sem código.</li>
  <li data-option="c"><strong>c.</strong> São mais performáticas que código Python puro.</li>
  <li data-option="d"><strong>d.</strong> Não precisam de API keys para funcionar.</li>
</ul>
<div class="quiz-feedback" data-explanation="Low-code acelera prototipagem — você monta fluxos visuais de agentes, testa rapidamente e depois pode migrar para código se precisar de mais controle."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 2</h3>

<p>Por que monitorar um agente de IA em produção é diferente de monitorar uma API tradicional?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Agentes não geram logs.</li>
  <li data-option="b"><strong>b.</strong> APIs tradicionais não têm latência.</li>
  <li data-option="c"><strong>c.</strong> Agentes sempre retornam o mesmo resultado.</li>
  <li data-option="d"><strong>d.</strong> Agentes são não-determinísticos — mesma entrada pode gerar saídas diferentes.</li>
</ul>
<div class="quiz-feedback" data-explanation="LLMs são estocásticos. Monitoramento precisa rastrear qualidade das respostas, custos de tokens, latência e drift de comportamento ao longo do tempo."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>O que é observabilidade no contexto de agentes multi-step?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Capacidade de rastrear cada decisão, tool call e resultado intermediário do agente.</li>
  <li data-option="b"><strong>b.</strong> Medir apenas o tempo total de resposta.</li>
  <li data-option="c"><strong>c.</strong> Logar apenas erros e exceções.</li>
  <li data-option="d"><strong>d.</strong> Monitorar o uso de CPU e memória do servidor.</li>
</ul>
<div class="quiz-feedback" data-explanation="Observabilidade em agentes significa ver o trace completo: cada thought, action, observation, tool call e decisão — essencial para debugar comportamentos inesperados."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 4</h3>

<p>Qual métrica é mais importante para avaliar a qualidade de um agente conversacional?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Número de tokens gerados por resposta.</li>
  <li data-option="b"><strong>b.</strong> Tempo de resposta em milissegundos.</li>
  <li data-option="c"><strong>c.</strong> Taxa de resolução sem escalonamento humano.</li>
  <li data-option="d"><strong>d.</strong> Quantidade de tools chamadas por interação.</li>
</ul>
<div class="quiz-feedback" data-explanation="A métrica de negócio mais relevante é se o agente resolve o problema do usuário sem precisar de intervenção humana."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 5</h3>

<p>Quando migrar de uma solução low-code para código customizado?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Imediatamente — low-code é só para demos.</li>
  <li data-option="b"><strong>b.</strong> Quando precisar de controle fino, performance ou lógica que a plataforma não suporta.</li>
  <li data-option="c"><strong>c.</strong> Nunca — low-code é sempre suficiente.</li>
  <li data-option="d"><strong>d.</strong> Quando o time tiver mais de 5 pessoas.</li>
</ul>
<div class="quiz-feedback" data-explanation="Low-code é ótimo para MVP e prototipagem. Migre para código quando precisar de customização profunda, testes automatizados ou escala."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 6</h3>

<p>O que é "drift detection" em um agente de IA em produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Detectar quando o comportamento do agente muda ao longo do tempo sem alteração intencional.</li>
  <li data-option="b"><strong>b.</strong> Medir a velocidade de resposta do agente.</li>
  <li data-option="c"><strong>c.</strong> Verificar se o modelo foi atualizado pelo provider.</li>
  <li data-option="d"><strong>d.</strong> Contar quantas tools o agente usa por sessão.</li>
</ul>
<div class="quiz-feedback" data-explanation="Drift: o modelo muda (update do provider), os dados mudam, ou o contexto acumula — o agente começa a se comportar diferente sem ninguém ter alterado código."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 7</h3>

<p>Qual a vantagem do N8N sobre o Flowise para automações com IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> N8N é específico para LLMs; Flowise é genérico.</li>
  <li data-option="b"><strong>b.</strong> N8N não precisa de API keys.</li>
  <li data-option="c"><strong>c.</strong> N8N é uma plataforma de automação geral que integra IA com centenas de outros serviços (email, CRM, banco).</li>
  <li data-option="d"><strong>d.</strong> N8N é mais rápido que código Python.</li>
</ul>
<div class="quiz-feedback" data-explanation="N8N é generalista (automação de workflows com 400+ integrações). Flowise é especializado em fluxos de LLM/RAG. Combinam bem: Flowise para o agente, N8N para o workflow ao redor."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 8</h3>

<p>O que são "traces" no monitoramento de agentes?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Logs de erro do servidor.</li>
  <li data-option="b"><strong>b.</strong> Registros completos de uma execução: cada step, tool call, input/output e tempo.</li>
  <li data-option="c"><strong>c.</strong> Métricas de uso de CPU.</li>
  <li data-option="d"><strong>d.</strong> Histórico de conversas do usuário.</li>
</ul>
<div class="quiz-feedback" data-explanation="Um trace captura a jornada completa de uma request pelo agente — cada decisão, chamada de tool, tempo gasto e resultado. Essencial para debugar comportamentos inesperados."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 9</h3>

<p>Por que é importante monitorar custos de tokens em produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Porque tokens expiram após 24 horas.</li>
  <li data-option="b"><strong>b.</strong> Porque o modelo fica mais lento com muitos tokens.</li>
  <li data-option="c"><strong>c.</strong> Porque tokens são a unidade de memória do servidor.</li>
  <li data-option="d"><strong>d.</strong> Porque custos crescem quadraticamente com o histórico e um bug pode gerar contas enormes.</li>
</ul>
<div class="quiz-feedback" data-explanation="Um loop infinito ou histórico sem trimming pode gerar milhares de chamadas caras. Monitorar custo por sessão/usuário previne surpresas na fatura."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Qual a melhor estratégia para testar um agente antes de colocar em produção?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Criar um conjunto de cenários (happy path + edge cases) e validar respostas com métricas automatizadas.</li>
  <li data-option="b"><strong>b.</strong> Pedir para o próprio LLM avaliar se está funcionando bem.</li>
  <li data-option="c"><strong>c.</strong> Testar apenas com um usuário real em produção.</li>
  <li data-option="d"><strong>d.</strong> Não é possível testar agentes — são não-determinísticos.</li>
</ul>
<div class="quiz-feedback" data-explanation="Evals: conjunto de inputs com outputs esperados + métricas (faithfulness, relevance, format). Roda automaticamente a cada mudança para detectar regressões."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
