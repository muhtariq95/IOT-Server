window.onload = function () {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [50000, 87000, 62000, 91000, 76000, 88000],
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.2)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false } // Hides the legend entirely
        },
        scales: {
          x: { ticks: { color: 'white' }, grid: { color: '#374151' } },
          y: { ticks: { color: 'white' }, grid: { color: '#374151' } }
        }
      }
    });
}
