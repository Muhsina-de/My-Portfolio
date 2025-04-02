import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    let error = '';
    if (!value) {
      error = 'This field is required';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email address';
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;