# 📝 Quiz — MCP, LangGraph, Tools e Agentes

Teste seus conhecimentos! Clique na resposta que considerar correta.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="a">
<h3>Questão 1</h3>

<p>Uma equipe de desenvolvimento criou três agentes diferentes para apoiar o trabalho interno:</p>
<p><ul><li>um agente de suporte técnico;</li>
<li>um agente de documentação;</li>
<li>um agente de análise de incidentes.</li>
</ul>
Todos eles precisam consultar o mesmo sistema interno de tickets, mas cada agente foi implementado com sua própria integração direta com a API desse sistema.</p>
<p>Com o tempo, mudanças na API começaram a exigir manutenção duplicada em vários pontos.</p>
<p><strong>A decisão arquitetural mais adequada para reduzir acoplamento e facilitar reutilização dessa capacidade é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Criar um MCP server com escopo coeso para adaptar o sistema de tickets e expor suas capacidades de forma padronizada.</li>
  <li data-option="b"><strong>b.</strong> Manter uma integração separada em cada agente, pois isso evita dependência entre os projetos.</li>
  <li data-option="c"><strong>c.</strong> Mover todas as URLs e regras de autenticação para o prompt do sistema de cada agente.</li>
  <li data-option="d"><strong>d.</strong> Criar uma única função genérica que receba texto livre e execute qualquer operação no sistema de tickets.</li>
  <li data-option="e"><strong>e.</strong> Substituir os agentes por prompts manuais executados diretamente pelos desenvolvedores.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 2</h3>

<p>Um desenvolvedor está estudando a arquitetura de uma aplicação com MCP.</p>
<p>Ele observa que existe:</p>
<p><ul><li>um serviço interno com dados reais;</li>
<li>um servidor MCP expondo capacidades desse serviço;</li>
<li>um cliente MCP usado pela aplicação;</li>
<li>um agente que decide o fluxo de atendimento ao usuário.</li>
</ul>
Nesse cenário, <strong>a responsabilidade principal do MCP Client é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Conectar-se ao MCP Server, descobrir capacidades disponíveis e executar chamadas solicitadas pela aplicação ou agente.</li>
  <li data-option="b"><strong>b.</strong> Armazenar permanentemente todos os dados retornados pelo serviço interno.</li>
  <li data-option="c"><strong>c.</strong> Substituir a LLM na interpretação semântica das solicitações do usuário.</li>
  <li data-option="d"><strong>d.</strong> Implementar diretamente as regras de negócio do serviço interno.</li>
  <li data-option="e"><strong>e.</strong> Decidir autonomamente qual ferramenta deve ser usada sem participação do agente ou da LLM.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>Uma empresa quer expor para agentes de IA três elementos relacionados ao processo de atendimento:</p>
<p><ul><li>uma função que consulta o status de um pedido em tempo real;</li>
<li>um manual interno com políticas de cancelamento;</li>
<li>um modelo de instrução para gerar respostas padronizadas ao cliente.</li>
</ul>
No contexto de MCP, <strong>a classificação mais adequada desses elementos é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> A consulta de status como tool, o manual interno como resource e o modelo de instrução como prompt.</li>
  <li data-option="b"><strong>b.</strong> A consulta de status como prompt, o manual interno como tool e o modelo de instrução como resource.</li>
  <li data-option="c"><strong>c.</strong> Todos os elementos como tools, pois todos podem influenciar a resposta do agente.</li>
  <li data-option="d"><strong>d.</strong> Todos os elementos como resources, pois nenhum deles deve ser usado diretamente pela LLM.</li>
  <li data-option="e"><strong>e.</strong> Todos os elementos como prompts, pois todos estão relacionados à geração de linguagem.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 4</h3>

