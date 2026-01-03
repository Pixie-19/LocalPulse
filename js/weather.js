import { WEATHER_API_KEY, WEATHER_BASE_URL } from "./config.js";

export async function getWeather(city) {
  const url = `${WEATHER_BASE_URL}?q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

export function isExtremeWeather(weatherData) {
  const condition = weatherData.list[0].weather[0].main.toLowerCase();
  return ["rain", "storm", "snow", "heat"].some(w =>
    condition.includes(w)
  );
}
