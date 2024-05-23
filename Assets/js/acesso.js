document.addEventListener('DOMContentLoaded', function() {
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');

    const usuarioInfo = document.getElementById('usuario-info');
    if (nome && email) {
        usuarioInfo.innerHTML = `<p>Bem-vindo, ${nome}</p>`;
    }

    const formPedido = document.getElementById('form-pedido');
    const pedidosSection = document.getElementById('pedidos-section');
    const pedidosLista = document.getElementById('pedidos-lista');
    const verPedidosBtn = document.getElementById('ver-pedidos');

    formPedido.addEventListener('submit', function(event) {
        event.preventDefault();

        const nomeProjeto = document.getElementById('nome-projeto').value;
        const tipo = document.getElementById('tipo').value;
        const sobre = document.getElementById('sobre').value;
        const prazo = document.getElementById('prazo').value;

        const pedido = {
            nomeProjeto,
            tipo,
            sobre,
            prazo
        };

        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.push(pedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        formPedido.reset();
        alert('Pedido enviado com sucesso!');
    });

    verPedidosBtn.addEventListener('click', function() {
        pedidosSection.style.display = 'block';
        pedidosLista.innerHTML = '';

        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        if (pedidos.length === 0) {
            pedidosLista.innerHTML = '<p>Nenhum pedido encontrado.</p>';
            return;
        }

        pedidos.forEach((pedido, index) => {
            const pedidoElement = document.createElement('div');
            pedidoElement.innerHTML = `
                <h3>Pedido ${index + 1}</h3>
                <p><strong>Nome do Projeto:</strong> ${pedido.nomeProjeto}</p>
                <p><strong>Tipo:</strong> ${pedido.tipo}</p>
                <p><strong>Sobre:</strong> ${pedido.sobre}</p>
                <p><strong>Prazo:</strong> ${pedido.prazo}</p>
            `;
            pedidosLista.appendChild(pedidoElement);
        });
    });

    document.getElementById('botao-cancelar').addEventListener('click', function() {
        formPedido.reset();
    });
});
