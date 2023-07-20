import React from 'react'
// import AddContact from './AddContact'
// import AddContact from './AddContact';

export default function Search(props) {
    
  return (
    <div className='Search-container'>
      <input
    type="text"
    className='search'
    value={props.searchQuery} onChange={props.handleSearch} placeholder='Search Contacts Names'/>
    <button className="add-contact-btn" onClick={props.handleAddContactClick}>Add Contact</button>
   {/* {showAddContact && <AddContact showAddContact={showAddContact} setShowAddContact={setShowAddContact}/> }  */}
   
    </div>
  )
}
