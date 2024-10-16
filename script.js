window.onload = function() {
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');

    const incomeExpenseChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [5000, 4000, 3000, 7000, 9000, 8000, 6000, 5000, 4000, 3000, 5000, 4000],
                    backgroundColor: '#16a34a',
                    borderRadius: 10,
                    barPercentage: 0.5,
                },
                {
                    label: 'Expense',
                    data: [3000, 2000, 1000, 5000, 3000, 4000, 3000, 2000, 3000, 2000, 1000, 5000],
                    backgroundColor: '#e11d48',
                    borderRadius: 10,
                    barPercentage: 0.5,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
