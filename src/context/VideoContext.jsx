import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [category, setCategory] = useState(categories[0]);

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

    console.log();

    // boşuna api isteği atmasın
    // return;

    // api isteği at
    api
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <VideoContext.Provider value={{ videos, category, setCategory }}>
      {children}
    </VideoContext.Provider>
  );
};
