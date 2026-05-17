# 📝 Quiz — IA no Desenvolvimento

Teste seus conhecimentos sobre IA aplicada ao desenvolvimento de software.

<div class="quiz-progress"><div class="quiz-progress-bar" style="width: 0%"></div></div>

<div class="quiz-container" data-answer="b">
<h3>Questão 1</h3>

<p>Qual o principal risco de aceitar código gerado por IA sem revisão?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O código sempre será mais lento.</li>
  <li data-option="b"><strong>b.</strong> Pode conter bugs sutis, vulnerabilidades ou lógica incorreta.</li>
  <li data-option="c"><strong>c.</strong> O modelo cobra por cada linha gerada.</li>
  <li data-option="d"><strong>d.</strong> O código não compila em nenhuma linguagem.</li>
</ul>
<div class="quiz-feedback" data-explanation="LLMs geram código plausível mas podem introduzir bugs lógicos, falhas de segurança ou padrões desatualizados que exigem revisão humana."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 2</h3>

<p>Como a IA pode auxiliar na escrita de testes unitários?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Gerando casos de teste a partir da assinatura e comportamento esperado da função.</li>
  <li data-option="b"><strong>b.</strong> Executando os testes automaticamente em produção.</li>
  <li data-option="c"><strong>c.</strong> Substituindo completamente a necessidade de QA.</li>
  <li data-option="d"><strong>d.</strong> Garantindo 100% de cobertura sem intervenção.</li>
</ul>
<div class="quiz-feedback" data-explanation="A IA gera sugestões de testes baseadas no código, mas o dev precisa validar se os cenários cobrem os requisitos reais."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 3</h3>

<p>O que é uma User Story bem escrita no contexto de desenvolvimento com IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um prompt longo com todos os detalhes técnicos.</li>
  <li data-option="b"><strong>b.</strong> Uma descrição vaga para dar liberdade ao modelo.</li>
  <li data-option="c"><strong>c.</strong> Um documento de 10 páginas com diagramas UML.</li>
  <li data-option="d"><strong>d.</strong> Uma descrição com persona, objetivo e critérios de aceitação claros.</li>
</ul>
<div class="quiz-feedback" data-explanation="User Stories com formato 'Como [persona], quero [objetivo], para [benefício]' + critérios de aceitação dão contexto suficiente para a IA gerar código alinhado."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 4</h3>

<p>Qual princípio SOLID é mais relevante quando a IA sugere uma classe com muitas responsabilidades?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Open/Closed Principle.</li>
  <li data-option="b"><strong>b.</strong> Liskov Substitution.</li>
  <li data-option="c"><strong>c.</strong> Single Responsibility Principle.</li>
  <li data-option="d"><strong>d.</strong> Dependency Inversion.</li>
</ul>
<div class="quiz-feedback" data-explanation="SRP diz que uma classe deve ter apenas um motivo para mudar. Se a IA gera uma 'god class', o dev deve refatorar em responsabilidades separadas."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 5</h3>

<p>Qual a melhor forma de usar IA para documentação de código?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Gerar toda a documentação uma vez e nunca atualizar.</li>
  <li data-option="b"><strong>b.</strong> Usar como rascunho inicial e revisar para garantir precisão.</li>
  <li data-option="c"><strong>c.</strong> Confiar cegamente pois o modelo leu todo o código.</li>
  <li data-option="d"><strong>d.</strong> Documentar apenas funções públicas e ignorar o resto.</li>
</ul>
<div class="quiz-feedback" data-explanation="IA gera bons rascunhos de documentação, mas pode inventar comportamentos ou omitir edge cases — revisão humana é essencial."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 6</h3>

