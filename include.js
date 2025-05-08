function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(el => {
      const file = el.getAttribute("data-include");
      const url = el.getAttribute("data-url");
      const texto = el.getAttribute("data-texto");
  
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
  
          // Atualiza a URL e o texto do botão, se forem fornecidos
          const link = el.querySelector("a");
          if (link) {
            if (url) link.setAttribute("href", url);
            if (texto) link.textContent = texto;
          }
        });
    });
  }
  includeHTML();
  