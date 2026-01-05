const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;

export async function getNews(city) {
  if (!NEWS_API_KEY) {
    throw new Error(
      "Missing VITE_NEWS_API_KEY. Add it to .env and run the app with Vite (npm run dev)."
    );
  }
  if (!NEWS_BASE_URL) {
    throw new Error(
      "Missing VITE_NEWS_BASE_URL. Add it to .env and run the app with Vite (npm run dev)."
    );
  }
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