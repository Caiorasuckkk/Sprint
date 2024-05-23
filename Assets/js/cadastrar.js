document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#emails").value;
    const senha = document.querySelector("#senhas").value;
   
    // Criar um objeto chamado jogador com esses valores
    const Cliente = {
        id: new Date().getTime(), 
            nome: nome,
           email: emails,
            senha:senhas
    
        } 
         // Recuperar o array de jogadores do localStorage (ou criar um novo array se estiver vazio)
         const Clientes = JSON.parse(localStorage.getItem("Clientes")) || [];

         // Adicionar o novo jogador ao array
         Clientes.push(Cliente);
 
         // Salvar o array atualizado no localStorage usando a chave "jogadores"
         localStorage.setItem("Clientes", JSON.stringify(Clientes));
 
         // Redirecionar o usuário para a página inicial
         window.location.href = "index.html";
       });