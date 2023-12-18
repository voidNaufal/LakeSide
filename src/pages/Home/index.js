import React from "react";
import { Banner, Service, Informasi } from "../../components";
import Kontak from "../Kontak";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Informasi />
      <Kontak />
    </div>
  );
};

export default Home;
