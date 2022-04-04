
import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/HomeOne/Banner";
import ServicesBoxes from "../components/HomeOne/ServicesBoxes";
import About from "../components/HomeOne/About";
import JoinNow from "../components/Common/JoinNow";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import Footer from "../components/Layout/Footer";
import OurTeamSlider from "../components/Common/OurTeamSlider";
import { useSelector } from "react-redux";
const Index = () => {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  document
    .querySelector("html")
    .setAttribute("dir", currentLocal.language === "اللغه العربيه" ? "rtl" : "ltr");
  return (
    <div>
      <Navbar />
      <Banner />
      <ServicesBoxes />
      <About />
      <JoinNow />
      <OurTeamSlider />
      <FeedbackSlider />
      <Footer />
    </div>
  );
};
export default Index;
