function enviarMensagem() {
      const input = document.getElementById('mensagemInput');
      const texto = input.value.trim();
      if (texto === '') return;

      const msg = `
        <div class="mb-3 text-end">
          <div><strong>Você:</strong></div>
          <div>${texto}</div>
        </div>
      `;

      document.getElementById('chatMensagens').innerHTML += msg;
      input.value = '';
      document.getElementById('chatMensagens').scrollTop = document.getElementById('chatMensagens').scrollHeight;
    }