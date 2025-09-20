const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      content.classList.toggle('full');
    });

const params = new URLSearchParams(window.location.search);
    const colaborador = params.get("colaborador");
    if (colaborador) {
      document.getElementById("tituloColaborador").innerText =
        "Desempenho de " + colaborador.charAt(0).toUpperCase() + colaborador.slice(1);
    }

    // Gráfico de tempo de tela
    new Chart(document.getElementById("graficoTempo"), {
      type: "line",
      data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
        datasets: [{
          label: "Horas de Acesso",
          data: [2, 3.5, 1.5, 4, 2.5],
          borderColor: "blue",
          backgroundColor: "rgba(0, 123, 255, 0.3)",
          fill: true
        }]
      }
    });

    // Gráfico de progresso por curso
    new Chart(document.getElementById("graficoCursos"), {
      type: "bar",
      data: {
        labels: ["Integração", "Segurança", "Políticas"],
        datasets: [{
          label: "Progresso (%)",
          data: [100, 60, 40],
          backgroundColor: ["green", "orange", "red"]
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });

    document.getElementById("btnExportar").addEventListener("click", function () {
    const table = document.querySelector("table"); // pega a tabela de cursos
    let csv = [];

    // Pega cabeçalho
    const headers = [...table.querySelectorAll("thead th")].map(th => th.innerText.trim());
    csv.push(headers.join(";")); // separador ";"

    // Pega linhas
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
      const cols = [...row.querySelectorAll("td")].map(td => td.innerText.trim());
      csv.push(cols.join(";"));
    });

    // Cria blob e baixa arquivo
    const csvString = csv.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "desempenho.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });