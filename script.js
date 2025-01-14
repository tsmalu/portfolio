console.log("Arquivo script.js carregado com sucesso");

// Função para alternar a visibilidade de todas as descrições
function toggleAllDescriptions() {
  // Seleciona todos os cartões de persona
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

// Seleciona o ícone do menu hambúrguer e o menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

// Adiciona um evento de clique ao hambúrguer
hamburger.addEventListener('click', () => {
  // Alterna a classe 'active' no menu para exibi-lo ou ocultá-lo
  menu.classList.toggle('active');
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





