import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: false,
  theme: document.body.getAttribute('data-md-color-scheme') === 'slate' ? 'dark' : 'default',
  securityLevel: 'loose',
});

// pymdownx.superfences gera <pre class="mermaid"><code>...</code></pre>
// Mermaid espera <pre class="mermaid">conteúdo</pre>
document.querySelectorAll('pre.mermaid code').forEach((code) => {
  const pre = code.parentElement;
  pre.textContent = code.textContent;
  pre.removeAttribute('class');
  pre.classList.add('mermaid');
});

await mermaid.run({ querySelector: '.mermaid' });
