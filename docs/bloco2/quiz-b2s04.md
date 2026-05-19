# 📝 Quiz — MCP, LangGraph e Agentes Estruturados

Teste seus conhecimentos sobre MCP, LangGraph, tools e arquitetura de agentes.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="a">
<h3>Questão 1</h3>

<p>Uma equipe criou três agentes diferentes (suporte técnico, documentação, análise de incidentes) que consultam o mesmo sistema de tickets, cada um com sua própria integração direta. Mudanças na API exigem manutenção duplicada. A decisão arquitetural mais adequada para reduzir acoplamento é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Criar um MCP server com escopo coeso para adaptar o sistema de tickets e expor suas capacidades de forma padronizada.</li>
  <li data-option="b"><strong>b.</strong> Manter uma integração separada em cada agente, pois isso evita dependência entre os projetos.</li>
  <li data-option="c"><strong>c.</strong> Mover todas as URLs e regras de autenticação para o prompt do sistema de cada agente.</li>
  <li data-option="d"><strong>d.</strong> Criar uma única função genérica que receba texto livre e execute qualquer operação no sistema de tickets.</li>
</ul>
<div class="quiz-feedback" data-explanation="Um MCP server encapsula a integração em um adaptador reutilizável, reduzindo duplicação entre agentes e facilitando manutenção quando a API mudar."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 2</h3>

<p>Em uma arquitetura com MCP, existe: um serviço interno com dados reais, um servidor MCP, um cliente MCP e um agente. A responsabilidade principal do MCP Client é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Conectar-se ao MCP Server, descobrir capacidades disponíveis e executar chamadas solicitadas pela aplicação ou agente.</li>
  <li data-option="b"><strong>b.</strong> Armazenar permanentemente todos os dados retornados pelo serviço interno.</li>
  <li data-option="c"><strong>c.</strong> Substituir a LLM na interpretação semântica das solicitações do usuário.</li>
  <li data-option="d"><strong>d.</strong> Decidir autonomamente qual ferramenta deve ser usada sem participação do agente ou da LLM.</li>
</ul>
<div class="quiz-feedback" data-explanation="O MCP Client atua como camada de comunicação com o MCP Server, descobrindo tools, resources e prompts e executando chamadas quando solicitado pelo host, aplicação ou agente."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>Uma empresa quer expor para agentes de IA: uma função que consulta status de pedido em tempo real, um manual interno com políticas de cancelamento, e um modelo de instrução para gerar respostas padronizadas. No MCP, a classificação mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> A consulta de status como tool, o manual interno como resource e o modelo de instrução como prompt.</li>
  <li data-option="b"><strong>b.</strong> A consulta de status como prompt, o manual interno como tool e o modelo de instrução como resource.</li>
  <li data-option="c"><strong>c.</strong> Todos os elementos como tools, pois todos podem influenciar a resposta do agente.</li>
  <li data-option="d"><strong>d.</strong> Todos os elementos como resources, pois nenhum deles deve ser usado diretamente pela LLM.</li>
</ul>
<div class="quiz-feedback" data-explanation="Tool = ação executável (consulta dinâmica). Resource = dados/contexto para leitura (manual). Prompt = template de instrução reutilizável (modelo de resposta)."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 4</h3>

<p>No primeiro protótipo, um agente em LangGraph precisa chamar uma função Python simples usada apenas por um node. No segundo, uma API interna deverá ser usada por diferentes agentes, IDEs e automações futuras. A escolha mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Usar uma tool direta no LangGraph no primeiro caso e considerar um MCP server no segundo caso.</li>
  <li data-option="b"><strong>b.</strong> Usar MCP nos dois casos, pois qualquer função chamada por um agente precisa obrigatoriamente estar em um servidor MCP.</li>
  <li data-option="c"><strong>c.</strong> Evitar LangGraph nos dois casos e deixar todas as decisões implícitas no prompt da LLM.</li>
  <li data-option="d"><strong>d.</strong> Criar um servidor MCP separado para cada função individual, mesmo quando todas pertencem ao mesmo domínio.</li>
</ul>
<div class="quiz-feedback" data-explanation="Para função simples e local, tool direta reduz complexidade. Para capacidade reutilizável por múltiplos clientes, MCP server melhora padronização e desacoplamento."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 5</h3>

<p>Uma empresa quer entregar um MVP rápido com um agente que consulta chamados técnicos. O roadmap prevê que a mesma capacidade será usada por IDEs, agentes de documentação, automações de QA e ferramentas de suporte. A decisão mais estratégica é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Começar com um MCP server pequeno e coeso para o domínio de chamados, expondo apenas as capacidades necessárias agora.</li>
  <li data-option="b"><strong>b.</strong> Implementar toda a integração diretamente no primeiro agente e duplicar a lógica nos demais sistemas quando surgirem.</li>
  <li data-option="c"><strong>c.</strong> Criar desde o início um MCP server genérico para todos os sistemas internos da empresa.</li>
  <li data-option="d"><strong>d.</strong> Abandonar o uso de agentes até que todos os consumidores futuros estejam completamente definidos.</li>
