
import { getWeather, isExtremeWeather } from "./weather.js";
import { getNews } from "./news.js";
import { renderWeather, renderNews, showLoader } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const homeBtn = document.getElementById("homeBtn");
const mainContent = document.getElementById("mainContent");
const contentGrid = document.getElementById("contentGrid");

function activateSearchMode() {
  document.body.classList.add("search-active");
  mainContent.classList.remove("hidden");
}

function resetToHome(e) {
  if(e) e.preventDefault();
  
  // Reset Layout
  document.body.classList.remove("search-active");
  mainContent.classList.add("hidden");
  contentGrid.classList.add("hidden");
  
  // Clear Data
  cityInput.value = "";
  cityInput.blur();
}

async function handleSearch() {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name.");

  activateSearchMode();
  contentGrid.classList.add("hidden");
  showLoader(true);

  try {
    const weatherData = await getWeather(city);
    
    if (weatherData.cod !== "200") {
      throw new Error(weatherData.message || "City not found");
    }

    const extreme = isExtremeWeather(weatherData);
    const newsData = await getNews(city);

    renderWeather(weatherData);
    renderNews(newsData, extreme);

    contentGrid.classList.remove("hidden");
    
  } catch (err) {
    console.error(err);
    alert(err.message);
    // Optional: Reset if error so they can try again from home state
    // resetToHome();
  } finally {
    showLoader(false);
  }
}

searchBtn.addEventListener("click", handleSearch);
homeBtn.addEventListener("click", resetToHome);

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});