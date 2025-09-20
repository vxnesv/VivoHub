document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) {
    console.error("⚠️ Formulário de login não encontrado!");
    return;
  }

  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const feedback = document.getElementById("loginFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita reload

    const email = emailInput?.value.trim().toLowerCase();
    const senha = senhaInput?.value.trim();

    if (!email || !senha) {
      feedback.textContent = "Preencha todos os campos.";
      feedback.style.display = "block";
      return;
    }

    // mapa de usuários → páginas correspondentes
    const usuarios = {
      "colaborador@vivo.com": "dashboard.html",
      "gerente@vivo.com": "gerente-dash.html",
      "buddy@vivo.com": "buddy-dash.html"
    };

    if (usuarios[email]) {
      window.location.href = usuarios[email]; // redireciona
    } else {
      feedback.textContent = "Usuário não encontrado.";
      feedback.style.display = "block";
    }
  });
});
