import axios from "axios";

const BASE_URL = import.meta.env.VITE_GUARDIAN_BASE_URL;
const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
console.log("BASE_URL:", BASE_URL);
console.log("KEY exists:", !!API_KEY);

export const getNews = async (query = "") => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        "api-key": API_KEY,
        q: query || undefined,
        "show-fields": "headline,trailText,body,thumbnail",
        "order-by": "newest",
        "page-size": 10,
      },
    });
    return response.data.response.results;
  } catch (err) {
    console.error(err.response?.data || err);
    return [];
  }
};