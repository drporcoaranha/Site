const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu-principal");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearElement = document.getElementById("current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const quoteForm = document.getElementById("quote-form");
const feedback = document.getElementById("form-feedback");

if (quoteForm && feedback) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const nome = String(formData.get("nome") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const empresa = String(formData.get("empresa") || "").trim();
    const produto = String(formData.get("produto") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    if (!nome || !email || !empresa || !produto || mensagem.length < 20) {
      feedback.textContent =
        "Preencha todos os campos. A mensagem deve ter pelo menos 20 caracteres.";
      feedback.classList.remove("success");
      feedback.classList.add("error");
      return;
    }

    feedback.textContent =
      "Solicitação enviada com sucesso! Nossa equipe comercial entrará em contato em até 1 dia útil.";
    feedback.classList.remove("error");
    feedback.classList.add("success");
    quoteForm.reset();
  });
}
