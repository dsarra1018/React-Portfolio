import React from "react";
import Image from "../../assests/img/darren_sarra.jpeg"
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
            <div className="img-container">
              <div className="img-box" style={style.padding}>
                <img src={Image} alt="An image of myself.">
              </img>
              </div>
            </div>
          </section>
          <section className="about-section">

          </section>
        </div>
      </main>
    </div>
  )
}

export default MainAbout;