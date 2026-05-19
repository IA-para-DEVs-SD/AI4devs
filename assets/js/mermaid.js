import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const theme = document.body.getAttribute('data-md-color-scheme') === 'slate' ? 'dark' : 'default';

mermaid.initialize({
  startOnLoad: false,
  theme: theme,
  securityLevel: 'loose',
  htmlLabels: true,
});

// pymdownx.superfences gera: <pre class="mermaid"><code>...html-escaped...</code></pre>
// Precisamos converter para: <div class="mermaid">...raw text...</div>
const blocks = document.querySelectorAll('pre.mermaid');
blocks.forEach((pre) => {
  const code = pre.querySelector('code');
  if (!code) return;
  const div = document.createElement('div');
  div.className = 'mermaid';
  div.textContent = code.textContent;
  pre.parentNode.replaceChild(div, pre);
});

if (blocks.length > 0) {
  mermaid.run({ querySelector: '.mermaid' });
}
