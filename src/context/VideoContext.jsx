import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [category, setCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let type = category.type;

    // seçilen kategori menü tipindeyse fonksiyonu durdur
    if (type === "menu") return;

    // istek atılacak url belirle
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : `/search?query=${category.name}`;

    // YÜklenme stat'ini true'ya çek
    setIsLoading(true);

    // boşuna api isteği atmasın
    // return;

    // api isteği at
    api
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <VideoContext.Provider
      value={{ videos, category, setCategory, isLoading, error }}
    >
      {children}
    </VideoContext.Provider>
  );
};
