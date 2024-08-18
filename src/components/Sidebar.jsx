import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";

const Sidebar = () => {
  return (
    <div>
      {categories.map((item, i) => (
        <Link to="/" key={i}>
          <div className="flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]">
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
