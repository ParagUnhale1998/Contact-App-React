import React, { useState } from 'react'
import Card from './Card'
import contacts from '../contact'
import Search from './Search';
import AddContact from './AddContact';

function createCard(contact) {
  return (
    <Card key={contact.email} name={contact.name} tel={contact.tel} email={contact.email} image={contact.img } />
  )
}
export default function App() {
  // const contactComponants = contacts.map((contact) => {
  //   return <Card key={contact.index} name={contact.name} tel={contact.tel} email={contact.email} image={contact.img } />
  // })
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [showAddContact,setShowAddContact] = useState(false)

  const handleAddContactClick = () =>{
      setShowAddContact(true)
  }
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  return (
    <div className='body-container'>
    <Search searchQuery={searchQuery} handleSearch={handleSearch} handleAddContactClick={handleAddContactClick}/>
    {showAddContact && <AddContact setShowAddContact={setShowAddContact}/>}
    <div className='cards-container'>
        {/* {contactComponants} */}
       {searchQuery ? (
          filteredContacts.map(createCard)
        ) : (
          contacts.map(createCard)
        )}
        
        {/* {(() => {
    if (searchQuery) {
      return filteredContacts.map(createCard);
    } else {
      return contacts.map(createCard);
    }
  })()} */}
    </div>
    </div>
  )
}
