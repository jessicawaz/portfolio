import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me.</h1>
      <form action="https://formsubmit.co/jesswaz24@gmail.com" method="POST">
        <div class="row form">
          <div class="col-5">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Name..."
                required
              />
            </div>
          </div>

          <div class="col-5">
            <div class="form-group">
              <label for="email">Your Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Email..."
                required
              />
            </div>
          </div>
        </div>

        <div class="row form">
          <div class="col-md-6 mx-auto">
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Message..."
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div class="row form">
          <button type="submit" className="btn btn-primary mx-auto">
            Send Message
          </button>
        </div>
        <input type="hidden" name="_captcha" value="false"></input>
        <input
          type="hidden"
          name="_next"
          value="https://wazbinski-portfolio.netlify.app/"
        ></input>
      </form>
    </div>
  );
};

export default Contact;
