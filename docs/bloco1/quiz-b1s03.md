# 📝 Quiz — IA no Desenvolvimento, SOLID, PRD, User Stories e Documentação

Teste seus conhecimentos! Clique na resposta que considerar correta.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="a">
<h3>Questão 1</h3>

<p>O time da DevBridge, startup de automação de contratos jurídicos, integrou um LLM para gerar rascunhos de cláusulas. A dev Isabela percebe que as respostas mudam muito dependendo de como ela escreve as instruções. O tech lead diz que ela precisa estruturar melhor os prompts.</p>
<p>Considerando as boas práticas estudadas, qual conjunto de elementos compõe um prompt eficaz para geração de código?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> A descrição do problema que Isabela enfrenta na DevBridge, o tipo de saída esperada, como função Python, as restrições técnicas do sistema e exemplos do formato de cláusula desejado.</li>
  <li data-option="b"><strong>b.</strong> Apenas o tipo de banco de dados e o framework web usados pela DevBridge, sem nenhuma instrução sobre o que a função de geração de cláusulas deve fazer.</li>
  <li data-option="c"><strong>c.</strong> O histórico de commits do repositório da DevBridge e toda a documentação técnica do sistema colados no chat, pedindo que a IA "gere o código necessário".</li>
  <li data-option="d"><strong>d.</strong> O nome de Isabela, a data de entrega da sprint da DevBridge e a linguagem preferida do time, sem especificar o que a função deve fazer.</li>
  <li data-option="e"><strong>e.</strong> Apenas o nome da linguagem de programação usada na DevBridge e o tipo de cláusula que Isabela precisa gerar, sem mais detalhes.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 2</h3>

<p>O time da LogiTech, empresa de gestão de frotas, está usando IA para refatorar um sistema legado. A ferramenta sugere dividir a classe <code>RelatorioFrota</code>, que gera, formata e envia relatórios, em classes menores.</p>
<p>O dev Lucas explica que a sugestão está alinhada a um dos princípios SOLID.</p>
<p>Qual princípio determina que uma classe deve ter apenas uma razão para mudar?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Interface Segregation Principle (ISP) — a LogiTech deve criar interfaces específicas para geração, formatação e envio de relatórios em vez de uma única interface geral na <code>RelatorioFrota</code>.</li>
  <li data-option="b"><strong>b.</strong> Open/Closed Principle (OCP) — o sistema legado da LogiTech deve estar aberto para extensão de novas funcionalidades de relatório sem modificar o código já existente da <code>RelatorioFrota</code>.</li>
  <li data-option="c"><strong>c.</strong> Single Responsibility Principle (SRP) — a classe <code>RelatorioFrota</code> da LogiTech acumula responsabilidades de geração, formatação e envio, e cada uma delas é uma razão independente para mudar.</li>
  <li data-option="d"><strong>d.</strong> Liskov Substitution Principle (LSP) — qualquer subclasse de <code>RelatorioFrota</code> criada pela LogiTech deve poder substituir a classe-base sem quebrar o comportamento do sistema de frotas.</li>
  <li data-option="e"><strong>e.</strong> Dependency Inversion Principle (DIP) — os módulos de alto nível do sistema da LogiTech não devem depender diretamente das implementações de banco de dados e serviço de notificação de relatórios.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 3</h3>

