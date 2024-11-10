document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do usuário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    document.getElementById("contact-form").reset(); // Limpa o formulário
  });
