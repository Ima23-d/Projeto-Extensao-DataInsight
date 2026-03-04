// =============================
//     Modificar tema
// =============================

document.addEventListener("DOMContentLoaded", function () {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
    }
});

function alternarTema() {
    document.body.classList.toggle("tema-escuro");
    const temaAtivo = document.body.classList.contains("tema-escuro");
    localStorage.setItem("tema", temaAtivo ? "escuro" : "claro");
}


