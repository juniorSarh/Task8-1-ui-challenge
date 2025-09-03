import React from 'react'

export default function SecDivParagraph(props: {title: string, paragraph: string}) {
  return (
    <div>
       <div>
      <h2 style={{color:'#e5ebf1ff',margin:'15px'}}>{props.title}</h2>
      <p style={{color:'#e5ebf1ff',margin:'15px'}}>{props.paragraph}</p>
    </div>
    </div>
  )
}
