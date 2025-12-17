const Usuario_Generico = "admin";
const Senha_Generica = "Inter";

const loginFormulario = document.getElementById("loginFormulario");
const usuarioInput = document.getElementById("usuario");
const senhaInput = document.getElementById("senha");
const ulMensagens = document.querySelector(".ul-flashed-messages");
const liMensagem = document.querySelector(".mensagem-validacao");

// Função de validação e envio de formulario
loginFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  liMensagem.textContent = "";
  ulMensagens.style.display = "none";

  if (usuario === Usuario_Generico && senha === Senha_Generica) {
    window.location.href = "authorized.html";
  } else {
    const mensagemErro = "Usuario ou senha incorretos. Tente novamente.";
    // Atualiza o conteúdo do flash
    liMensagem.textContent = mensagemErro;
    ulMensagens.style.display = "block";

    // Limpa o campo da senha por segurança e foca nele
    senhaInput.value = "";
    senhaInput.focus();
  }
});

// Modo escuro
const darkMode = document.getElementById("darkmodeID");
const body = document.body;

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
