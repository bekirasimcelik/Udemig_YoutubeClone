import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";
import { VideoContext } from "../context/VideoContext";

const Sidebar = () => {
  const { setCategory } = useContext(VideoContext);

  return (
    <div>
      {categories.map((item, i) => (
        <Link to="/" key={i} onClick={() => setCategory(item)}>
          <div
            className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] ${
              item.name === category.name && "bg-[#2d2d2d]"
            }`}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>

          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
