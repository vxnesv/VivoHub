document.addEventListener('DOMContentLoaded', () => {
  console.log("Global JS carregado");

  // Fechar dropdown de notificações ao clicar fora
  document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      dropdownMenu.classList.remove('show');
    }
  });

  // Toggle sidebar (se usar menu sanduíche)
  const toggleBtn = document.getElementById('menu-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('collapsed');
      document.querySelector('.content').classList.toggle('expanded');
    });
  }
});

