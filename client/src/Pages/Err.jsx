//Imports
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//Error Page

const Err = () => {
  return (
    <div className=" flex bg-white flex-col items-center justify-center h-[85vh]">
      <p className="text-5xl text-rose-500 font-thin">Error</p>
      <p className="text-8xl text-rose-600 font-extrabold">404</p>
      <motion.p
        initial={{ x: 100, y: 100, rotate: 0, opacity: 0 }}
        animate={{
          x: 0,
          y: 0,
          originZ: 0,
          rotate: 360,
          opacity: 1,
          transition: { delay: 0.3 },
        }}
      >
        <Link
          to="/"
          className="h-14 w-32 flex text-lg mt-6 font-medium hover:scale-[1.2] hover:text-white text-rose-100 items-center justify-center rounded-lg hover:bg-rose-600 duration-300 bg-rose-400"
        >
          Return Back
        </Link>
      </motion.p>
    </div>
  );
};

export default Err;
