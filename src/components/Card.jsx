import millify from "millify";
import React from "react";

const Card = ({ video }) => {
  return (
    <div className="cursor-pointer">
      {/* Resim Alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={video.thumbnail[video.thumbnail.length - 1].url}
          alt=""
        />
      </div>
      {/* Alt Detay Alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="w-14 h-14 rounded-full"
          src={video.channelThumpnail[0].url}
          alt=""
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
        </div>

        <p>{video.channelTitle}</p>

        <div className="flex gap-3">
          <p>{millify(video.viewCount)}</p> * <p>{video.publishedTimeText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
