function updateChart() {
fetch('data.php')
    .then(response => response.json())
    .then(data => {
        const temperatureData = {
            labels: data.dates,
            datasets: [
                {
                    label: 'Temperature',
                    data: data.temperatures,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        };

        const humidityData = {
            labels: data.dates,
            datasets: [
                {
                    label: 'Humidity',
                    data: data.humidities,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        };

        const soilMoistureData = {
            labels: data.dates,
            datasets: [
                {
                    label: 'Soil Moisture',
                    data: data.soilMoistures,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }
            ]
        };

        const temperatureChart = new Chart(
            document.getElementById('temperatureChart').getContext('2d'),
            {
                type: 'line',
                data: temperatureData,
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            }
        );

        const humidityChart = new Chart(
            document.getElementById('humidityChart').getContext('2d'),
            {
                type: 'line',
                data: humidityData,
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            }
        );

        const soilMoistureChart = new Chart(
            document.getElementById('soilMoistureChart').getContext('2d'),
            {
                type: 'line',
                data: soilMoistureData,
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            }
        );
    })
    .catch(error => console.error(error));

    fetch('data.php')
  .then(response => response.json())
  .then(data => {
    const temperature = data.temperatures[data.temperatures.length - 1];
    document.getElementById('temperature-value').innerText = temperature + '°C';

    const humidity = data.humidities[data.humidities.length - 1];
    document.getElementById('humidity-value').innerText = humidity + '%';

    const soilMoisture = data.soilMoistures[data.soilMoistures.length - 1];
    document.getElementById('soil-moisture-value').innerText = soilMoisture + '%';
  })
  .catch(error => console.error(error));
}

// Call the updateChart function every x seconds
setInterval(updateChart, 2000);