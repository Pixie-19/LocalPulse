import { getWeather, isExtremeWeather } from "./weather.js";
import { getNews } from "./news.js";
import { renderWeather, renderNews, showLoader } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const citySummary = document.getElementById("citySummary");
const contentGrid = document.getElementById("contentGrid");

// Trigger for the layout animation
function activateSearchMode() {
  document.body.classList.add("search-active");
  document.getElementById("mainContent").classList.remove("hidden");
}

async function handleSearch() {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name.");

  // 1. Switch UI Layout
  activateSearchMode();
  
  // 2. Show Loader, Hide Old Content
  contentGrid.classList.add("hidden");
  showLoader(true);
  
  // 3. Update Text
  citySummary.textContent = `Searching...`;

  try {
    // 4. Fetch Data
    const weatherData = await getWeather(city);
    
    if (weatherData.cod !== "200") {
      throw new Error(weatherData.message || "City not found");
    }

    const extreme = isExtremeWeather(weatherData);
    const newsData = await getNews(city);

    // 5. Render
    renderWeather(weatherData);
    renderNews(newsData, extreme);

    // 6. Show Content
    contentGrid.classList.remove("hidden");
    citySummary.textContent = `Current Pulse: ${weatherData.city.name}, ${weatherData.city.country}`;
    
  } catch (err) {
    console.error(err);
    alert(err.message);
    citySummary.textContent = "Discover the heartbeat of your city";
  } finally {
    showLoader(false);
  }
}

searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});