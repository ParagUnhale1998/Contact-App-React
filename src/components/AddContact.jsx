import React, { useState } from 'react';
import contacts from '../contact'

export default function AddContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [img, setImg] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new contact object
    const newContact = {
      name: name,
      email: email,
      tel: tel,
      img: img,
    };

    // Call the onAddContact function passed as a prop
    contacts.push(newContact)
   console.log(newContact)
   console.log(contacts)
    // Reset the form fields
    setName('');
    setEmail('');
    setTel('');
    setImg('');

    props.setShowAddContact(false);

  };
  const handleCloseform = (e) =>{
    e.preventDefault()
    props.setShowAddContact(false);
  }
  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <label>
        Name:
        <input className='input-name' placeholder='Enter Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input className='input-email' placeholder='Enter Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone Number:
        <input className='input-no' placeholder='Enter Phone-No' type="tel" value={tel} onChange={(e) => setTel(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input className='input-image' placeholder='Enter Image Link' type="text" value={img} onChange={(e) => setImg(e.target.value)}  />
      </label>
      <button className='submit-btn' type="submit">Add Contact</button>
      <button className='close-btn' onClick={handleCloseform}>Close</button>
    </form>
  );
}
