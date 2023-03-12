//Imports
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

//Generate a Pdf Inputs Type - 1
const Generate = () => {
  //url to go to
  const url = "";
  //use State to hold input data
  const [data, setdata] = useState({
    name: "",
    rank: "",
    year: "",
    society: "",
    awardFor: "",
    awardBy: "",
  });

  //Handle Change function
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }

  //Function to handle submit
  function submit(e) {
    e.preventDefault();
    axios.post(url, { data }).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <div className="flex text-gray-600 items-center justify-center min-h-[85vh]">
      <motion.form
        onSubmit={(e) => submit(e)}
        initial={{ x: 80, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          mass: 2,
          type: "spring",
          stiffness: 140,
          duration: 0.7,
        }}
        className=" flex bg-rose-200 drop-shadow-sm min-h-[25rem] rounded-3xl flex-col items-evenly px-12 py-4 justify-evenly "
      >
        <div className="flex">
          <motion.label
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            for="name"
            className="pr-4 mt-1 text-xl"
          >
            Name:
          </motion.label>
          <motion.input
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            className=" focus:bg-rose-100 text-xl focus:outline-rose-300 focus:outline-offset-1 rounded-md px-3 py-2 drop-shadow-sm border-none"
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => handleChange(e)}
            placeholder="Enter Name"
          />
          <motion.label
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            for="rank"
            className="pr-4 pl-10 mt-1 text-xl"
          >
            Rank:
          </motion.label>
          <motion.input
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            className=" focus:bg-rose-100 text-xl focus:outline-rose-300 focus:outline-offset-1 rounded-md px-3 py-2 drop-shadow-sm border-none"
            type="number"
            id="rank"
            value={data.rank}
            onChange={(e) => handleChange(e)}
            placeholder="Enter Rank"
          />
        </div>

        <div className="flex mr-9 py-4">
          <motion.label
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            for="year"
            className="pr-4 pl-10 mt-1 text-xl"
          >
            Year:
          </motion.label>
          <motion.input
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            className=" focus:bg-rose-100 text-xl focus:outline-rose-300 focus:outline-offset-1 rounded-md px-3 py-2 drop-shadow-sm border-none"
            type="number"
            id="year"
            value={data.year}
            onChange={(e) => handleChange(e)}
            placeholder="eg. 2021-22"
          />
          <motion.label
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            for="society"
            className="pr-2 pl-10 mt-1 text-xl"
          >
            Society:
          </motion.label>
          <motion.input
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            className=" focus:bg-rose-100 text-xl focus:outline-rose-300 focus:outline-offset-1 rounded-md px-3 py-2 drop-shadow-sm border-none"
            type="text"
            id="society"
            value={data.society}
            placeholder="Society name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex mr-60 py-4">
          <motion.label
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            for="awardFor"
            className="pr-4 pl-10 mt-1 text-xl"
          >
            Award for:
          </motion.label>
          <motion.input
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            className="focus:bg-rose-100 text-xl focus:outline-rose-300 focus:outline-offset-1 rounded-md px-3 py-2 drop-shadow-sm border-none"
            type="text"
            id="awardFor"
            value={data.awardFor}
            onChange={(e) => handleChange(e)}
            placeholder="Award given for"
          />
        </div>
        <div className="flex mr-48 py-4">
          <motion.label
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            for="awardBy"
            className="pr-4 pl-10 mt-1 text-xl"
          >
            Award Given by:
          </motion.label>
          <motion.input
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
            className="focus:bg-rose-100 text-xl focus:outline-rose-300 focus:outline-offset-1 rounded-md px-3 py-2 drop-shadow-sm border-none"
            type="text"
            id="awardBy"
            value={data.awardBy}
            onChange={(e) => handleChange(e)}
            placeholder="Director"
          />
        </div>
        <div className="absolute right-14 bottom-24">
          <motion.button
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, type: "spring", duration: 0.7 },
            }}
            type="submit"
            className=" h-16 font-medium w-36 text-center text-lg hover:bg-rose-400 text-rose-700 mr-14 mb-4 duration-200 hover:rounded-xl hover:text-white bg-white"
          >
            Download Pdf
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default Generate;
