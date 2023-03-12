//Imports
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Certificates Page : Has Overview of all the certificates in blocks

const Certificates = () => {
  return (
    <div className="flex h-[85vh] text-white bg-white w-[100vw] items-evenly justify-evenly overflow-hidden">
      <div className="parent-row-1 p-4 flex flex-col items-evenly justify-evenly">
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/cert1"
            className="w-80 rounded-3xl drop-shadow-sm hover:drop-shadow-2xl hover:rounded-md hover:scale-[1.2] ease-in h-60 m-2 mt-10 cursor-pointer bg-rose-300 hover:text-4xl duration-300 flex items-center justify-center"
          >
            Certificate one
          </Link>
        </motion.p>
        <motion.p
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/cert2"
            className="w-80 rounded-3xl drop-shadow-sm hover:drop-shadow-2xl hover:rounded-md hover:scale-[1.2] ease-in h-60 m-2 mt-10 cursor-pointer bg-rose-300 hover:text-4xl duration-300 flex items-center justify-center"
          >
            Certificate
          </Link>
        </motion.p>
      </div>
      <div className="parent-row-2 p-4 flex flex-col items-evenly justify-evenly">
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/cert2"
            className="w-80 rounded-3xl drop-shadow-sm hover:drop-shadow-2xl hover:rounded-md hover:scale-[1.2] ease-in h-60 m-2 mt-10 cursor-pointer bg-rose-300 hover:text-4xl duration-300 flex items-center justify-center"
          >
            Certificate
          </Link>
        </motion.p>
        <motion.p
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/cert2"
            className="w-80 rounded-3xl drop-shadow-sm hover:drop-shadow-2xl hover:rounded-md hover:scale-[1.2] ease-in h-60 m-2 mt-10 cursor-pointer bg-rose-300 hover:text-4xl duration-300 flex items-center justify-center"
          >
            Certificate
          </Link>
        </motion.p>
      </div>
      <div className="parent-row-3 p-4 flex flex-col items-evenly justify-evenly">
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/cert2"
            className="w-80 rounded-3xl drop-shadow-sm hover:drop-shadow-2xl hover:rounded-md hover:scale-[1.2] ease-in h-60 m-2 mt-10 cursor-pointer bg-rose-300 hover:text-4xl duration-300 flex items-center justify-center"
          >
            Certificate
          </Link>
        </motion.p>
        <motion.p
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/cert2"
            className="w-80 rounded-3xl drop-shadow-sm hover:drop-shadow-2xl hover:rounded-md hover:scale-[1.2] ease-in h-60 m-2 mt-10 cursor-pointer bg-rose-300 hover:text-4xl duration-300 flex items-center justify-center"
          >
            Certificate
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default Certificates;
