import React, { useState, useEffect } from "react";
import ViewContact from "./ViewContact";
import AddContact from "./AddContact";
import './App.css';

const InitialDisplay = () => {
  const [pastContacts, setContactButton] = useState(false);
  const [showButtonTextContact, setShowButtonTextContact] = useState("Show Contacts");
  const [newContact, setNewContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Load contacts from localStorage on mount
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  const showContacts = () => {
    setShowButtonTextContact(pastContacts ? "Show Contacts" : "Hide Contacts");
    setContactButton(!pastContacts);
  };

  const addingContact = () => {
    setNewContact(!newContact);
  };

  const updateContacts = (updatedContacts) => {
    setContacts(updatedContacts); // Update the state
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // Persist to localStorage
  };

  const updateContactsAfterAdd = (contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts); // Update state
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // Persist to localStorage
  };

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-auto">
          <button className="btn btn-primary" onClick={showContacts}>
            {showButtonTextContact}
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={addingContact}>
            Add Contact
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-auto">
          {pastContacts && (
            <ViewContact contacts={contacts} updateContacts={updateContacts} />
          )}
        </div>
        <div className="col-auto">
          {newContact && <AddContact onAddContact={updateContactsAfterAdd} />}
        </div>
      </div>
    </div>
  );
};

export default InitialDisplay;
