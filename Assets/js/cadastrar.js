document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('form-cadastro');

    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('emails').value;
        const senha = document.getElementById('senhas').value;

        // Armazenar os dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);

        // Redirecionar para a página "Acesso.html"
        window.location.href = 'Acesso.html';
    });

    document.getElementById('botao-cancelar').addEventListener('click', function() {
        // Limpar os campos do formulário
        formCadastro.reset();
    });
});
