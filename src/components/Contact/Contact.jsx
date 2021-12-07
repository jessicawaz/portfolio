import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me.</h1>
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name..."
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Your Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email..."
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="Message..."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <button type="submit" className="btn btn-primary mx-auto">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
