const API_URL = "https://api.consumet.org/meta/anilist/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  maxRedirects: 5,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  }
});

export default axiosInstance;
