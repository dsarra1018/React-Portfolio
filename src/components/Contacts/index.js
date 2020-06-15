import React from "react";
import "./style.css";

function Contacts() {
  return(
    <div>
      <main className="main-content">
        <section className="page-template contact-page">
          <h2 className="page-title">CONTACT</h2>
          <div className="page-content">
            <p>
              Contact me if you have any questions or inquiries. 
            </p>
            <div className="input-forms">
              <input type="text" className="forms" id="first_name" placeholder=" *First Name"></input>
              <input type="texts" className="forms" id="last_name" placeholder=" *Last Name"></input>
            </div>
            <div className="email-forms">
              <input type="email" className="forms" id="email" placeholder=" *Email"></input>
            </div>
            <div className="text-area-forms">
              <textarea className="forms" rows="3" placeholder=" Questions"></textarea>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
};

export default Contacts;