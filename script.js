

// Seleciona o ícone hamburger e o menu de navegação
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

// Adiciona o evento de clique no ícone hamburger
hamburger.addEventListener('click', () => {
  console.log("Menu hamburger clicado"); // Adiciona log para teste
    menu.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder o menu
});

// Truncamento do texto
const textElement = document.getElementById('truncated-text'); // Seleciona o elemento pelo ID
const maxChars = 110; // Limite de caracteres desejado
const originalText = textElement.innerText;

if (originalText.length > maxChars) {
  textElement.innerText = originalText.substring(0, maxChars) + '...'; // Trunca o texto
}