function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(el => {
    const file   = el.getAttribute("data-include");
    const url    = el.getAttribute("data-url");
    const texto  = el.getAttribute("data-texto");
    const target = el.getAttribute("data-target") || "_self";

    fetch(file, { cache: "no-cache" })
      .then(r => r.text())
      .then(html => {
        el.innerHTML = html;

        // pega o link do componente (ex.: <a class="btn-link">)
        const link = el.querySelector("a");
        if (!link) return;

        if (url)    link.setAttribute("href", url);
        if (target) link.setAttribute("target", target);
        if (target === "_blank") link.setAttribute("rel", "noopener noreferrer");

        // se existir span .btn-label, atualiza só o texto interno
        const label = link.querySelector(".btn-label");
        if (label && texto) label.textContent = texto;
        else if (texto) link.textContent = texto; // fallback
      })
      .catch(e => console.error("Include falhou:", file, e));
  });
}
includeHTML();
