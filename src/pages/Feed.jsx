import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/VideoContext";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Card from "../components/Card";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  return (
    <div className="flex gap-10">
      <Sidebar />
      <div className="p-5">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <div className="overflow-y-auto h-screen flex flex-col">
            {videos &&
              videos.map(
                (item) =>
                  item.type === "video" && (
                    <Card video={item} key={item.videoId} />
                  )
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