<p>O que é um PRD (Product Requirements Document) e como a IA pode ajudar?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Um documento de deploy. A IA gera o Dockerfile.</li>
  <li data-option="b"><strong>b.</strong> Um contrato legal. A IA não pode ajudar.</li>
  <li data-option="c"><strong>c.</strong> Um plano de testes. A IA executa os testes.</li>
  <li data-option="d"><strong>d.</strong> Um documento de requisitos do produto. A IA pode gerar rascunhos a partir de descrições de alto nível.</li>
</ul>
<div class="quiz-feedback" data-explanation="PRD define o que será construído e por quê. A IA gera bons rascunhos de PRD a partir de briefings, mas o PM precisa validar prioridades e viabilidade."></div>
</div>

<div class="quiz-container" data-answer="b">
<h3>Questão 7</h3>

<p>Qual o maior risco de usar IA para refatoração de código legado?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O código refatorado sempre fica mais lento.</li>
  <li data-option="b"><strong>b.</strong> A IA pode alterar comportamento implícito que não está documentado nem testado.</li>
  <li data-option="c"><strong>c.</strong> Refatoração com IA viola licenças open-source.</li>
  <li data-option="d"><strong>d.</strong> A IA não consegue ler código com mais de 100 linhas.</li>
</ul>
<div class="quiz-feedback" data-explanation="Código legado frequentemente tem comportamentos implícitos (side effects, edge cases) que não estão em testes. A IA pode 'limpar' código e quebrar funcionalidade silenciosamente."></div>
</div>

<div class="quiz-container" data-answer="a">
<h3>Questão 8</h3>

<p>Como a IA pode auxiliar na revisão de código (code review)?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Identificando padrões problemáticos, bugs potenciais e sugerindo melhorias antes do review humano.</li>
  <li data-option="b"><strong>b.</strong> Aprovando PRs automaticamente sem intervenção.</li>
  <li data-option="c"><strong>c.</strong> Substituindo completamente revisores humanos.</li>
  <li data-option="d"><strong>d.</strong> Apenas formatando o código com prettier.</li>
</ul>
<div class="quiz-feedback" data-explanation="IA como primeiro filtro no code review: detecta bugs óbvios, violações de padrão e sugere melhorias. O reviewer humano foca em lógica de negócio e arquitetura."></div>
</div>

<div class="quiz-container" data-answer="c">
<h3>Questão 9</h3>

<p>Qual abordagem é mais segura ao usar IA para gerar queries SQL?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> Executar diretamente em produção — o modelo não erra.</li>
  <li data-option="b"><strong>b.</strong> Confiar no modelo se ele disser "esta query é segura".</li>
  <li data-option="c"><strong>c.</strong> Gerar a query, revisar, testar em ambiente seguro e validar com EXPLAIN antes de usar.</li>
  <li data-option="d"><strong>d.</strong> Usar apenas queries hardcoded e nunca gerar dinamicamente.</li>
</ul>
<div class="quiz-feedback" data-explanation="IA gera SQL plausível mas pode errar nomes de colunas, lógica de JOINs ou criar queries ineficientes. Sempre validar com schema real e EXPLAIN."></div>
</div>

<div class="quiz-container" data-answer="d">
<h3>Questão 10</h3>

<p>O que é o padrão "Human-in-the-Loop" no desenvolvimento com IA?</p>

<ul class="quiz-options">
  <li data-option="a"><strong>a.</strong> O humano treina o modelo manualmente.</li>
  <li data-option="b"><strong>b.</strong> O humano só intervém quando há erro de compilação.</li>
  <li data-option="c"><strong>c.</strong> O humano é removido do processo após o setup inicial.</li>
  <li data-option="d"><strong>d.</strong> O humano valida, corrige e direciona a IA em pontos críticos do fluxo.</li>
</ul>
<div class="quiz-feedback" data-explanation="Human-in-the-Loop: a IA gera, o humano valida. O dev não é substituído — ele orquestra, valida decisões críticas e garante qualidade."></div>
</div>

<div class="quiz-score" style="display:none">
<h2>🎯 Resultado Final</h2>
<div class="score-number"></div>
</div>
