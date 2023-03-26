import React from 'react'

export default function Count(props) {
  return (
    <div className={`container text-${props.mode1 ==='dark' ? 'light' : 'dark'} border border-secondary`} >
      <h2>Words and Letter Count</h2>
      <p>The words present in this text are {props.text.length && props.text.split(" ").length} and letters are {props.text.length}</p>
      <h2>Preview</h2>
      <p>{props.text.length !=0 ? props.text :"Enter the text to show" }</p>
    </div>
  )
}
