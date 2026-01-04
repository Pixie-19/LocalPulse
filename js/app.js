

import { getWeather, isExtremeWeather } from "./weather.js";
import { getNews } from "./news.js";
import { renderWeather, renderNews, showLoader } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const citySummary = document.getElementById("citySummary");

// Initially hide main content until search
document.getElementById("mainContent").classList.add("hidden");

async function handleSearch() {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name.");

  showLoader(true);
  citySummary.textContent = `Searching for "${city}"...`;

  try {
    const weatherData = await getWeather(city);
    
    // Check if weather data is valid
    if(weatherData.cod !== "200") {
        throw new Error(weatherData.message || "City not found");
    }

    renderWeather(weatherData);

    const extreme = isExtremeWeather(weatherData);
    
    // Pass 'extreme' context to news search (optional keywords) or UI styling
    const newsData = await getNews(city);
    renderNews(newsData, extreme);

    citySummary.textContent = `Latest updates for ${weatherData.city.name}, ${weatherData.city.country}`;
  } catch (err) {
    alert(`Error: ${err.message}`);
    console.error(err);
    citySummary.textContent = "Something went wrong. Try again.";
  } finally {
    showLoader(false);
  }
}

searchBtn.addEventListener("click", handleSearch);

// Allow pressing Enter key
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});