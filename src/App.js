// import logo from './logo.svg';
// import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, {useState} from 'react'
// import Colorpallate from './components/Colorpallate';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light');
  const[text,setText] = useState("DarkMode");
  const[altext,setAlext] = useState(null);
  const alertMsg=(msg,type)=>{
    setAlext({
      msg: msg,
      type:type
    })
    setTimeout(() => {
      setAlext(null);
    }, 3000);
  }

  const color =(clr)=>{
    document.body.style.backgroundColor = clr;
  }

  const changemode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#053049';
      setText("LightMode");
      alertMsg("Darkmode Enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor= 'white';
        setText("DarkMode");
        alertMsg("Lightmode Enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar changemode={changemode} text={text} mode={mode} color ={color}></Navbar>
    <Alert alertText={altext} alert={altext}></Alert>
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Form mode={mode} alertmsg={alertMsg}></Form>} />
      </Routes>
    </div>
    {/* <Form mode={mode} alertmsg={alertMsg}></Form> */}
    {/* <Colorpallate color ={color}></Colorpallate> */}
    </Router>
    </>
  );
}

export default App;
