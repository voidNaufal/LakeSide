import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/images/homebg.png";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundColor: "rgba(255, 255, 255, 0)",
    backgroundSize: "cover", // or "contain" depending on your preference
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between"
      style={backgroundImageStyle}
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-10 text-5xl font-bold text-white font-['Lemonada']">
          Lake Side
        </h1>
        {/* </div> */}
        <div className="mb-10 text-stone-300 text-5xl font-['Lemonada']">
          Menyajikan Kopi untuk
          <br />
          beraktivitas dengan semangat
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default Banner;
