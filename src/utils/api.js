import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },

  headers: {
    asd: "asd",
    asd2: "ssad",
  },
});

export default api;

axios.get();

api.get();
