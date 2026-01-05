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
LOCALPULSE/
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
```
## Getting Started

### Prerequisites

1.  **API Keys:** You need to obtain free API keys from:
    *   [OpenWeatherMap](https://openweathermap.org/api)
    *   [NewsAPI](https://newsapi.org/)
2.  **Local Server:** Since this project uses ES6 Modules (`import`/`export`), you cannot simply double-click `index.html`. You must serve it via a local server (e.g., VS Code "Live Server" extension).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/localpulse.git
    cd localpulse
    ```

2. **Configure API Keys**

   The `js/config.js` file handles your API credentials.

   - Create a file named `config.js` inside the `js/` folder.
   - Paste the following code and replace the placeholders with your API keys:

   ```js
   export const WEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY_HERE";
   export const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

   export const NEWS_API_KEY = "YOUR_NEWSAPI_KEY_HERE";
   export const NEWS_BASE_URL = "https://newsapi.org/v2/everything";


3.  **Run the App**
    *   **VS Code:** Right-click `index.html` and select **"Open with Live Server"**.
      
## Security Note

**Do not commit your real API keys to GitHub.**
The project is set up with a `.gitignore` file that excludes `js/config.js`. Ensure this remains in place if you fork or contribute.
```text
# .gitignore
js/config.js
```
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
