import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter , Routes,Route} from "react-router-dom";
const App = () => {

  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
  }
 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
 }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor='grey';
      showAlert('dark Mode has been enabled','success');
      // document.title="Textutils-Dark Mode";
      // setInterval(()=>{
      //   document.title="Textutils is amazing";

      // },1500)
      // setInterval(()=>{
      //   document.title="Install Textutils now";

      // },1000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled','success');
      // document.title="Textutils-Light Mode";

    }
  }
  return(
    <>
   {/* <Navbar title="Textutils" aboutText="About textutils"/> */}
   {/* <Navbar/> */}
   <div className="container my-3">

   {/* <About/> */}
   </div>
   <BrowserRouter>
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <Routes>
   
    <Route exact path="/about" element={<About mode={mode}/>}/>

    <Route path="/" element=   { <TextForm heading="Try Textutils-Word counter,Character Counter,Remove Extra Spaces,Copy Text" mode={mode} showAlert={showAlert}/> }/>


   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App