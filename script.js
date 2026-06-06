document.addEventListener("DOMContentLoaded", function () {
    
    window.alert("Bem-vindo à página dedicada ao Studio Ghibli! Explore as animações que marcaram gerações.");
    const btnTema = document.getElementById("btn-tema");
    
    if (btnTema) {
        btnTema.addEventListener("click", function () {
            document.body.classList.toggle("modo-escuro");
            
            if (document.body.classList.contains("modo-escuro")) {
                btnTema.textContent = "Alternar Modo Claro";
                btnTema.classList.remove("btn-outline-light");
                btnTema.classList.add("btn-light");
            } else {
                btnTema.textContent = "Alternar Modo Escuro";
                btnTema.classList.remove("btn-light");
                btnTema.classList.add("btn-outline-light");
            }
        });
    }

    const formContato = document.getElementById("form-contato");
    const msgSucesso = document.getElementById("mensagem-sucesso");

    if (formContato && msgSucesso) {
        formContato.addEventListener("submit", function (evento) {
            evento.preventDefault();
            
            const nomeUsuario = document.getElementById("nome").value;
            
            msgSucesso.textContent = `Obrigado pelo contato, ${nomeUsuario}! Sua mensagem sobre o universo Ghibli foi enviada com sucesso.`;
            msgSucesso.classList.remove("d-none");
            
            formContato.reset();
            msgSucesso.scrollIntoView({ behavior: 'smooth' });
        });
    }
});