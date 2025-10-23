
// Modo escuro
const darkMode = document.getElementById('darkmodeID');
const body = document.body;

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Redirecionamento do botão Entrar
const entrarBtn = document.getElementById('btnEntrar');

entrarBtn.addEventListener('click', () => {
    window.location.href = '/authorized.html';
});
