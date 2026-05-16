# 📝 Quiz — Integração de LLMs, Tools, RAG e Avaliação

Teste seus conhecimentos! Clique na resposta que considerar correta.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="b">
<h3>Questão 1</h3>

<p>Uma equipe de desenvolvimento está criando um assistente interno capaz de consultar informações em sistemas corporativos. O primeiro protótipo apenas envia a pergunta do usuário para um modelo de linguagem e espera uma resposta textual. Ao evoluir o sistema, a equipe quer permitir que o modelo consulte endpoints internos para buscar dados atualizados, como status de pedidos, permissões de usuário e eventos recentes.</p>
<p><strong>A melhor forma de iniciar essa integração, reduzindo ambiguidades e tornando o comportamento do assistente mais controlável, é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Passar a documentação completa da API no prompt e deixar que o modelo escolha livremente quais endpoints chamar.</li>
  <li data-option="b"><strong>b.</strong> Definir tools com nomes claros, parâmetros tipados, descrições objetivas e validação externa antes de executar qualquer chamada real.</li>
  <li data-option="c"><strong>c.</strong> Permitir que o modelo gere qualquer URL e qualquer payload, desde que a resposta final pareça coerente para o usuário.</li>
  <li data-option="d"><strong>d.</strong> Criar um único endpoint genérico chamado <code>execute_action</code>, capaz de receber qualquer ação em texto livre.</li>
  <li data-option="e"><strong>e.</strong> Substituir todas as validações do backend por instruções no prompt, pois o LLM consegue interpretar intenção melhor que regras fixas.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 2</h3>

<p>Um desenvolvedor está implementando uma etapa de classificação automática de solicitações recebidas por e-mail. O resultado será armazenado em banco de dados e consumido por um dashboard. O modelo deve retornar <code>categoria</code>, <code>prioridade</code>, <code>resumo</code> e <code>precisa_revisao_humana</code>.</p>
<p><strong>A estratégia mais adequada para tornar essa saída confiável para consumo por outros sistemas é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aumentar a temperatura do modelo para que ele gere respostas mais completas e variadas.</li>
  <li data-option="b"><strong>b.</strong> Armazenar a resposta completa em uma coluna de texto e deixar o dashboard interpretar os dados depois.</li>
  <li data-option="c"><strong>c.</strong> Definir um schema de saída e validar a resposta do modelo antes de persistir ou encaminhar os dados.</li>
  <li data-option="d"><strong>d.</strong> Pedir no prompt que o modelo “retorne um JSON bem formatado” e confiar que a instrução será suficiente.</li>
  <li data-option="e"><strong>e.</strong> Aceitar qualquer texto gerado e usar expressões regulares para tentar extrair os campos principais.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>Uma aplicação interna possui os endpoints abaixo:</p>
<p><pre><code class="language-http">GET /users//roles
GET /roles/{id}/permissions
GET /audit-log?user_id=...</code></pre></p>
<p>Um time quer criar uma tool para que um agente verifique se um usuário deveria ter acesso a determinado recurso.</p>
<p><strong>A melhor capability a ser exposta ao agente para esse caso é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> <code>check_user_access(user_id, resource)</code>, retornando se o usuário possui acesso, quais evidências foram usadas e se há inconsistências.</li>
  <li data-option="b"><strong>b.</strong> <code>call_endpoint(url, method, payload)</code>, permitindo que o agente escolha qualquer endpoint necessário.</li>
  <li data-option="c"><strong>c.</strong> <code>get_roles(user_id)</code>, retornando apenas a lista de roles do usuário.</li>
  <li data-option="d"><strong>d.</strong> <code>get_audit_log(user_id)</code>, permitindo ao agente analisar manualmente todos os eventos do usuário.</li>
  <li data-option="e"><strong>e.</strong> <code>explain_permissions()</code>, retornando uma explicação textual genérica sobre como permissões funcionam.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 4</h3>

