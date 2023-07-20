import React from 'react'

export default function Details(props) {
  return (
    <div>
       <p className="info">Phone-no: {props.tel}</p>
        <p className="info">Email: {props.email}</p>
    </div>
  )
}
