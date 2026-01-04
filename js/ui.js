
export function showLoader(show) {
  const loader = document.getElementById("loader");
  const main = document.getElementById("mainContent");
  
  if (show) {
    loader.classList.remove("hidden");
    main.classList.add("hidden");
  } else {
    loader.classList.add("hidden");
    main.classList.remove("hidden");
  }
}

export function renderWeather(data) {
  if (!data || !data.list) return;

  const current = data.list[0];
  const iconUrl = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  
  // Render Current Weather
  document.getElementById("currentWeather").innerHTML = `
    <div>
      <h3 class="cw-temp">${Math.round(current.main.temp)}°C</h3>
      <div style="display:flex; align-items:center;">
        <img src="${iconUrl}" alt="${current.weather[0].description}">
        <span style="text-transform: capitalize;">${current.weather[0].description}</span>
      </div>
    </div>
    <div class="cw-details">
      <p><strong>Humidity:</strong> ${current.main.humidity}%</p>
      <p><strong>Wind:</strong> ${current.wind.speed} m/s</p>
      <p><strong>Feels Like:</strong> ${Math.round(current.main.feels_like)}°C</p>
    </div>
  `;

  // Render Forecast (Next 24h, roughly every 3-6 hours depending on API logic)
  const forecastEl = document.getElementById("forecast");
  forecastEl.innerHTML = "";

  // Taking slices to get approx next days or intervals
  // OpenWeatherMap forecast is every 3 hours. index 8 is +24h
  for (let i = 8; i < data.list.length; i += 8) {
    const day = data.list[i];
    const dayIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
    const dateObj = new Date(day.dt_txt);
    
    forecastEl.innerHTML += `
      <div class="forecast-item">
        <small>${dateObj.toLocaleDateString('en-US', { weekday: 'short' })}</small>
        <img src="${dayIcon}" alt="icon">
        <strong>${Math.round(day.main.temp)}°</strong>
      </div>
    `;
  }
}

export function renderNews(newsData, isExtreme) {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  if (!newsData.articles || !newsData.articles.length) {
    container.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>No local news found for this location.</p>";
    return;
  }

  // Limit to 6 items and filter out removed content
  const validArticles = newsData.articles
    .filter(a => a.title !== "[Removed]")
    .slice(0, 8);

  validArticles.forEach(article => {
    const card = document.createElement("div");
    card.className = `news-item ${isExtreme ? "extreme-weather-alert" : ""}`;
    
    // Fallback image
    const imageSrc = article.urlToImage 
      ? article.urlToImage 
      : 'https://placehold.co/600x400/e2e8f0/6b7280?text=No+Image';

    card.innerHTML = `
      <img src="${imageSrc}" alt="News Image" loading="lazy">
      <div class="news-content">
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || "Click to read full story..."}</p>
        <div class="news-source">${article.source.name}</div>
      </div>
    `;
    container.appendChild(card);
  });
}