</ul>
<div class="quiz-feedback" data-explanation="Equilibra entrega incremental com visão de evolução. Um MCP server pequeno evita duplicação futura sem tentar resolver todos os casos antes da hora."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 6</h3>

<p>Um agente precisa: interpretar a solicitação, identificar intenção, extrair IDs, consultar ferramenta externa, guardar resultado intermediário e produzir resposta final. No LangGraph, o mecanismo mais adequado para representar essas informações compartilhadas é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O state do grafo, contendo os dados de execução que serão lidos e atualizados pelos nodes.</li>
  <li data-option="b"><strong>b.</strong> O prompt do sistema, contendo todos os dados intermediários serializados manualmente.</li>
  <li data-option="c"><strong>c.</strong> O MCP Server, responsável por armazenar o estado completo da conversa do usuário.</li>
  <li data-option="d"><strong>d.</strong> Uma variável global fora do grafo, compartilhada entre todos os usuários da aplicação.</li>
</ul>
<div class="quiz-feedback" data-explanation="O state funciona como contrato compartilhado do fluxo, permitindo que nodes leiam e atualizem informações como entrada, intenção, IDs, contexto, erros e resposta final."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Um desenvolvedor cria um agente com um único node responsável por interpretar entrada, consultar APIs, tratar erros, aplicar regras e gerar resposta. A equipe tem dificuldade para testar e modificar. A melhoria mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Dividir a lógica em nodes menores, com responsabilidades claras e conectados por edges explícitas.</li>
  <li data-option="b"><strong>b.</strong> Manter tudo em um único node, pois isso torna o fluxo mais fácil de rastrear visualmente.</li>
  <li data-option="c"><strong>c.</strong> Mover toda a lógica para uma tool genérica chamada pelo agente em qualquer situação.</li>
  <li data-option="d"><strong>d.</strong> Remover o LangGraph e usar apenas uma chamada direta à LLM com um prompt mais longo.</li>
</ul>
<div class="quiz-feedback" data-explanation="Separar em nodes especializados melhora testabilidade, leitura, manutenção e depuração, além de tornar o comportamento do agente mais transparente."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 8</h3>

<p>Um agente precisa lidar com solicitações diferentes: consultar pedidos, buscar documentação, ou acionar fallback para fora do domínio. A equipe quer essa decisão explícita e fácil de depurar. No LangGraph, a forma mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Usar conditional edges que escolhem o próximo node com base em informações presentes no state.</li>
  <li data-option="b"><strong>b.</strong> Aumentar a temperatura da LLM para que ela explore caminhos diferentes durante a resposta.</li>
  <li data-option="c"><strong>c.</strong> Registrar todos os possíveis caminhos como resources em um MCP Server.</li>
  <li data-option="d"><strong>d.</strong> Criar um único node que executa todas as possibilidades e escolhe a resposta no final.</li>
</ul>
<div class="quiz-feedback" data-explanation="Conditional edges permitem representar caminhos diferentes de execução com base no estado atual do fluxo, como intenção identificada ou tipo de solicitação."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 9</h3>

<p>Uma equipe quer testar um agente que classifica solicitações, atualiza state e segue rotas condicionais. Usar uma LLM real torna resultados variáveis e dificulta identificar se a falha veio do código ou do modelo. A estratégia mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Usar uma implementação falsa ou mockada da LLM para produzir respostas previsíveis e testar contratos, state e roteamento.</li>
  <li data-option="b"><strong>b.</strong> Remover todos os testes automatizados e validar o comportamento apenas por inspeção manual.</li>
  <li data-option="c"><strong>c.</strong> Usar sempre o modelo mais poderoso disponível para garantir que qualquer falha seja corrigida pela própria LLM.</li>
  <li data-option="d"><strong>d.</strong> Testar apenas a resposta final em linguagem natural, ignorando os estados intermediários do agente.</li>
</ul>
<div class="quiz-feedback" data-explanation="Uma FakeLLM torna os testes determinísticos, permitindo validar se o fluxo, o state, os nodes e o roteamento funcionam sem depender da variabilidade de uma LLM real."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 10</h3>

<p>Um agente interno consulta dados operacionais e executa ações. As tools foram expostas com permissões amplas, descrições genéricas e pouca validação. Solicitações ambíguas ou maliciosas poderiam levar a ações fora do esperado. A melhor decisão é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Restringir o escopo das tools, validar argumentos, registrar chamadas e exigir confirmação humana para ações sensíveis.</li>
  <li data-option="b"><strong>b.</strong> Aumentar a criatividade do modelo para que ele consiga interpretar melhor pedidos ambíguos.</li>
  <li data-option="c"><strong>c.</strong> Mover todas as permissões para o prompt do sistema e confiar que a LLM seguirá as instruções.</li>
  <li data-option="d"><strong>d.</strong> Criar uma única tool administrativa com acesso amplo, reduzindo a quantidade de decisões do agente.</li>
</ul>
<div class="quiz-feedback" data-explanation="Combina escopo claro, validação, observabilidade e human-in-the-loop quando necessário — reduz risco operacional sem remover a utilidade do agente."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
