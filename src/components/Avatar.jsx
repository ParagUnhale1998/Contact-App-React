import React from 'react'

export default function Avatar(props) {
  return (
    <div>
        <img src={props.image} alt="profilePic" className='profilePic'/>
    </div>
  )
}
