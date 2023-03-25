// import logo from './logo.svg';
// import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, {useState} from 'react'

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
    <Navbar changemode={changemode} text={text} mode={mode}></Navbar>
    <Alert alertText={altext} alert={altext}></Alert>
    <div className="container">
      <Form mode={mode} alertmsg={alertMsg}></Form>
    </div>
    </>
  );
}

export default App;
