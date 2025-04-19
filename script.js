window.onload = function () {
  const ctx = document.getElementById('deviceChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], // All 30 dates
      datasets: [{
        label: 'Devices', // Label set to 'Active'
        data: [1, 5, 10, 15, 20, 25, 22, 18, 15, 12, 10, 8, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], // Data up to 13, null thereafter
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.9,
        fill: true,
        pointRadius: 3, // Show a dot for each date
        pointBackgroundColor: 'rgb(34, 197, 94)', // Color of the dots
        pointBorderColor: 'rgb(34, 197, 94)', // Border color of the dots
        showLine: true // Ensure the line is drawn where data exists
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for tooltip
          titleColor: 'white', // White text for title
          bodyColor: 'white', // White text for body
          displayColors: false, // Remove the green square next to "Active"
          callbacks: {
            title: function(tooltipItems) {
              // Format the date as "Date: X"
              return `Date: ${tooltipItems[0].label}`;
            },
            label: function(tooltipItem) {
              // Show "Active: X" only if data exists
              return tooltipItem.raw !== null ? `Devices: ${tooltipItem.raw}` : '';
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: 'white' },
          grid: { color: '#374151' }
        },
        y: {
          ticks: { color: 'white' },
          grid: { color: '#374151' }
        }
      }
    }
  });
};
