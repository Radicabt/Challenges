class WeatherData {
  constructor(city, temperature, humidity, windSpeed, forecast) {
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.forecast = {};

    for (let day in forecast) {
      this.forecast[day] = forecast[day];
    }
  }

  static fetchWeather(city) {
    const weather = WeatherData.data.find(
      (w) => w.city.toLowerCase() === city.toLowerCase()
    );
    if (weather) {
      this.displayCurrentWeather(weather);
      this.saveRecentSearch(city);
      this.displayRecentSearches();
    } else {
      const weatherContainer = document.getElementById("weather-container");
      weatherContainer.innerHTML = `<p>Weather data not found for city: ${city}</p>`;
      console.log("Weather data not found for city:", city);
    }
  }

  static displayCurrentWeather(data) {
    const weatherContainer = document.getElementById("weather-container");
    if (weatherContainer) {
      weatherContainer.innerHTML = `
        <h2>Weather in ${data.city}</h2>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.windSpeed} km/h</p>
      `;
    }
  }

  static fetchForecast(city) {
    const weather = WeatherData.data.find(
      (w) => w.city.toLowerCase() === city.toLowerCase()
    );
    if (weather) {
      this.displayForecast(weather);
    } else {
      const forecastContainer = document.getElementById("forecast-container");
      forecastContainer.innerHTML = `<p>Weather forecast not found for city: ${city}</p>`;
      console.log("Weather forecast not found for city:", city);
    }
  }

  static displayForecast(data) {
    const forecastContainer = document.getElementById("forecast-container");
    if (forecastContainer) {
      let forecastHtml = `<h2>5-Day Forecast for ${data.city}</h2>`;
      for (let day in data.forecast) {
        forecastHtml += `
          <div>
            <h3>${day}</h3>
            <p>Temperature: ${data.forecast[day].temperature}°C</p>
            <p>Humidity: ${data.forecast[day].humidity}%</p>
            <p>Wind Speed: ${data.forecast[day].windSpeed} km/h</p>
          </div>
        `;
      }
      forecastContainer.innerHTML = forecastHtml;
    } else {
      console.log("Forecast container not found in the DOM.");
    }
  }

  static saveRecentSearch(city) {
    let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!searches.includes(city)) {
      searches.push(city);
      if (searches.length > 5) {
        searches.shift();
      }
      localStorage.setItem("recentSearches", JSON.stringify(searches));
    }
  }
  static displayRecentSearches() {
    const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    const recentSearchesContainer = document.getElementById("recent-searches");
    if (recentSearchesContainer) {
      recentSearchesContainer.innerHTML = searches
        .map((city) => `<li class="recent-search">${city}</li>`)
        .join("");
      const recentSearchItems = document.querySelectorAll(".recent-search");
      recentSearchItems.forEach((item) => {
        item.addEventListener("click", () => {
          WeatherData.fetchWeather(item.textContent);
          WeatherData.fetchForecast(item.textContent);
        });
      });
    } else {
      console.log("Recent searches container not found in the DOM.");
    }
  }
}

