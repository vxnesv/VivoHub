document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  if (!calendarEl) {
    console.error('Elemento #calendar não encontrado');
    return;
  }

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'prev,next today'
    },
    events: [
      {
        title: 'Reunião com o time',
        start: '2025-09-20T10:00:00',
        end: '2025-09-20T11:00:00'
      },
      {
        title: 'Onboarding João',
        start: '2025-09-22'
      }
    ]
  });

  calendar.render();
});