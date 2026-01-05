
import { getWeather, isExtremeWeather } from "./weather.js";
import { getNews } from "./news.js";
import { renderWeather, renderNews, showLoader } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const citySummary = document.getElementById("citySummary");
const contentGrid = document.getElementById("contentGrid");
const homeBtn = document.getElementById("homeBtn");
const mainContent = document.getElementById("mainContent");

const DEFAULT_TAGLINE = "Discover the heartbeat of your city";

// Trigger for the layout animation
function activateSearchMode() {
  document.body.classList.add("search-active");
  mainContent.classList.remove("hidden");
  // Remove active state from Home button when searching
  homeBtn.classList.remove("active");
}

function resetToHome(e) {
  if(e) e.preventDefault();
  
  // Reset Layout
  document.body.classList.remove("search-active");
  mainContent.classList.add("hidden");
  contentGrid.classList.add("hidden");
  
  // Set Home button back to active
  homeBtn.classList.add("active");
  
  // Clear Data
  cityInput.value = "";
  citySummary.textContent = DEFAULT_TAGLINE;
  
  // Reset focus
  cityInput.blur();
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
    citySummary.textContent = DEFAULT_TAGLINE;
  } finally {
    showLoader(false);
  }
}

searchBtn.addEventListener("click", handleSearch);
homeBtn.addEventListener("click", resetToHome);
document.querySelector('.logo').addEventListener('click', resetToHome);

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});