<p>Um chatbot corporativo responde corretamente quando o usuário pergunta “qual sistema estamos analisando?” logo após informar o nome do sistema. Porém, se uma nova sessão é iniciada sem histórico, o chatbot não sabe mais responder.</p>
<p>Um desenvolvedor júnior afirma que o modelo “esqueceu” porque perdeu a memória interna.</p>
<p><strong>A explicação técnica mais adequada para esse comportamento é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo apagou seus pesos temporariamente, por isso perdeu a informação da conversa anterior.</li>
  <li data-option="b"><strong>b.</strong> Aumentar a temperatura resolveria o problema, pois o modelo se tornaria mais criativo para inferir o contexto perdido.</li>
  <li data-option="c"><strong>c.</strong> A solução correta é fazer fine-tuning sempre que o usuário informar algo novo.</li>
  <li data-option="d"><strong>d.</strong> O modelo é stateless entre chamadas; ele só responde com base no histórico, estado e contexto enviados na requisição atual.</li>
  <li data-option="e"><strong>e.</strong> O problema ocorre porque modelos de linguagem não conseguem processar histórico de conversa.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 5</h3>

<p>Um agente interno recebe solicitações em linguagem natural e pode consultar APIs de estoque. A equipe deseja impedir que o agente consulte produtos de fornecedores restritos quando o usuário não possui autorização.</p>
<p>Um integrante sugere colocar no system prompt: “não consulte fornecedores restritos se o usuário não tiver permissão”.</p>
<p><strong>A ação mais adequada para garantir esse controle é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aumentar o número de exemplos no prompt mostrando casos permitidos e proibidos.</li>
  <li data-option="b"><strong>b.</strong> Remover todos os endpoints de consulta e deixar o agente responder com base no conhecimento pré-treinado.</li>
  <li data-option="c"><strong>c.</strong> Validar permissões no backend antes de executar a tool, usando o prompt apenas como orientação complementar de comportamento.</li>
  <li data-option="d"><strong>d.</strong> Confiar no system prompt, pois instruções de sistema têm prioridade e impedem chamadas indevidas.</li>
  <li data-option="e"><strong>e.</strong> Permitir a consulta e filtrar apenas a resposta final para remover informações sensíveis.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="e">
<h3>Questão 6</h3>

<p>Uma empresa possui uma base com manuais técnicos, políticas internas e históricos de dúvidas frequentes indexados em um vector database. Um assistente pode consultar essa base quando precisa responder perguntas dos funcionários. Em alguns casos, a aplicação apenas recupera documentos relevantes; em outros, ela envia esses documentos ao LLM para gerar uma resposta final.</p>
<p><strong>A interpretação mais adequada dessa arquitetura é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Memória semântica e RAG são exatamente a mesma coisa, pois ambos usam embeddings.</li>
  <li data-option="b"><strong>b.</strong> RAG só existe quando o sistema salva conversas anteriores do usuário em um banco relacional.</li>
  <li data-option="c"><strong>c.</strong> A memória semântica só pode ser usada em modelos fine-tuned para o domínio da empresa.</li>
  <li data-option="d"><strong>d.</strong> A RAG elimina a necessidade de validar fontes, pois o modelo sempre usará corretamente os documentos recuperados.</li>
  <li data-option="e"><strong>e.</strong> A base vetorial representa uma memória semântica, e o RAG ocorre quando a aplicação usa os trechos recuperados para compor o contexto da geração.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Uma equipe quer indexar a documentação técnica de uma plataforma interna. Os documentos possuem seções bem definidas, como “Autenticação”, “Erros comuns”, “Permissões”, “Limites de uso” e “Troubleshooting”. O primeiro teste dividiu todos os arquivos em blocos fixos de 500 caracteres, sem preservar títulos ou fonte original. As respostas do assistente frequentemente recuperam trechos incompletos ou sem contexto.</p>
<p><strong>A melhoria mais adequada para aumentar a qualidade da recuperação é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aplicar chunking por seções ou subtítulos, preservar metadados como documento, seção e versão, e usar overlap quando houver risco de cortar contexto relevante.</li>
  <li data-option="b"><strong>b.</strong> Fazer fine-tuning do modelo com todos os documentos e abandonar a busca vetorial.</li>
  <li data-option="c"><strong>c.</strong> Aumentar todos os chunks para o maior tamanho possível, enviando documentos quase inteiros para o vector database.</li>
  <li data-option="d"><strong>d.</strong> Remover metadados para reduzir espaço de armazenamento e simplificar a ingestão.</li>
  <li data-option="e"><strong>e.</strong> Reduzir todos os chunks para uma frase, garantindo máxima granularidade.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 8</h3>

