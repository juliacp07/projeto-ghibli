document.addEventListener("DOMContentLoaded", function () {
    
    window.alert("Bem-vindo à página dedicada ao Studio Ghibli! Explore as animações que marcaram gerações.");
    
    let curtidas = 0;

const botaoCurtir = document.getElementById("curtir-btn");

if (botaoCurtir) {
    botaoCurtir.addEventListener("click", function () {
        curtidas++;
        document.getElementById("contador").textContent = curtidas;
    });
 }
});
