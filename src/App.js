import React, { useState } from "react";
import AddContact from "./components/AddContact";
import ContactsList from "./ContactsList";
import EditContacts from "./components/EditContacts";

const App = () => {
  let [contacts, setContacts] = useState([]);
  let [editContacts, setEditContacts] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);

    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContacts(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });

    setContacts(newContactsArray);
    setIsEdit(false);
  }

  return (
    <div>
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContacts={editContacts}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;
