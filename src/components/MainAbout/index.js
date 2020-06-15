import React from "react";
import Image from "../../assests/img/darren_sarra.jpg"
import "./style.css";

const style = {
  padding: {
    top: "68.49529780564264%"
  }
}

function MainAbout() {
  return(
    <div>
      <main className="main-content">
        <div className="about-me">
          <section className="image-section">
            <div className="img-box" style={style.padding}>
              <img src={Image} alt="An image of myself."></img>
            </div>
          </section>
          <section className="about-section">
            <section className="text-box">
              <h2 className="text-name">DARREN ADRIAN SARRA</h2>
              <p className="text-about">Full-Stack Web Developer with a Degree in Computer Science. I have a Certificate in Full Stack Development from Johns Hopkins University. Mastered Javascript, CSS, and HTML, Also proficient in Python and have a background in Java. Doubly promoted as a Junior Engineer and a Data Analyst due to astute learning and creative problem-solving strengths. Eager to grow and flourish in a startup or a large corporation setting as well as expand on my current skills. Equipped with the skills needed to create products and provide services that would make the lives of users simple and enjoyable through data and intuitive interfaces.</p>
            </section>

          </section>
        </div>
      </main>
    </div>
  )
}

export default MainAbout;