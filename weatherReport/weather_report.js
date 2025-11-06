function showweatherDetails(event) {
  event.preventDefault();

  const cityId = document.getElementById('city').value;
  const apiKey = '6454ddac9eaafd14aff728b1a4f11fbb';
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      const firstForecast = data.list[0]; // First 3-hour forecast

      weatherInfo.innerHTML = `<h2>Weather in ${data.city.name}</h2>
                               <p>Temperature: ${firstForecast.main.temp} &#8451;</p>
                               <p>Weather: ${firstForecast.weather[0].description}</p>`;
    })
     .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
   
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

 