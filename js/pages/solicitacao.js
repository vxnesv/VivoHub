    document.getElementById('toggleSidebar').addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      const main = document.getElementById('mainContent');
      sidebar.classList.toggle('collapsed');
      main.classList.toggle('expanded');
    });

    
    function openModal() {
      const myModal = new bootstrap.Modal(document.getElementById('solicitacaoModal'));
      myModal.show();
    }

    
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData("text");
      const draggedElement = document.getElementById(data);
      ev.target.closest(".kanban-column").appendChild(draggedElement);
    }
  