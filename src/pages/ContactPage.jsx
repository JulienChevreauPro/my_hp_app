import { useState } from "react";

import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "lastname") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.slice(0, 30).toUpperCase(),
      }));
    } else if (name === "firstname") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.slice(0, 30).charAt(0).toUpperCase() + value.slice(1),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      lastname: "",
      firstname: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <img src="./src/assets/images/logo.svg" alt="Logo Cocktail Club" />
      <section className="contactPage">
        <h2 className="contactPage__title">Contact us</h2>
        <form onSubmit={handleSubmit} className="contactPage__form">
          <label htmlFor="lastname" className="contactPage__subtitle">
            Last Name:
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your lastname"
            className="contactPage__text"
            required
          />
          <label htmlFor="firstname" className="contactPage__subtitle">
            First Name:
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your firstname"
            className="contactPage__text"
            required
          />
          <label htmlFor="email" className="contactPage__subtitle">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="contactPage__text"
            required
          />
          <label htmlFor="message" className="contactPage__subtitle">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="contactPage__text"
            required
          />
          <button className="contactPage__button" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
