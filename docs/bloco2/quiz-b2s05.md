# 📝 Quiz — Integração de LLMs, Tools, RAG e Avaliação

Teste seus conhecimentos sobre integração com sistemas reais, RAG e avaliação de agentes.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="b">
<h3>Questão 1</h3>

<p>Uma equipe está criando um assistente que consulta endpoints internos para buscar dados atualizados. A melhor forma de iniciar essa integração, reduzindo ambiguidades e tornando o comportamento controlável, é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Passar a documentação completa da API no prompt e deixar que o modelo escolha livremente quais endpoints chamar.</li>
  <li data-option="b"><strong>b.</strong> Definir tools com nomes claros, parâmetros tipados, descrições objetivas e validação externa antes de executar qualquer chamada real.</li>
  <li data-option="c"><strong>c.</strong> Permitir que o modelo gere qualquer URL e payload, desde que a resposta final pareça coerente.</li>
  <li data-option="d"><strong>d.</strong> Criar um único endpoint genérico chamado execute_action, capaz de receber qualquer ação em texto livre.</li>
</ul>
<div class="quiz-feedback" data-explanation="Tools com nomes claros, parâmetros tipados e validação externa criam contratos explícitos que tornam o comportamento do agente previsível e seguro."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 2</h3>

<p>Um desenvolvedor implementa classificação automática de e-mails. O resultado será armazenado em banco e consumido por um dashboard. O modelo deve retornar categoria, prioridade, resumo e precisa_revisao_humana. A estratégia mais adequada para tornar essa saída confiável é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aumentar a temperatura do modelo para respostas mais completas e variadas.</li>
  <li data-option="b"><strong>b.</strong> Armazenar a resposta completa em uma coluna de texto e deixar o dashboard interpretar depois.</li>
  <li data-option="c"><strong>c.</strong> Definir um schema de saída e validar a resposta do modelo antes de persistir ou encaminhar os dados.</li>
  <li data-option="d"><strong>d.</strong> Pedir no prompt que o modelo "retorne um JSON bem formatado" e confiar que a instrução será suficiente.</li>
</ul>
<div class="quiz-feedback" data-explanation="Schema + validação garante que a saída do modelo é consumível por outros sistemas. Pedir JSON no prompt ajuda mas não garante — validação determinística é necessária."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 3</h3>

<p>Uma aplicação possui endpoints GET /users/{id}/roles, GET /roles/{id}/permissions e GET /audit-log?user_id=... Um time quer criar uma tool para verificar se um usuário deveria ter acesso a um recurso. A melhor capability a expor é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> check_user_access(user_id, resource), retornando se possui acesso, evidências usadas e inconsistências.</li>
  <li data-option="b"><strong>b.</strong> call_endpoint(url, method, payload), permitindo que o agente escolha qualquer endpoint.</li>
  <li data-option="c"><strong>c.</strong> get_roles(user_id), retornando apenas a lista de roles do usuário.</li>
  <li data-option="d"><strong>d.</strong> get_audit_log(user_id), permitindo ao agente analisar manualmente todos os eventos.</li>
</ul>
<div class="quiz-feedback" data-explanation="Expor uma capability de negócio (check_user_access) em vez de endpoints técnicos individuais. A tool encapsula a lógica de verificação e retorna resultado acionável."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 4</h3>

<p>Um chatbot responde corretamente "qual sistema estamos analisando?" logo após o usuário informar, mas em nova sessão sem histórico não sabe mais. Um dev júnior diz que o modelo "esqueceu". A explicação técnica mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O modelo apagou seus pesos temporariamente, por isso perdeu a informação.</li>
  <li data-option="b"><strong>b.</strong> Aumentar a temperatura resolveria, pois o modelo se tornaria mais criativo para inferir o contexto.</li>
  <li data-option="c"><strong>c.</strong> A solução correta é fazer fine-tuning sempre que o usuário informar algo novo.</li>
  <li data-option="d"><strong>d.</strong> O modelo é stateless entre chamadas; ele só responde com base no histórico, estado e contexto enviados na requisição atual.</li>
</ul>
<div class="quiz-feedback" data-explanation="LLMs são stateless — não mantêm memória entre chamadas. Toda informação de contexto precisa ser enviada explicitamente a cada requisição (via state, histórico ou RAG)."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 5</h3>

<p>Um agente consulta APIs de estoque. A equipe quer impedir consultas a fornecedores restritos sem autorização. Um integrante sugere colocar no system prompt: "não consulte fornecedores restritos se o usuário não tiver permissão". A ação mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aumentar o número de exemplos no prompt mostrando casos permitidos e proibidos.</li>
  <li data-option="b"><strong>b.</strong> Remover todos os endpoints de consulta e deixar o agente responder com conhecimento pré-treinado.</li>
  <li data-option="c"><strong>c.</strong> Validar permissões no backend antes de executar a tool, usando o prompt apenas como orientação complementar.</li>
  <li data-option="d"><strong>d.</strong> Confiar no system prompt, pois instruções de sistema têm prioridade e impedem chamadas indevidas.</li>
</ul>
<div class="quiz-feedback" data-explanation="Validações de segurança devem ser determinísticas (código/policy). O prompt orienta comportamento mas nunca deve ser a única barreira para ações críticas."></div>
</div>

<div class="quiz-container" data-answer="e">
<h3>Questão 6</h3>