<p>Um time está construindo dois protótipos.</p>
<p>No primeiro, um agente em LangGraph precisa chamar uma função Python simples usada apenas por um node específico.</p>
<p>No segundo, uma API interna de catálogo de serviços deverá ser usada por diferentes agentes, por uma IDE com suporte a MCP e por outras automações futuras.</p>
<p><strong>A escolha mais adequada para equilibrar simplicidade e reutilização é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Usar uma tool direta no LangGraph no primeiro caso e considerar um MCP server no segundo caso.</li>
  <li data-option="b"><strong>b.</strong> Usar MCP nos dois casos, pois qualquer função chamada por um agente precisa obrigatoriamente estar em um servidor MCP.</li>
  <li data-option="c"><strong>c.</strong> Evitar LangGraph nos dois casos e deixar todas as decisões implícitas no prompt da LLM.</li>
  <li data-option="d"><strong>d.</strong> Usar uma tool direta no LangGraph nos dois casos, mesmo que a API precise ser reutilizada por vários clientes.</li>
  <li data-option="e"><strong>e.</strong> Criar um servidor MCP separado para cada função individual, mesmo quando todas pertencem ao mesmo domínio.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 5</h3>

<p>Uma empresa iniciou um projeto com um agente simples que consulta dados de chamados técnicos.</p>
<p>No MVP, a integração direta no LangGraph seria suficiente. Porém, o roadmap prevê que a mesma capacidade será usada futuramente por:</p>
<p><ul><li>assistentes em IDEs;</li>
<li>agentes de documentação;</li>
<li>automações de QA;</li>
<li>ferramentas de suporte.</li>
</ul>
A equipe tem pouco tempo para entregar o MVP, mas quer evitar uma arquitetura difícil de evoluir.</p>
<p><strong>A decisão mais estratégica nesse cenário é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Começar com um MCP server pequeno e coeso para o domínio de chamados, expondo apenas as capacidades necessárias agora e permitindo expansão gradual.</li>
  <li data-option="b"><strong>b.</strong> Implementar toda a integração diretamente no primeiro agente e duplicar a lógica nos demais sistemas quando eles surgirem.</li>
  <li data-option="c"><strong>c.</strong> Criar desde o início um MCP server genérico para todos os sistemas internos da empresa, mesmo sem conhecer os casos futuros.</li>
  <li data-option="d"><strong>d.</strong> Abandonar o uso de agentes até que todos os consumidores futuros estejam completamente definidos.</li>
  <li data-option="e"><strong>e.</strong> Concentrar todas as regras no prompt do sistema para evitar criar camadas adicionais de integração.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 6</h3>

<p>Uma equipe está implementando um agente que precisa:</p>
<p><ul><li>interpretar a solicitação do usuário;</li>
<li>identificar a intenção;</li>
<li>extrair identificadores;</li>
<li>consultar uma ferramenta externa;</li>
<li>guardar o resultado intermediário;</li>
<li>produzir uma resposta final.</li>
</ul>
Durante a implementação, os desenvolvedores percebem que essas informações precisam circular de forma organizada entre diferentes etapas do fluxo.</p>
<p>No LangGraph, <strong>o mecanismo mais adequado para representar essas informações compartilhadas é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O state do grafo, contendo os dados de execução que serão lidos e atualizados pelos nodes.</li>
  <li data-option="b"><strong>b.</strong> O prompt do sistema, contendo todos os dados intermediários serializados manualmente.</li>
  <li data-option="c"><strong>c.</strong> O MCP Server, responsável por armazenar o estado completo da conversa do usuário.</li>
  <li data-option="d"><strong>d.</strong> A temperatura do modelo, usada para controlar quais dados seguem para cada etapa.</li>
  <li data-option="e"><strong>e.</strong> Uma variável global fora do grafo, compartilhada entre todos os usuários da aplicação.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Um desenvolvedor cria um agente em LangGraph com um único node responsável por:</p>
<p><ul><li>interpretar a entrada;</li>
<li>consultar APIs;</li>
<li>tratar erros;</li>
<li>aplicar regras de negócio;</li>
<li>gerar a resposta final.</li>
</ul>
Embora a primeira versão funcione, a equipe começa a ter dificuldade para testar, modificar e explicar o comportamento do agente.</p>
<p><strong>A melhoria mais adequada para esse fluxo é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Dividir a lógica em nodes menores, com responsabilidades claras e conectados por edges explícitas.</li>
  <li data-option="b"><strong>b.</strong> Manter tudo em um único node, pois isso torna o fluxo mais fácil de rastrear visualmente.</li>
  <li data-option="c"><strong>c.</strong> Mover toda a lógica para uma tool genérica chamada pelo agente em qualquer situação.</li>
  <li data-option="d"><strong>d.</strong> Substituir o state por variáveis globais para reduzir a quantidade de parâmetros entre funções.</li>
  <li data-option="e"><strong>e.</strong> Remover o LangGraph e usar apenas uma chamada direta à LLM com um prompt mais longo.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 8</h3>

