const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      content.classList.toggle('full');
    });
function carregarMensagens(nome) {
  chatHeader.textContent = nome;
  chatMensagens.innerHTML = ''; // limpa mensagens

  const msgs = mensagens[nome] || [];
  msgs.forEach(m => {
    const div = document.createElement('div');
    div.className = 'chat-mensagem ' + (m.de === 'Você' ? 'voce' : 'outra');
    div.innerHTML = `<strong>${m.de}:</strong><br>${m.texto}`;
    chatMensagens.prepend(div); // prepend porque column-reverse
  });

  chatMensagens.scrollTop = 0; // mantém scroll no fim
}
function enviarMensagem() {
  const input = document.getElementById('mensagemInput');
  const texto = input.value.trim();
  if (!texto) return;

  const div = document.createElement('div');
  div.className = 'mb-3 text-end';
  div.innerHTML = `<div><strong>Você:</strong></div><div>${texto}</div>`;

  // adiciona a mensagem **no topo** do container (porque column-reverse)
  chatMensagens.prepend(div);

  // limpa input
  input.value = '';

  // opcional: mantém scroll no final
  chatMensagens.scrollTop = 0;
}

    const chatLista = document.querySelectorAll('.chat-item');
const chatHeader = document.querySelector('.chat-header h6');
const chatMensagens = document.getElementById('chatMensagens');

// Simulando dados de mensagens de cada contato
const mensagens = {
  'João Silva': [
    { de: 'VocÊ', texto: 'Precisa abrir um chamado na página de solicitações' },
    { de: 'Joao', texto: 'Boa Tarde, solicito o acesso ao sistena.' }
  ],
  'Maria Oliveira': [
    { de: 'Maria', texto: 'Enviei os documentos hoje.' },
    { de: 'Você', texto: 'Recebi! Obrigado.' }
  ]
};

// Função para carregar mensagens
function carregarMensagens(nome) {
  chatHeader.textContent = nome;
  chatMensagens.innerHTML = ''; // limpa mensagens

  const msgs = mensagens[nome] || [];
  msgs.forEach(m => {
    const div = document.createElement('div');
    div.className = 'mb-3 ' + (m.de === 'Você' ? 'text-end' : '');
    div.innerHTML = `<div><strong>${m.de}:</strong></div><div>${m.texto}</div>`;
    chatMensagens.appendChild(div);
  });

  // scroll pro final
  chatMensagens.scrollTop = chatMensagens.scrollHeight;
}

// Evento clique nos chats
chatLista.forEach(item => {
  item.addEventListener('click', () => {
    const nome = item.querySelector('strong').textContent;
    carregarMensagens(nome);
  });
});

function enviarMensagem() {
  const input = document.getElementById('mensagemInput');
  const texto = input.value.trim();
  if (!texto) return;

  // adiciona mensagem
  const div = document.createElement('div');
  div.className = 'mb-3 text-end';
  div.innerHTML = `<div><strong>Você:</strong></div><div>${texto}</div>`;
  chatMensagens.appendChild(div);

  // scroll pro final
  chatMensagens.scrollTop = chatMensagens.scrollHeight;

  // limpa input
  input.value = '';
}