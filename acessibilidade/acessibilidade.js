// ============================
// Painel de acessibilidade
// ============================

const painel = document.getElementById("painelAcessibilidade")
const alternar = document.getElementById("alternarAcessibilidade")

alternar.addEventListener("click", () => {
  const aberto = painel.classList.toggle("aberto")
  alternar.setAttribute("aria-expanded", String(aberto))

})

// ============================
// Fonte (salva preferências)
// ============================

const raiz = document.documentElement
const escalaSalva = localStorage.getItem("escalaFonte")
if (escalaSalva) raiz.style.setProperty("--escala-fonte", escalaSalva)

document.getElementById("botaoAumentar").addEventListener("click", () => {
  let escala = parseFloat(getComputedStyle(raiz).getPropertyValue("--escala-fonte")) || 1;
  escala = Math.min(1.35, +(escala + 0.05).toFixed(2))
  raiz.style.setProperty("--escala-fonte", escala)
  localStorage.setItem("escalaFonte", escala)
})

document.getElementById("botaoDiminuir").addEventListener("click", () => {
  let escala = parseFloat(getComputedStyle(raiz).getPropertyValue("--escala-fonte")) || 1;
  escala = Math.max(0.9, +(escala - 0.05).toFixed(2))
  raiz.style.setProperty("--escala-fonte", escala)
  localStorage.setItem("escalaFonte", escala)
})

// ============================
// Função de leitura por voz
// ============================

function lerPagina() {
  if (!("speechSynthesis" in window)) {
    mostrarMensagem("Seu navegador não suporta leitura por voz (SpeechSynthesis).")
    return
  }

  speechSynthesis.cancel();

  const conteudo = document.getElementById("conteudo");
  const texto = conteudo ? conteudo.innerText : document.body.innerText

  const utterance = new SpeechSynthesisUtterance(texto)
  utterance.lang = "pt-BR"
  speechSynthesis.speak(utterance)
}

document.getElementById("botaoLer").addEventListener("click", lerPagina);

document.getElementById("botaoParar").addEventListener("click", () => {
  if ("speechSynthesis" in window) speechSynthesis.cancel()
})

// ============================
// Extra: ESC fecha painel
// ============================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && painel.classList.contains("aberto")) {
    painel.classList.remove("aberto")
    alternar.setAttribute("aria-expanded", "false")
    alternar.focus();
  }
})