<p>Um agente precisa lidar com solicitações diferentes:</p>
<p><ul><li>algumas exigem consultar dados de pedidos;</li>
<li>outras exigem buscar documentação interna;</li>
<li>outras devem acionar um fluxo de fallback por estarem fora do domínio atendido.</li>
</ul>
A equipe quer deixar essa decisão explícita e fácil de depurar.</p>
<p>No LangGraph, <strong>a forma mais adequada de representar esse comportamento é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Usar conditional edges que escolhem o próximo node com base em informações presentes no state.</li>
  <li data-option="b"><strong>b.</strong> Aumentar a temperatura da LLM para que ela explore caminhos diferentes durante a resposta.</li>
  <li data-option="c"><strong>c.</strong> Registrar todos os possíveis caminhos como resources em um MCP Server.</li>
  <li data-option="d"><strong>d.</strong> Criar um único node que executa todas as possibilidades e escolhe a resposta no final.</li>
  <li data-option="e"><strong>e.</strong> Delegar a escolha do caminho ao serviço externo consultado pelo agente.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 9</h3>

<p>Uma equipe quer testar um agente que:</p>
<p><ul><li>classifica solicitações;</li>
<li>atualiza state;</li>
<li>segue rotas condicionais;</li>
<li>chama tools.</li>
</ul>
Nos testes automatizados, a equipe percebe que usar uma LLM real:</p>
<p><ul><li>torna os resultados variáveis;</li>
<li>depende de credenciais externas;</li>
<li>dificulta identificar se uma falha veio do código ou do modelo.</li>
</ul>
<strong>A estratégia mais adequada para validar o fluxo do agente nos testes é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Usar uma implementação falsa ou mockada da LLM para produzir respostas previsíveis e testar contratos, state e roteamento.</li>
  <li data-option="b"><strong>b.</strong> Remover todos os testes automatizados e validar o comportamento apenas por inspeção manual das respostas.</li>
  <li data-option="c"><strong>c.</strong> Usar sempre o modelo mais poderoso disponível para garantir que qualquer falha seja corrigida pela própria LLM.</li>
  <li data-option="d"><strong>d.</strong> Testar apenas a resposta final em linguagem natural, ignorando os estados intermediários do agente.</li>
  <li data-option="e"><strong>e.</strong> Treinar uma LLM nova para cada execução de teste, garantindo que ela aprenda o comportamento esperado.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Um time criou um agente interno capaz de consultar dados operacionais e executar algumas ações em sistemas de apoio.</p>
<p>Para acelerar a entrega, as tools foram expostas com:</p>
<p><ul><li>permissões amplas;</li>
<li>descrições genéricas;</li>
<li>pouca validação de entrada.</li>
</ul>
Em uma revisão técnica, surgiu a preocupação de que solicitações ambíguas ou maliciosas poderiam levar o agente a executar ações fora do esperado.</p>
<p><strong>A melhor decisão para reduzir esse risco sem eliminar a utilidade do agente é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Restringir o escopo das tools, validar argumentos, registrar chamadas e exigir confirmação humana para ações sensíveis.</li>
  <li data-option="b"><strong>b.</strong> Aumentar a criatividade do modelo para que ele consiga interpretar melhor pedidos ambíguos.</li>
  <li data-option="c"><strong>c.</strong> Mover todas as permissões para o prompt do sistema e confiar que a LLM seguirá as instruções corretamente.</li>
  <li data-option="d"><strong>d.</strong> Criar uma única tool administrativa com acesso amplo, reduzindo a quantidade de decisões do agente.</li>
  <li data-option="e"><strong>e.</strong> Remover logs para evitar exposição de informações sobre chamadas internas do sistema.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>