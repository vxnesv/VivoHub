
  const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      content.classList.toggle('full');
    });

  const buttons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.tab-content-section');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(button.dataset.target).classList.add('active');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
  const rings = document.querySelectorAll('.progress-ring-container');

  rings.forEach(ring => {
    const circle = ring.querySelector('.progress-ring-fill');
    const percent = parseFloat(ring.dataset.progress || 0);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    const label = ring.querySelector('.progress-text');
    if (label) label.textContent = `${percent}%`;
  });


  const playlistData = [
  { title: 'Introdução', videoId: 'PkZNo7MFNFg' },
  { title: 'Variáveis e Tipos', videoId: 'upc9dhEfsK0' },
  { title: 'Funções', videoId: '1y7Uyf2-CnA' },
  { title: 'Objetos', videoId: '2XyZK3mBz_U' },
  { title: 'DOM e Eventos', videoId: '3lJkWvT6b5E' },
];

const playlistContainer = document.getElementById('playlist');
const videoFrame = document.querySelector('.video-container iframe');

// Função para renderizar a playlist
function renderPlaylist() {
  playlistContainer.innerHTML = '';
  playlistData.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'playlist-item';
    if (index === 0) li.classList.add('active'); // Primeiro vídeo ativo por padrão
    li.setAttribute('data-video', item.videoId);
    li.innerHTML = `<i class="bi bi-play-circle me-1"></i> ${item.title}`;
    
    li.addEventListener('click', () => {
      document.querySelectorAll('.playlist-item').forEach(i => i.classList.remove('active'));
      li.classList.add('active');
      videoFrame.src = `https://www.youtube.com/embed/${item.videoId}`;
    });

    playlistContainer.appendChild(li);
  });

  // Carregar o primeiro vídeo inicialmente
  videoFrame.src = `https://www.youtube.com/embed/${playlistData[0].videoId}`;
}

// Inicializa
renderPlaylist();

});

