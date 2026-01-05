import { getWeather, isExtremeWeather } from "./weather.js";
import { getNews } from "./news.js";
import { renderWeather, renderNews, showLoader } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const homeBtn = document.getElementById("homeBtn");
const mainContent = document.getElementById("mainContent");
const contentGrid = document.getElementById("contentGrid");

// Modal Elements
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalElements = document.querySelectorAll(".modal-close, .btn-modal-action");

// Modal Content Data
const MODAL_CONTENT = {
  services: {
    title: "Our Services",
    body: "LocalPulse aggregates real-time data from OpenWeatherMap and NewsAPI to provide you with an instant snapshot of any city. We offer weather forecasting and localized news feeds in a unified, clutter-free interface."
  },
  about: {
    title: "About LocalPulse",
    body: "LocalPulse is a modern single-page application designed to demonstrate efficient API integration and responsive UI design. Built with vanilla JavaScript and modern CSS, it focuses on performance and user experience."
  },
  features: {
    title: "Key Features",
    body: `
      <ul style="padding-left: 1.2rem;">
        <li><strong>Live Weather:</strong> Instant temperature, humidity, and wind updates.</li>
        <li><strong>5-Day Forecast:</strong> Plan ahead with future weather trends.</li>
        <li><strong>Local News:</strong> Curated headlines relevant to the searched city.</li>
        <li><strong>Responsive:</strong> Optimized for Desktop, Tablet, and Mobile.</li>
      </ul>
    `
  },
  signup: {
    title: "Join Us",
    body: "User registration is currently in beta. Please check back later or subscribe to our newsletter for updates!"
  },
  news_empty: {
    title: "Search Required",
    body: "Please search for a city first to view trending local news."
  }
};

/* Navigation Logic */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const type = link.getAttribute("data-link");
    handleNavClick(type);
  });
});

document.getElementById("signupBtn").addEventListener("click", (e) => {
  e.preventDefault();
  openModal("signup");
});

function handleNavClick(type) {
  if (type === "news") {
    // Special logic for News: Scroll if active, else alert
    if (document.body.classList.contains("search-active")) {
      document.getElementById("newsSection").scrollIntoView({ behavior: "smooth" });
    } else {
      openModal("news_empty");
    }
  } else if (MODAL_CONTENT[type]) {
    openModal(type);
  }
}

/* Modal Logic */

function openModal(key) {
  const content = MODAL_CONTENT[key];
  if (!content) return;

  modalTitle.innerHTML = content.title;
  modalBody.innerHTML = content.body;
  
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

// Close listeners
closeModalElements.forEach(el => el.addEventListener("click", closeModal));
// Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});


/* Core App Logic */

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
  } finally {
    showLoader(false);
  }
}

searchBtn.addEventListener("click", handleSearch);
homeBtn.addEventListener("click", resetToHome);

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});