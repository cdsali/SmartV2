import React, { useState } from 'react';
import './contact.css'; // Import CSS file for styling

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = {
      name,
      email,
      message,
    };

    try {
      // Send the POST request to the backend server
      const response = await fetch('http://54.144.25.250:3600/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response
      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage('Failed to send your message. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form" id="contactus">
      <h2>CONTACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactUs;
