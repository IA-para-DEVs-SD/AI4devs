import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: false,
  theme: document.body.getAttribute('data-md-color-scheme') === 'slate' ? 'dark' : 'default',
  securityLevel: 'loose',
  htmlLabels: true,
});

// pymdownx.superfences gera: <pre class="mermaid"><code>...escaped...</code></pre>
// Mermaid.run() lê o textContent do elemento, que decodifica entities automaticamente.
// Só precisamos remover o <code> wrapper para que Mermaid encontre o conteúdo.
document.querySelectorAll('pre.mermaid').forEach((pre) => {
  const code = pre.querySelector('code');
  if (code) {
    // Pegar o texto decodificado e colocar diretamente no pre
    pre.textContent = code.textContent;
  }
});

await mermaid.run({ querySelector: 'pre.mermaid' });
