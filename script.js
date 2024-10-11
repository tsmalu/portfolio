

// Seleciona o ícone hamburger e o menu de navegação
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

// Adiciona o evento de clique no ícone hamburger
hamburger.addEventListener('click', () => {
  console.log("Menu hamburger clicado"); // Adiciona log para teste
    menu.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder o menu
});
