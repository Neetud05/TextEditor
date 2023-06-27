import React,{useState} from 'react'


export default function TextForm(props) {
  
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
}
const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");

}
const handleClearClick=()=>{
    let newText=' ';
    setText(newText);
}
const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(""));
}
const handleCopy=()=>{
    navigator.clipboard.writeText(text);
}
const handleOnChange=(event)=>{
setText(event.target.value);
}

    const [text,setText]=useState('Enter Text here');
    // setText("new text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h3 className='mb-4'>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" id="mytext" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove ExtraSpace</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
<h3>Your Text Summary</h3>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}character</p>
<p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
