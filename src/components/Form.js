import React , {useState}from 'react'
import Alert from './Alert';
import Count from './Count';
// import Theme from './Theme';

export default function Form(props) {
  const [text, setText] = useState("Enter The Text Here");
  const [showcnt, setShowcnt] = useState(false);
  // const [darkmode,setDarkmode] = useState("Enable Dark Mode");
  
  const makeUpcase = ()=>{
    let txt = text;
    var newText = text.toUpperCase();
    // setText(newText)
    if (newText==txt){
      props.alertmsg("This is already in UpperCase","warning");
      // alert ("This is already in Uppercase")
    }
    else {
      setText(newText)
      props.alertmsg("Successfully changed to UpperCase","success");
      // console.log(txt);
    }
  }
  const makeLowcase = ()=>{
    var txt = text;
    var nw = text.toLocaleLowerCase();
    if (txt == nw){
      props.alertmsg("This is already in LowerCase","warning");
      // alert ("Already in Lowercase")
    }
    else {
      setText(nw);
      props.alertmsg("Successfully changed to LowerCase","success");
    }
  }
  const togglecnt=()=>{
    setShowcnt(!showcnt);
  }  
  const makeclr = ()=>{
    setText("");
  }
  const change = (event)=>{
    setText(event.target.value)
  }

  const alt =()=>{
    var t = text;
    var chars = t.toLowerCase().split("");
    for (let i=0;i<t.length;i+=2){
      chars[i] = chars[i].toUpperCase();
      console.log(t[i]);
    }
    let tx = chars.join("");
    if (tx == t){
      props.alertmsg("This is already in AlTeRnAtE","warning");
    }
    else{
      setText(tx);
      props.alertmsg("Succesfully changed to AlTeRnAtE","success");
    }
  }
  return (
    <>
    <div className="mb-3" style= {
      props.mode === 'dark'? {backgroundColor : '#053049', color: 'white'} : {backgroundColor : 'white', color: 'black'}
    } >
      <h1 className="text-center">Enter Your Text</h1>
      <textarea className="form-control" value ={text} onChange = {change} id="exampleFormControlTextarea1" rows="8" style ={props.mode === 'dark'? {backgroundColor : '#202a30', color: 'white'} : {backgroundColor : 'white', color: 'black'}} ></textarea>
      <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3" onClick={makeUpcase} type="submit">Make Uppercase</button>
      <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3 ms-3" onClick={makeLowcase} type="submit">Make Lowercase</button>
      <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3 ms-3" onClick={alt} type="submit">Make AlTeRnAtE</button>
      <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3 ms-3" onClick={togglecnt} type="submit">Show Count</button>
      <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3 ms-3" onClick={makeclr} type="submit">Clear All</button>
      {/* <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3 ms-3" onClick={drkmde} type="submit">{darkmode}</button> */}
    </div>
    <div >
      {(showcnt)?(<Count text= {text} mode1 ={props.mode}></Count>) : (null) }
    </div>
    </>
  )
}
