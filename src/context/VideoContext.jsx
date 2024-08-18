import { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ chlidren }) => {
  const [videos, setVideos] = useState();
  const [category, setCategory] = useState();

  return (
    <VideoContext.Provider value={{ videos, category, setCategory }}>
      {chlidren}
    </VideoContext.Provider>
  );
};
