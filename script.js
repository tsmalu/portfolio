console.log("Arquivo script.js carregado com sucesso");

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


// MENSAGEM DE PÓS ENVIO DO FORMULÁRIO
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Previne o redirecionamento padrão

  const form = event.target;
  const data = new FormData(form);

  try {
      const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
      });

      // Oculta o formulário e o parágrafo original de introdução
      document.querySelector(".contact-section p").style.display = "none";
      form.style.display = "none";

      // Remove mensagens anteriores
      document.querySelectorAll(".contact-section .message-box").forEach(el => el.remove());

      if (response.ok) {
          // Exibe a mensagem de sucesso com estilos
          const successMessage = document.createElement("div");
          successMessage.innerHTML = "<p>Obrigado! Sua mensagem foi enviada com sucesso.</p>";
          successMessage.classList.add("message-box", "success-message");
          document.querySelector(".contact-section").appendChild(successMessage);
      } else {
          // Exibe a mensagem de erro com estilos
          const errorMessage = document.createElement("div");
          errorMessage.innerHTML = "<p>Ocorreu um erro ao enviar sua mensagem. Tente novamente.</p>";
          errorMessage.classList.add("message-box", "error-message");
          document.querySelector(".contact-section").appendChild(errorMessage);
      }
  } catch (error) {
      console.error("Erro:", error);

      // Oculta o formulário e o parágrafo original de introdução
      document.querySelector(".contact-section p").style.display = "none";
      form.style.display = "none";

      // Remove mensagens anteriores
      document.querySelectorAll(".contact-section .message-box").forEach(el => el.remove());

      // Exibe a mensagem de erro com estilos
      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = "<p>Ocorreu um erro ao enviar sua mensagem. Tente novamente.</p>";
      errorMessage.classList.add("message-box", "error-message");
      document.querySelector(".contact-section").appendChild(errorMessage);
  }
});
