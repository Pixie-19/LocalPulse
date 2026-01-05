import { WEATHER_API_KEY, WEATHER_BASE_URL } from "./config.js";

export async function getWeather(city) {
  // Using the forecast endpoint
  const url = `${WEATHER_BASE_URL}?q=${city}&units=metric&cnt=40&appid=${WEATHER_API_KEY}`;
  
  const res = await fetch(url);
  // Note: OpenWeatherMap returns 404 in the JSON body sometimes even if fetch is 'ok' on some endpoints, 
  // but standard fetch check is good practice.
  if (!res.ok) {
     const errorDetails = await res.json();
     throw new Error(errorDetails.message || "Weather fetch failed");
  }
  return res.json();
}

export function isExtremeWeather(weatherData) {
  if (!weatherData.list || !weatherData.list[0]) return false;
  
  const condition = weatherData.list[0].weather[0].main.toLowerCase();
  const description = weatherData.list[0].weather[0].description.toLowerCase();
  
  // Keywords indicating bad weather
  const badConditions = ["storm", "snow", "heavy rain", "extreme"];
  
  return badConditions.some(w => condition.includes(w) || description.includes(w));
}