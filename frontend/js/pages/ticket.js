const form = document.getElementById('formSolicitacao');
  const tabela = document.getElementById('tabelaSolicitacoes');

  function calcularPrazo(diasUteis = 3) {
    const data = new Date();
    let adicionados = 0;

    while (adicionados < diasUteis) {
      data.setDate(data.getDate() + 1);
      const diaSemana = data.getDay();
      if (diaSemana !== 0 && diaSemana !== 6) { // 0 = Domingo, 6 = Sábado
        adicionados++;
      }
    }

    return data.toISOString().split('T')[0]; // retorna como YYYY-MM-DD
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const tipo = document.getElementById('tipoSolicitacao').value;
    const desc = document.getElementById('descricaoSolicitacao').value;
    const prazo = calcularPrazo(3); // exemplo: 3 dias úteis

    const idChamado = Math.floor(Math.random() * 10000);
    const novaLinha = `
      <tr>
        <td><span class="badge bg-warning text-dark">Pendente</span></td>
        <td>#${idChamado}</td>
        <td>${tipo} - ${desc}</td>
        <td>${prazo}</td>
      </tr>
    `;

    tabela.innerHTML += novaLinha;

    // Fechar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalNovaSolicitacao'));
    modal.hide();

    // Limpar form
    form.reset();
  });