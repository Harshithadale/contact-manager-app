import React, { useState } from "react";
import './App.css';

const AddContact = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setContact({ ...contact, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("Please fill in all required fields!");
      return;
    }

    onAddContact(contact); // Notify the parent about the new contact

    alert("Contact added successfully!");
    setContact({ name: "", surname: "", email: "", phone: "" }); // Reset form
  };

  return (
    <div className="container">
      <h3>Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your first name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Enter your last name"
            value={contact.surname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
            value={contact.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
