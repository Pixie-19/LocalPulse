import { getWeather, isExtremeWeather } from "./weather.js";
import { getNews } from "./news.js";
import { renderWeather, renderNews, showLoader } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const citySummary = document.getElementById("citySummary");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Enter a city name");

  showLoader(true);

  try {
    const weatherData = await getWeather(city);
    renderWeather(weatherData);

    const extreme = isExtremeWeather(weatherData);
    const newsData = await getNews(city);
    renderNews(newsData, extreme);

    citySummary.textContent = `Today in ${city}`;
  } catch (err) {
    alert("Failed to load data");
    console.error(err);
  } finally {
    showLoader(false);
  }
});
