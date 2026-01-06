# LocalPulse

**Discover the heartbeat of your city.**

LocalPulse is a modern, lightweight single-page application (SPA) that aggregates real-time weather data and trending local news into a unified, beautiful interface. Built with Vanilla JavaScript, it demonstrates efficient API integration, modular code architecture, and responsive UI design.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Screenshots

![Landing Page](assets/home.png)
![Weather & News Dashboard](assets/dashboard.png)

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
- **Tools:** Vite

## Project Structure

Based on the current file organization:

```text
LOCALPULSE/
├── css/
│   ├── main.css          # Core styling, variables, layout, and animations
│   └── responsive.css    # Media queries for mobile/tablet adaptation
├── js/
│   ├── app.js            # Main entry point, event listeners, and navigation logic
│   ├── news.js           # NewsAPI fetch logic
│   ├── ui.js             # DOM manipulation and rendering functions
│   ├── weather.js        # OpenWeatherMap fetch logic and data processing
├── .gitignore            # Files to exclude from Git (e.g., .env, node_modules)
├── index.html            # Main HTML structure
├── LICENSE               # Project License details
└── README.md             # Project documentation
```
## Getting Started

### Prerequisites

1.  **API Keys:** You need to obtain free API keys from:
    *   [OpenWeatherMap](https://openweathermap.org/api)
    *   [NewsAPI](https://newsapi.org/)
2.  **Runtime:** This project uses Vite so the frontend can read `.env` values via `import.meta.env`.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/localpulse.git
    cd localpulse
    ```

2. **Configure API Keys (.env)**

    Create a `.env` file in the project root and add the following:

```env
# OpenWeatherMap API
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/forecast

# News API
VITE_NEWS_API_KEY=YOUR_NEWSAPI_KEY
VITE_NEWS_BASE_URL=https://newsapi.org/v2/everything
```

3. **Install & Run**

    ```bash
    npm install
    npm run dev
    ```
      
## Security Note

**Do not commit your real API keys to GitHub.**
The project is set up to ignore `.env` via `.gitignore`. Ensure this remains in place if you fork or contribute.
## Usage

*   **Landing Page:** You are greeted with a clean search interface and a cityscape illustration.
*   **Search:** Enter a city name (e.g., "Kolkata", "New Delhi") and hit **Enter** or click **Search**.
*   **Results:** The UI transitions. The cityscape fades out, and cards for Weather and News slide in.
*   **Navigation:** Click "Home" (or the logo) to reset the view. Click "Services" or "About" to view the modal overlays.

## Contributing

Contributions are welcome! Here's how you can help:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">Built with Love by Rishita</p>
