import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center gap-2">
        <FaYoutube size={50} className="text-[red]" />
        <h1 className="text-2xl font-mono max-sm:hidden">Youtube</h1>
      </Link>

      <form className="flex border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          type="text"
          className="bg-black outline-none text-white px-5 py-2"
        />
        <button className="px-4 text-2xl bg-zinc-800">
          <IoIosSearch />
        </button>
      </form>

      <div>
        <FaBell />
        <IoMdVideocam />
        <MdVideoLibrary />
      </div>
    </div>
  );
};

export default Header;
