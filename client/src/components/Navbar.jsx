//Imports
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion} from "framer-motion"
//Navbar Component

const Navbar = () => {
  return (
    <div className="flex items-center bg-rose-400 py-4 text-white drop-shadow-lg justify-between px-8">
      <div className="left text-3xl">
        <Link to="/">Certificate Generator</Link>
      </div>
      <div className="right w-[50%] pr-12 flex justify-evenly text-2xl">
        <motion.p
        whileTap={{scale:1.4}}
        whileHover={{scale:1.2}}
        >
        <NavLink
          to="/"
          className="px-6 rounded-xl pb-1 hover:drop-shadow-lg  ease-in duration-200"
        >
          Home
        </NavLink>
        </motion.p>

        <motion.p
        whileTap={{scale:1.4}}
        whileHover={{scale:1.2}}>
        <NavLink
          to="/certificates"
          className="px-6 rounded-xl pb-1 hover:drop-shadow-lg  ease-in duration-200"
        >
          Certificates
        </NavLink>
        </motion.p>
        <motion.p
        whileTap={{scale:1.4}}
        whileHover={{scale:1.2}}>
        <NavLink
          to="/output"
          className="px-6  rounded-xl pb-1 hover:drop-shadow-lg   ease-in duration-200"
        >
          Output
        </NavLink>
        </motion.p>
      </div>
    </div>
  );
};

export default Navbar;
