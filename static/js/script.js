// =============================
//     Modificar tema
// =============================

document.addEventListener("DOMContentLoaded", function () {
    const temaSalvo = localStorage.getItem("tema")

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro")
    }
});

function alternarTema() {
    document.body.classList.toggle("tema-escuro")
    const temaAtivo = document.body.classList.contains("tema-escuro")
    localStorage.setItem("tema", temaAtivo ? "escuro" : "claro")
}

// =============================
//     Grafico de barras 1
// =============================

const canvas = document.getElementById("grafico");

const grafico = new Chart(canvas, {
    type: "bar",

    data: {
        labels: ["Set", "Out", "Nov", "Dez", "Jan", "Fev"],

        datasets: [
            {
                label: "Valores",
                data: [8, 10, 14, 12, 16, 15],
                backgroundColor: "#3B82F6"
            },
            {
                label: "Tendência",
                data: [8, 9, 11, 11, 14, 15],
                type: "line",
                borderColor: "red",
                backgroundColor: "red",
                tension: 0.4
            }
        ]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                labels: {
                    color: "grey",
                    font: {
                        weight: "bold"
                    }
                }
            }
        },

        scales: {
            x: {
                ticks: {
                    color: "grey",
                    font: {
                        weight: "bold"
                    }
                }
            },

            y: {
                ticks: {
                    color: "grey",
                    font: {
                        weight: "bold"
                    }
                }
            }
        }
    }
});

// =============================
//     Grafico de barras 2
// =============================

const ctx = document.getElementById("graficoResumo");

new Chart(ctx, {
    type: "bar",

    data: {
        labels: ["Média", "Mediana", "Moda", "Desvio Padrão"],

        datasets: [{
            label: "Medidas Estatísticas",
            data: [12.5, 10, 8, 3.2],
            backgroundColor: [
                "#3B82F6",
                "#10B981",
                "#F59E0B",
                "#EF4444"
            ],
            
        }]
    },

    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: "grey",
                    font: {
                        weight: "bold"
                    }
                }
            },

            y: {
                ticks: {
                    color: "grey",
                    font: {
                        weight: "bold"
                    }
                }
            }
        }
    }
});
