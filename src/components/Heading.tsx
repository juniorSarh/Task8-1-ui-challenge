import React from 'react'

export default function Heading(props: {title: string, paragraph: string}) {
  return (
    <div>
      <h2 style={{color:'#304b6e',margin:'15px'}}>{props.title}</h2>
      <p style={{color:'grey',margin:'15px'}}>{props.paragraph}</p>
    </div>
  )
}
