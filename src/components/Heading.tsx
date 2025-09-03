import React from 'react'

export default function Heading(props: {title: string, paragraph: string}) {
  return (
    <div>
      <h2 style={{color:'darkblue'}}>{props.title}</h2>
      <p style={{color:'grey'}}>{props.paragraph}</p>
    </div>
  )
}
