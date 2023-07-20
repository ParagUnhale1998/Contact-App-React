import React from 'react'
import Avatar from './Avatar'
import Details from './Details'

export default function Card(props) {
  return (
    <div className='card-container'>
      <div className="top" >
        <h2 className='Name'>Name: {props.name}</h2>
        <Avatar image ={props.image}/>
      </div>
      <div className="bottom">
        <Details tel={props.tel} email={props.email} />
      </div>
      <hr />
    </div>
  )
}
