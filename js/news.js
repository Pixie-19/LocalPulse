
import { NEWS_API_KEY, NEWS_BASE_URL } from "./config.js";

export async function getNews(city) {
  // We search for the city AND exclude generic terms to try to get local stuff
  // Sorted by relevancy to get best matches
  const url = `${NEWS_BASE_URL}?q=${city}&language=en&sortBy=relevancy&pageSize=8&apiKey=${NEWS_API_KEY}`;
  
  const res = await fetch(url);
  
  if (!res.ok) {
    // Attempt to parse error message from API
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.message || "News fetch failed");
  }
  
  return res.json();
}