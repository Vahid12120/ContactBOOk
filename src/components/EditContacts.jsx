import { useState } from "react";

const EditContacts = (props) => {
  console.log(props);
  const [name, setName] = useState(props.editContacts.name);
  const [surname, setSurname] = useState(props.editContacts.surname);
  const [phone, setPhone] = useState(props.editContacts.phone);

  function handleSaveClick() {
    let contact = { ...[props.editContacts] };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);

    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone"
        value={phone}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default EditContacts;