<p>Uma empresa possui manuais, políticas e FAQs indexados em vector database. Um assistente consulta essa base para responder perguntas. Em alguns casos apenas recupera documentos; em outros, envia ao LLM para gerar resposta. A interpretação mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Memória semântica e RAG são exatamente a mesma coisa, pois ambos usam embeddings.</li>
  <li data-option="b"><strong>b.</strong> RAG só existe quando o sistema salva conversas anteriores em banco relacional.</li>
  <li data-option="c"><strong>c.</strong> A memória semântica só pode ser usada em modelos fine-tuned para o domínio.</li>
  <li data-option="d"><strong>d.</strong> A RAG elimina a necessidade de validar fontes, pois o modelo sempre usará corretamente os documentos.</li>
  <li data-option="e"><strong>e.</strong> A base vetorial representa uma memória semântica, e o RAG ocorre quando a aplicação usa os trechos recuperados para compor o contexto da geração.</li>
</ul>
<div class="quiz-feedback" data-explanation="Memória semântica = base consultável por significado. RAG = pipeline que usa recuperação para gerar respostas fundamentadas. São conceitos complementares, não sinônimos."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 7</h3>

<p>Uma equipe indexou documentação técnica dividindo em blocos fixos de 500 caracteres sem preservar títulos ou fonte. As respostas frequentemente recuperam trechos incompletos. A melhoria mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Aplicar chunking por seções/subtítulos, preservar metadados (documento, seção, versão) e usar overlap quando houver risco de cortar contexto.</li>
  <li data-option="b"><strong>b.</strong> Fazer fine-tuning do modelo com todos os documentos e abandonar a busca vetorial.</li>
  <li data-option="c"><strong>c.</strong> Aumentar todos os chunks para o maior tamanho possível, enviando documentos quase inteiros.</li>
  <li data-option="d"><strong>d.</strong> Reduzir todos os chunks para uma frase, garantindo máxima granularidade.</li>
</ul>
<div class="quiz-feedback" data-explanation="Chunking por seções preserva contexto semântico. Metadados permitem filtrar e rastrear fontes. Overlap evita perda de informação nas bordas entre chunks."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 8</h3>

<p>Um assistente usa RAG com top_k=20 e envia todos os chunks ao prompt. Respostas ficaram mais longas, caras e menos precisas. Vários chunks falam do mesmo endpoint enquanto documentos sobre exceções aparecem em posições baixas. A estratégia mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Reduzir top_k para 1 em todas as consultas.</li>
  <li data-option="b"><strong>b.</strong> Recuperar um conjunto inicial maior, aplicar reranking e enviar ao modelo apenas os trechos mais relevantes e diversos.</li>
  <li data-option="c"><strong>c.</strong> Manter top_k=20, pois quanto mais contexto o modelo recebe, maior a chance de encontrar a resposta.</li>
  <li data-option="d"><strong>d.</strong> Pedir ao modelo, no prompt final, que ignore os documentos irrelevantes sem alterar o retriever.</li>
</ul>
<div class="quiz-feedback" data-explanation="Reranking reavalia candidatos com modelo mais preciso, priorizando diversidade e relevância. Enviar apenas os melhores reduz ruído e custo sem perder cobertura."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 9</h3>

<p>Uma empresa cria um agente para atendimento financeiro que pode consultar faturas, identificar atrasos e sugerir negociação. Futuramente quer que aplique descontos e cancele cobranças. A estratégia mais adequada para a primeira versão produtiva é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Permitir que o agente aplique descontos automaticamente, desde que o prompt diga para agir com cuidado.</li>
  <li data-option="b"><strong>b.</strong> Permitir consultas e recomendações, registrar evidências e exigir aprovação humana antes de qualquer alteração financeira.</li>
  <li data-option="c"><strong>c.</strong> Bloquear todas as tools, permitindo apenas respostas genéricas sobre política financeira.</li>
  <li data-option="d"><strong>d.</strong> Deixar o agente executar ações e revisar logs no dia seguinte para corrigir eventuais erros.</li>
</ul>
<div class="quiz-feedback" data-explanation="Primeira versão: leitura + recomendação + evidência. Ações de escrita (desconto, cancelamento) exigem human-in-the-loop até que confiança e métricas justifiquem autonomia."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 10</h3>

<p>Um assistente RAG apresenta três problemas: respostas bem escritas que não respondem a pergunta, respostas que citam informações ausentes nos trechos recuperados, e perguntas que não recuperam documentos importantes. A estratégia de avaliação mais adequada é:</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Comparar apenas se a resposta contém palavras-chave esperadas, sem considerar o contexto recuperado.</li>
  <li data-option="b"><strong>b.</strong> Usar métricas diferentes: Answer Relevancy para aderência à pergunta, Faithfulness para alinhamento ao contexto, e métricas de contexto para qualidade da recuperação.</li>
  <li data-option="c"><strong>c.</strong> Avaliar somente a latência, pois um sistema RAG bom é aquele que responde rapidamente.</li>
  <li data-option="d"><strong>d.</strong> Usar apenas uma nota humana final de 0 a 10, pois métricas automáticas não ajudam em linguagem natural.</li>
</ul>
<div class="quiz-feedback" data-explanation="Cada problema exige métrica diferente: Answer Relevancy (responde a pergunta?), Faithfulness (fiel ao contexto?), Context Recall/Precision (recuperou os docs certos?)."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
