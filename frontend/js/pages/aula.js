
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
});