<p>Um assistente técnico usa RAG para responder dúvidas sobre uma API interna. O retriever busca <code>top_k=20</code> chunks e envia todos ao prompt. A equipe percebeu que as respostas ficaram mais longas, mais caras e, em alguns casos, menos precisas. Analisando os resultados, os desenvolvedores notaram que vários chunks recuperados falam do mesmo endpoint, enquanto documentos sobre exceções e limites aparecem em posições mais baixas.</p>
<p><strong>A estratégia mais adequada para melhorar a qualidade das respostas sem simplesmente reduzir a busca inicial é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Reduzir <code>top_k</code> para 1 em todas as consultas, garantindo que o modelo use apenas o documento mais similar.</li>
  <li data-option="b"><strong>b.</strong> Recuperar um conjunto inicial maior, aplicar reranking e enviar ao modelo apenas os trechos mais relevantes e diversos para a pergunta.</li>
  <li data-option="c"><strong>c.</strong> Manter <code>top_k=20</code>, pois quanto mais contexto o modelo recebe, maior a chance de encontrar a resposta correta.</li>
  <li data-option="d"><strong>d.</strong> Substituir embeddings por busca literal de palavras-chave, pois similaridade semântica causa ruído.</li>
  <li data-option="e"><strong>e.</strong> Pedir ao modelo, no prompt final, que ignore os documentos irrelevantes, sem alterar o retriever.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 9</h3>

<p>Uma empresa está criando um agente para auxiliar no atendimento financeiro. Ele pode consultar faturas, identificar atrasos, sugerir negociação e registrar notas internas. A área de negócio quer que, futuramente, ele também possa aplicar descontos e cancelar cobranças. O time técnico precisa definir uma primeira versão segura para produção.</p>
<p><strong>A estratégia mais adequada para a primeira versão produtiva é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Permitir que o agente aplique descontos automaticamente, desde que o prompt diga para agir com cuidado.</li>
  <li data-option="b"><strong>b.</strong> Permitir consultas e geração de recomendações, registrar evidências e exigir aprovação humana antes de qualquer desconto, cancelamento ou alteração financeira.</li>
  <li data-option="c"><strong>c.</strong> Bloquear todas as tools, permitindo apenas respostas genéricas sobre política financeira.</li>
  <li data-option="d"><strong>d.</strong> Liberar cancelamentos automáticos apenas quando o usuário pedir com linguagem educada e objetiva.</li>
  <li data-option="e"><strong>e.</strong> Deixar o agente executar ações e revisar logs no dia seguinte para corrigir eventuais erros.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 10</h3>

<p>Uma equipe criou um assistente que responde perguntas sobre documentação interna usando RAG. Em testes manuais, foram observados três problemas:</p>
<p><ul><li>Algumas respostas são bem escritas, mas não respondem exatamente à pergunta.</li>
<li>Algumas respostas citam informações que não aparecem nos trechos recuperados.</li>
<li>Algumas perguntas não recuperam documentos importantes, mesmo existindo conteúdo relevante na base.</li>
</ul>
A equipe quer criar uma bateria de testes automatizados usando DeepEval.</p>
<p><strong>A estratégia de avaliação mais adequada para diagnosticar esses problemas é:</strong></p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Comparar apenas se a resposta contém palavras-chave esperadas, sem considerar o contexto recuperado.</li>
  <li data-option="b"><strong>b.</strong> Usar métricas diferentes para aspectos diferentes, como Answer Relevancy para aderência à pergunta, Faithfulness para alinhamento ao contexto recuperado e métricas de contexto para avaliar a qualidade da recuperação.</li>
  <li data-option="c"><strong>c.</strong> Avaliar somente a latência, pois um sistema RAG bom é aquele que responde rapidamente.</li>
  <li data-option="d"><strong>d.</strong> Usar apenas uma nota humana final de 0 a 10, pois métricas automáticas não ajudam em sistemas com linguagem natural.</li>
  <li data-option="e"><strong>e.</strong> Avaliar apenas o prompt final, pois se o prompt estiver bem escrito o RAG tende a funcionar corretamente.</li>
</ul>
<div class="quiz-feedback" data-explanation=""></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>