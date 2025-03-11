// Função para alternar a visibilidade de todas as descrições
function toggleAllDescriptions() {
  const personaCards = document.querySelectorAll('.persona-card');
  let allExpanded = true;

  // Verifica se todos os cartões já estão expandidos
  personaCards.forEach(card => {
    const description = card.querySelector('.persona-description');
    if (description.style.display === "none" || description.style.display === "") {
      allExpanded = false;
    }
  });

  // Define o novo estado com base no estado atual
  personaCards.forEach(card => {
    const description = card.querySelector('.persona-description');
    const toggleIcon = card.querySelector('.toggle-icon');

    if (allExpanded) {
      description.style.display = "none";
      toggleIcon.textContent = "▶";
      card.classList.remove('expanded');
    } else {
      description.style.display = "block";
      toggleIcon.textContent = "▼";
      card.classList.add('expanded');
    }
  });
}

// Adiciona o evento de clique a cada .persona-header (opcional se você preferir não usar o `onclick` diretamente no HTML)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.persona-header').forEach(header => {
    header.addEventListener('click', toggleAllDescriptions);
  });
});

// Função para inicializar os eventos após o header ser carregado
function initMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('nav ul');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

// Verifica quando o header foi carregado e chama a função initMenu()
document.addEventListener("DOMContentLoaded", () => {
  const checkHeader = setInterval(() => {
    if (document.querySelector('.hamburger')) {
      clearInterval(checkHeader);
      initMenu();
    }
  }, 100);
});



// componente de abas 
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const projectCards = document.querySelectorAll(".project-card");

  tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
          // Remove a classe "active" de todas as abas
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          // Pega a categoria da aba clicada
          const category = tab.getAttribute("data-tab");

          // Mostra ou esconde os projetos com base na categoria
          projectCards.forEach((card) => {
              const categories = card.getAttribute("data-category").split(" "); // Divide as categorias do card
              if (category === "all" || categories.includes(category)) {
                  card.style.display = "block"; // Exibe o card
              } else {
                  card.style.display = "none"; // Esconde o card
              }
          });
      });
  });
});





