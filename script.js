document.addEventListener("DOMContentLoaded", function () {
    
    window.alert("Bem-vindo à página dedicada ao Studio Ghibli! Explore as animações que marcaram gerações.");
    const btnTema = document.getElementById("btn-tema");
    
    if (btnTema) {
        btnTema.addEventListener("click", function () {
            alert("botão clicado!");
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
