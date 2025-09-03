import React from 'react'

export default function Heading(props:any) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
    </div>
  )
}
