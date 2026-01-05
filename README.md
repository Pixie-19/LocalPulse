# LocalPulse

**Discover the heartbeat of your city.**

LocalPulse is a modern, lightweight single-page application (SPA) that aggregates real-time weather data and trending local news into a unified, beautiful interface. Built with Vanilla JavaScript, it demonstrates efficient API integration, modular code architecture, and responsive UI design.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- **Smart Search:** Instantly find data for any city globally.
- **Current Weather:** Real-time temperature, humidity, wind speed, and condition icons.
- **5-Day Forecast:** Scrollable outlook for the upcoming week.
- **newspaper Local News:** Curated top headlines relevant to the searched location.
- **Modern UI:** Glassmorphism effects, smooth CSS transitions, and a "landing page" to "dashboard" layout shift.
- **Fully Responsive:** Optimized for desktops, tablets, and mobile devices.
- **Interactive Modals:** Built-in modal system for navigation links (About, Services, etc.).

## Tech Stack

- **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, Grid)
- **Logic:** Vanilla JavaScript (ES6 Modules)
- **Data Sources:** 
  - [OpenWeatherMap API](https://openweathermap.org/api) (Weather & Forecast)
  - [NewsAPI](https://newsapi.org/) (Local News Aggregation)
- **Tools:** VS Code, Live Server

## Project Structure

Based on the current file organization:

```text
LOCA/
├── css/
│   ├── main.css          # Core styling, variables, layout, and animations
│   └── responsive.css    # Media queries for mobile/tablet adaptation
├── js/
│   ├── app.js            # Main entry point, event listeners, and navigation logic
│   ├── config.js         # API Keys and Base URLs (See Configuration)
│   ├── news.js           # NewsAPI fetch logic
│   ├── ui.js             # DOM manipulation and rendering functions
│   ├── weather.js        # OpenWeatherMap fetch logic and data processing
├── .gitignore            # Files to exclude from Git (e.g., config.js, node_modules)
├── index.html            # Main HTML structure
├── LICENSE               # Project License details
└── README.md             # Project documentation