<p>A HealthSync, startup de prontuários médicos, usou IA para refatorar o módulo de agendamento de consultas. O código gerado compila sem erros e aparenta funcionar corretamente.</p>
<p>Antes de abrir o PR, a tech lead Camila precisa decidir o próximo passo.</p>
<p>Qual postura é a mais adequada nessa situação?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Camila deve subir o código direto em produção para validar com os usuários reais da HealthSync — médicos e recepcionistas — e coletar feedback rápido sobre os agendamentos.</li>
  <li data-option="b"><strong>b.</strong> Camila deve revisar criticamente o código, verificando a lógica de negócio dos agendamentos, possíveis brechas de segurança com dados de pacientes e aderência às regras específicas da HealthSync antes de aceitar.</li>
  <li data-option="c"><strong>c.</strong> Camila deve aceitar o código gerado sem revisão, pois a IA já valida automaticamente a lógica de negócio e as regras de agendamento específicas da HealthSync durante a geração.</li>
  <li data-option="d"><strong>d.</strong> Camila deve descartar o código gerado pela IA e refatorar manualmente, pois ferramentas generativas não compreendem as regras e os padrões legados específicos do sistema da HealthSync.</li>
  <li data-option="e"><strong>e.</strong> Camila deve usar a IA apenas para comentários e documentação do módulo de agendamento da HealthSync, nunca para refatoração da lógica de negócio ou regras de prontuário.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 4</h3>

<p>A FinConf, plataforma de conformidade financeira, precisa de uma função de validação de CPF para o onboarding de novos clientes. O dev Rafael tem a entrega para hoje.</p>
<p>Qual abordagem descreve corretamente o pipeline de geração de código com IA estudado?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Rafael revisa o código de validação de CPF já existente na FinConf, identifica problemas e pede à IA que gere os requisitos do que precisa ser corrigido, para só então gerar o novo código.</li>
  <li data-option="b"><strong>b.</strong> Rafael abre o chat e digita “gera validação de CPF para FinConf”, aceita o código da primeira resposta e faz commit direto na branch principal, priorizando a entrega do dia sem revisar nada.</li>
  <li data-option="c"><strong>c.</strong> Rafael escreve primeiro os testes unitários da validação de CPF da FinConf e pede à IA que gere um código que faça esses testes passarem, sem ter definido o requisito em linguagem natural antes.</li>
  <li data-option="d"><strong>d.</strong> O dev exporta toda a documentação de conformidade da FinConf e cola no chat, pedindo que a IA “gere o código necessário” sem especificar qual função precisa ser criada nem o que ela deve validar.</li>
  <li data-option="e"><strong>e.</strong> Rafael descreve: “Preciso de uma função Python para o onboarding da FinConf que valide CPF verificando dígitos verificadores, formatação e casos inválidos como ‘000.000.000-00’”. Envia à IA, revisa a lógica e os casos de borda, e só então integra ao projeto.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 5</h3>

<p>A EduFlow, startup de aprendizagem adaptativa, está iniciando o módulo de recomendação de trilhas de estudo. O PM Lucas precisa elaborar um documento que alinhe produto, engenharia e design antes de qualquer linha de código ser escrita.</p>
<p>Qual alternativa descreve corretamente os componentes essenciais de um PRD?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O relatório de desempenho do módulo de recomendação atual da EduFlow, com métricas de uso, taxa de conclusão de trilhas e retenção de estudantes na plataforma.</li>
  <li data-option="b"><strong>b.</strong> O manual de uso do módulo de recomendação, tutoriais passo a passo para os estudantes da EduFlow e uma lista de perguntas frequentes (FAQ) sobre o funcionamento das trilhas.</li>
  <li data-option="c"><strong>c.</strong> O cronograma de sprints do time da EduFlow, o backlog de features do módulo de recomendação priorizado e a Definition of Done acordada com os desenvolvedores.</li>
  <li data-option="d"><strong>d.</strong> O problema que estudantes da EduFlow enfrentam ao escolher trilhas, as personas de usuário, as user stories com critérios de aceite, as métricas que indicarão o sucesso do módulo e os riscos identificados.</li>
  <li data-option="e"><strong>e.</strong> O contrato formal entre a EduFlow e os investidores, com as funcionalidades prometidas para o módulo de recomendação e as penalidades por atraso na entrega.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 6</h3>

