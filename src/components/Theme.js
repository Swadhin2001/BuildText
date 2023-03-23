// import React from 'react'

// export default function Theme() {
//   const [darkmode,setDarkmode] = useState("Enable Dark Mode");
//   const [style,setStyle] = useState({
//     backgroundColor: 'white',
//     color: 'black'
//   });
//   const drkmde=()=>{
//     if (style.backgroundColor == 'white'){
//       setStyle({
//         backgroundColor: 'black',
//         color: 'white'
//       })
//       setDarkmode("Enable Light Mode");
//     }
//     else{
//       setStyle({
//         backgroundColor: 'white',
//         color: 'black'
//       })
//       setDarkmode("Enable Dark Mode");
//     }
//   }
//   return (
//     <div>
//       <button className="btn btn-primary position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill mt-3 ms-3" onClick={drkmde} type="submit">{darkmode}</button>
//     </div>
//   )
// }
