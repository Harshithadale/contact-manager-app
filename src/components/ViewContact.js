import React from "react";
import './App.css';
import image from './image.png'

const ViewContact = ({ contacts, updateContacts }) => {
  const deleteContact = (index) => {
    // Remove the contact from the list
    const updatedContacts = contacts.filter((_, i) => i !== index);

    // Update the state and localStorage
    updateContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map((contact, index) => (
          <div className="d-flex flex-row shadow p-3 mb-3 border-radius-2" key={index}>
            <img src={image} className="image" alt="Contact" />
            <ul className="col-9 ml-3">
              <li className="list-group-item">
                <strong>Name:</strong> {contact.name} {contact.surname} <br />
                <strong>Email:</strong> {contact.email} <br />
                <strong>Phone:</strong> {contact.phone}
              </li>
            </ul>
            <i
              className="fa-solid fa-trash icon text-danger"
              onClick={() => deleteContact(index)}
              style={{
                fontSize: "20px", 
                cursor: "pointer", 
                marginLeft: "auto", 
                alignSelf: "center",
              }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ViewContact;