<p>O time da AgriPlan, plataforma de planejamento agrícola, está escrevendo o PRD do módulo de alertas climáticos. A PM Fernanda pede que os devs escrevam as histórias no formato padrão estudado.</p>
<p>Qual alternativa apresenta o formato correto de uma User Story?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> "Given que o agricultor está logado na AgriPlan, When uma frente fria for detectada na região, Then o sistema deve enviar um alerta por push e e-mail." — estrutura Gherkin para especificação de comportamento.</li>
  <li data-option="b"><strong>b.</strong> "Alertas climáticos para agricultores da AgriPlan com prioridade alta no backlog, estimativa de 3 story points e responsável: time de backend."</li>
  <li data-option="c"><strong>c.</strong> "As a agricultor cadastrado na AgriPlan, I want to receive climate alerts for my region, So that I can adjust my planting schedule before critical weather events." — persona, necessidade e benefício de negócio.</li>
  <li data-option="d"><strong>d.</strong> "Eu, como PM da AgriPlan, solicito a implementação de alertas climáticos por push e e-mail com entrega até o final da sprint 4."</li>
  <li data-option="e"><strong>e.</strong> "O sistema da AgriPlan deve enviar alertas climáticos para o agricultor quando as condições meteorológicas da região atingirem limites críticos de temperatura e umidade."</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>O time da BuildSmart, startup de gestão de obras, está documentando a arquitetura do módulo de orçamentos. O dev Thiago precisa criar um diagrama de fluxo de aprovação de orçamentos e compartilhá-lo com o time — sem instalar nada na máquina, de forma gratuita, direto no navegador.</p>
<p>Qual ferramenta atende a essa necessidade?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Mermaid Live Editor (<code>mermaid.live</code>) — editor oficial online onde Thiago pode criar e visualizar o fluxo de aprovação de orçamentos da BuildSmart em tempo real, sem nenhuma instalação.</li>
  <li data-option="b"><strong>b.</strong> v0 by Vercel — gerador de componentes React e Tailwind CSS onde Thiago pode criar uma interface visual para o módulo de orçamentos da BuildSmart a partir de uma descrição textual.</li>
  <li data-option="c"><strong>c.</strong> Figma Make — ferramenta de design com IA onde Thiago pode gerar wireframes e protótipos visuais do módulo de orçamentos da BuildSmart a partir de prompts em linguagem natural.</li>
  <li data-option="d"><strong>d.</strong> Swagger Editor (<code>editor.swagger.io</code>) — editor online onde Thiago pode descrever e visualizar a API de orçamentos da BuildSmart no formato OpenAPI/Swagger, sem instalação.</li>
  <li data-option="e"><strong>e.</strong> DiagramGPT do Eraser — gerador de diagramas de arquitetura onde Thiago pode descrever o fluxo de aprovação de orçamentos em linguagem natural e obter um diagrama automaticamente.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 8</h3>

<p>O time da MedLink, plataforma de telemedicina, está desenvolvendo uma API de agendamento de consultas consumida pelo app mobile e pelo portal web. A tech lead Ana decide documentar a API com o padrão OpenAPI/Swagger.</p>
<p>Qual é o principal benefício dessa decisão para o time da MedLink?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Substituir completamente os testes unitários dos endpoints de agendamento da MedLink, eliminando a necessidade de escrevê-los manualmente no pipeline de CI/CD do time.</li>
  <li data-option="b"><strong>b.</strong> Gerar automaticamente todo o código-fonte dos endpoints de agendamento da MedLink, incluindo a lógica de negócio, sem nenhum esforço adicional do time de backend.</li>
  <li data-option="c"><strong>c.</strong> Eliminar a necessidade de versionamento de código no repositório GitHub da MedLink, já que a spec OpenAPI registra todas as mudanças dos endpoints da API.</li>
  <li data-option="d"><strong>d.</strong> Estabelecer um contrato claro entre os times de mobile e web da MedLink, melhorar a experiência dos devs com documentação interativa no Swagger UI e permitir automação de testes e geração de clientes para o app.</li>
  <li data-option="e"><strong>e.</strong> Criar automaticamente as telas do app mobile e do portal web da MedLink a partir dos endpoints definidos na spec OpenAPI, sem trabalho adicional de design ou frontend.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>