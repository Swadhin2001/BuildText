// import logo from './logo.svg';
// import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, {useState} from 'react'

function App() {
  const[mode,setMode] = useState('light');
  const[text,setText] = useState("DarkMode");
  // const [style,setStyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // });
  const changemode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#053049';
      setText("LightMode");
      // setStyle({
      //   backgroundColor: 'black',
      //   color:'white'
      // })
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      setText("DarkMode");
      // setStyle({
      //   backgroundColor: 'white',
      //   color:'black'
      // })
    }
  }
  return (
    <>
    <Navbar changemode={changemode} text={text} mode={mode}></Navbar>
    <div className="container">
      <Form mode={mode}></Form>
    </div>
    </>
  );
}

export default App;
