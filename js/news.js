import { NEWS_API_KEY, NEWS_BASE_URL } from "./config.js";

export async function getNews(city) {
  const url = `${NEWS_BASE_URL}?q=${city}&pageSize=6&apiKey=${NEWS_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("News fetch failed");
  return res.json();
}
