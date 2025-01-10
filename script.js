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



