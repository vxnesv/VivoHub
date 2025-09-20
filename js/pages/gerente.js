    function abrirEmail(email) {
      document.getElementById('emailPara').value = email;
      const modal = new bootstrap.Modal(document.getElementById('modalEmail'));
      modal.show();
    }

    