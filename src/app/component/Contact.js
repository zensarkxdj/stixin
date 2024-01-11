import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
    // You can add your logic to send the form data to a server or perform any other actions
  };
  return (
    <div className="about">
      <div className="about-head">
        <h1>CONTACT US</h1>
      </div>
      <div className="about-des">
        <span style={{ fontWeight: "bold"}}>
          {" "}
          For any special wishes or unanswered questions, we are at your
          disposal any time.
        </span>
        <br></br>
        <form onSubmit={handleSubmit} className="contact">
          <div className="contact-row1">
            <div className="contact-text">
              <label htmlFor="name"></label>
              <input
              className="contact-field"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="contact-text">
              <label htmlFor="email"></label>
              <input
              className="contact-field"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="contact-text">
            <label htmlFor="subject"></label>
            <input
            className="contact-field"
            placeholder="Subject"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-text">
            <label htmlFor="message"></label>
            <textarea
            className="contact-field1"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
          </div>

          <button type="submit" className="contact-sub">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;