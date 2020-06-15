import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainAbout from "../../components/MainAbout";
import "./style.css";

function About() {
  return(
      <div>
        <div className="page-container">
          <Header />
          <MainAbout />
        </div>
        <Footer />
      </div>
  )
};

export default About;