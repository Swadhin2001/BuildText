import React from 'react'

export default function Colorpallate(props) {
    const yellow=()=>{
        props.color1("yellow");
    }
    const green=()=>{
        props.color1("green");
    }
    const red=()=>{
        props.color1("red");
    }
    const white=()=>{
        props.color1("white");
    }
  return (
    <div>
      <button type="button" class="btn btn-warning" onClick={yellow}>Y </button>
      <button type="button" class="btn btn-success" onClick={green}>G </button>
        <button type="button" class="btn btn-danger" onClick={red}>R </button>
        <button type="button" class="btn btn-secondary" onClick={white}>W </button>
    </div>
  )
}