WeatherData.data = [
  new WeatherData("New York", 16, 70, 7, {
    day1: { temperature: 18, humidity: 68, windSpeed: 6 },
    day2: { temperature: 19, humidity: 65, windSpeed: 7 },
    day3: { temperature: 20, humidity: 60, windSpeed: 8 },
    day4: { temperature: 21, humidity: 70, windSpeed: 7 },
    day5: { temperature: 22, humidity: 75, windSpeed: 6 },
  }),
  new WeatherData("London", 12, 80, 5, {
    day1: { temperature: 11, humidity: 78, windSpeed: 6 },
    day2: { temperature: 12, humidity: 77, windSpeed: 5 },
    day3: { temperature: 13, humidity: 79, windSpeed: 4 },
    day4: { temperature: 14, humidity: 80, windSpeed: 5 },
    day5: { temperature: 15, humidity: 82, windSpeed: 6 },
  }),
  new WeatherData("Tokyo", 22, 60, 4, {
    day1: { temperature: 23, humidity: 59, windSpeed: 5 },
    day2: { temperature: 24, humidity: 58, windSpeed: 4 },
    day3: { temperature: 25, humidity: 57, windSpeed: 5 },
    day4: { temperature: 26, humidity: 56, windSpeed: 6 },
    day5: { temperature: 27, humidity: 55, windSpeed: 7 },
  }),
  new WeatherData("Sydney", 25, 50, 6, {
    day1: { temperature: 26, humidity: 52, windSpeed: 5 },
    day2: { temperature: 27, humidity: 54, windSpeed: 4 },
    day3: { temperature: 28, humidity: 53, windSpeed: 6 },
    day4: { temperature: 29, humidity: 55, windSpeed: 5 },
    day5: { temperature: 30, humidity: 56, windSpeed: 4 },
  }),
  new WeatherData("Paris", 15, 65, 5, {
    day1: { temperature: 14, humidity: 64, windSpeed: 6 },
    day2: { temperature: 15, humidity: 66, windSpeed: 5 },
    day3: { temperature: 16, humidity: 65, windSpeed: 4 },
    day4: { temperature: 17, humidity: 67, windSpeed: 5 },
    day5: { temperature: 18, humidity: 68, windSpeed: 6 },
  }),
  new WeatherData("Berlin", 14, 60, 6, {
    day1: { temperature: 13, humidity: 59, windSpeed: 5 },
    day2: { temperature: 14, humidity: 61, windSpeed: 4 },
    day3: { temperature: 15, humidity: 60, windSpeed: 5 },
    day4: { temperature: 16, humidity: 62, windSpeed: 6 },
    day5: { temperature: 17, humidity: 63, windSpeed: 7 },
  }),
  new WeatherData("Moscow", 5, 75, 10, {
    day1: { temperature: 4, humidity: 74, windSpeed: 9 },
    day2: { temperature: 5, humidity: 76, windSpeed: 8 },
    day3: { temperature: 6, humidity: 75, windSpeed: 9 },
    day4: { temperature: 7, humidity: 77, windSpeed: 10 },
    day5: { temperature: 8, humidity: 78, windSpeed: 9 },
  }),
  new WeatherData("Toronto", 17, 55, 8, {
    day1: { temperature: 16, humidity: 54, windSpeed: 7 },
    day2: { temperature: 17, humidity: 56, windSpeed: 6 },
    day3: { temperature: 18, humidity: 55, windSpeed: 7 },
    day4: { temperature: 19, humidity: 57, windSpeed: 8 },
    day5: { temperature: 20, humidity: 58, windSpeed: 9 },
  }),
  new WeatherData("Rio de Janeiro", 26, 85, 7, {
    day1: { temperature: 25, humidity: 84, windSpeed: 6 },
    day2: { temperature: 26, humidity: 86, windSpeed: 5 },
    day3: { temperature: 27, humidity: 85, windSpeed: 6 },
    day4: { temperature: 28, humidity: 87, windSpeed: 7 },
    day5: { temperature: 29, humidity: 88, windSpeed: 8 },
  }),
  new WeatherData("Beijing", 20, 40, 3, {
    day1: { temperature: 19, humidity: 39, windSpeed: 2 },
    day2: { temperature: 20, humidity: 41, windSpeed: 3 },
    day3: { temperature: 21, humidity: 40, windSpeed: 4 },
    day4: { temperature: 22, humidity: 42, windSpeed: 3 },
    day5: { temperature: 23, humidity: 43, windSpeed: 4 },
  }),
  new WeatherData("Mumbai", 30, 70, 5, {
    day1: { temperature: 29, humidity: 69, windSpeed: 4 },
    day2: { temperature: 30, humidity: 71, windSpeed: 3 },
    day3: { temperature: 31, humidity: 70, windSpeed: 4 },
    day4: { temperature: 32, humidity: 72, windSpeed: 5 },
    day5: { temperature: 33, humidity: 73, windSpeed: 6 },
  }),
  new WeatherData("Los Angeles", 19, 65, 4, {
    day1: { temperature: 18, humidity: 64, windSpeed: 3 },
    day2: { temperature: 19, humidity: 66, windSpeed: 4 },
    day3: { temperature: 20, humidity: 65, windSpeed: 5 },
    day4: { temperature: 21, humidity: 67, windSpeed: 4 },
    day5: { temperature: 22, humidity: 68, windSpeed: 5 },
  }),
  new WeatherData("Cape Town", 18, 60, 6, {
    day1: { temperature: 17, humidity: 59, windSpeed: 5 },
    day2: { temperature: 18, humidity: 61, windSpeed: 4 },
    day3: { temperature: 19, humidity: 60, windSpeed: 5 },
    day4: { temperature: 20, humidity: 62, windSpeed: 6 },
    day5: { temperature: 21, humidity: 63, windSpeed: 7 },
  }),
  new WeatherData("Rome", 21, 55, 3, {
    day1: { temperature: 20, humidity: 54, windSpeed: 2 },
    day2: { temperature: 21, humidity: 56, windSpeed: 3 },
    day3: { temperature: 22, humidity: 55, windSpeed: 4 },
    day4: { temperature: 23, humidity: 57, windSpeed: 3 },
    day5: { temperature: 24, humidity: 58, windSpeed: 4 },
  }),
  new WeatherData("Bangkok", 33, 75, 2, {
    day1: { temperature: 32, humidity: 74, windSpeed: 1 },
    day2: { temperature: 33, humidity: 76, windSpeed: 2 },
    day3: { temperature: 34, humidity: 75, windSpeed: 3 },
    day4: { temperature: 35, humidity: 77, windSpeed: 2 },
    day5: { temperature: 36, humidity: 78, windSpeed: 3 },
  }),
  new WeatherData("Istanbul", 20, 60, 4, {
    day1: { temperature: 19, humidity: 59, windSpeed: 3 },
    day2: { temperature: 20, humidity: 61, windSpeed: 4 },
    day3: { temperature: 21, humidity: 60, windSpeed: 5 },
    day4: { temperature: 22, humidity: 62, windSpeed: 4 },
    day5: { temperature: 23, humidity: 63, windSpeed: 5 },
  }),
  new WeatherData("Lagos", 29, 80, 3, {
    day1: { temperature: 28, humidity: 79, windSpeed: 2 },
    day2: { temperature: 29, humidity: 81, windSpeed: 3 },
    day3: { temperature: 30, humidity: 80, windSpeed: 4 },
    day4: { temperature: 31, humidity: 82, windSpeed: 3 },
    day5: { temperature: 32, humidity: 83, windSpeed: 4 },
  }),
  new WeatherData("Buenos Aires", 23, 70, 5, {
    day1: { temperature: 22, humidity: 69, windSpeed: 4 },
    day2: { temperature: 23, humidity: 71, windSpeed: 3 },
    day3: { temperature: 24, humidity: 70, windSpeed: 4 },
    day4: { temperature: 25, humidity: 72, windSpeed: 5 },
    day5: { temperature: 26, humidity: 73, windSpeed: 6 },
  }),
  new WeatherData("Chicago", 10, 65, 7, {
    day1: { temperature: 9, humidity: 64, windSpeed: 6 },
    day2: { temperature: 10, humidity: 66, windSpeed: 5 },
    day3: { temperature: 11, humidity: 65, windSpeed: 6 },
    day4: { temperature: 12, humidity: 67, windSpeed: 7 },
    day5: { temperature: 13, humidity: 68, windSpeed: 8 },
  }),
  new WeatherData("Shanghai", 19, 80, 6, {
    day1: { temperature: 18, humidity: 79, windSpeed: 5 },
    day2: { temperature: 19, humidity: 81, windSpeed: 6 },
    day3: { temperature: 20, humidity: 80, windSpeed: 7 },
    day4: { temperature: 21, humidity: 82, windSpeed: 6 },
    day5: { temperature: 22, humidity: 83, windSpeed: 7 },
  }),
];

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const cityInput = document.getElementById("city-input");

  searchButton.addEventListener("click", executeSearch);

  cityInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      executeSearch();
    }
  });

  function executeSearch() {
    const city = cityInput.value;
    if (city) {
      WeatherData.fetchWeather(city);
      WeatherData.fetchForecast(city);
    }
  }

  WeatherData.displayRecentSearches();
});
