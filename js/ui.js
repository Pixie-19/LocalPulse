export function showLoader(show) {
  document.getElementById("loader")
    .classList.toggle("hidden", !show);
}

export function renderWeather(data) {
  const current = data.list[0];
  document.getElementById("currentWeather").innerHTML = `
    <h3>${Math.round(current.main.temp)}°C - ${current.weather[0].main}</h3>
    <p>Humidity: ${current.main.humidity}%</p>
    <p>Wind: ${current.wind.speed} m/s</p>
  `;

  const forecastEl = document.getElementById("forecast");
  forecastEl.innerHTML = "";

  for (let i = 8; i <= 24; i += 8) {
    const day = data.list[i];
    forecastEl.innerHTML += `
      <div>
        <p>${new Date(day.dt_txt).toDateString()}</p>
        <strong>${Math.round(day.main.temp)}°C</strong>
        <p>${day.weather[0].main}</p>
      </div>
    `;
  }
}

export function renderNews(newsData, highlight) {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  if (!newsData.articles.length) {
    container.innerHTML = "<p>No local news found.</p>";
    return;
  }

  newsData.articles.forEach(article => {
    const card = document.createElement("div");
    card.className = `news-card ${highlight ? "extreme" : ""}`;
    card.innerHTML = `
      <a href="${article.url}" target="_blank">${article.title}</a>
      <p>${article.description || ""}</p>
      <small>${article.source.name}</small>
    `;
    container.appendChild(card);
  });
}
