//Imports
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Home Page

const Home = () => {
  return (
    <div className="flex items-center bg-white justify-center h-[85vh] overflow-hidden px-10">
      <div className="left flex flex-col items-center justify-center w-[25%] text-center">
        <motion.h1
          initial={{ y: "-100" }}
          whileInView={{ y: 0 }}
          className="text-5xl text-rose-400 font-semibold mb-6"
        >
          Create Certificates here
        </motion.h1>
        <motion.p
          initial={{ y: "100",rotate:0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/certificates"
            className="h-14 w-40 flex items-center text-lg font-medium justify-center hover:text-lg bg-rose-300 text-white rounded-xl duration-300 hover:shadow-lg hover:rounded-lg hover:bg-rose-600 hover:scale-[1.3]  hover:font-bold "
          >
            Go Make One
          </Link>
        </motion.p>
      </div>
      <div className="right pl-40 text-rose-400 w-[50%]">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          quibusdam libero quasi et officiis, nulla inventore veritatis facilis
          a deleniti quam, nisi asperiores cum aliquam perferendis aspernatur
          saepe alias quo delectus tenetur. Eum laborum sequi repudiandae
          corrupti! Voluptatem, itaque aliquid.
        </p>
      </div>
    </div>
  );
};

export default Home;
