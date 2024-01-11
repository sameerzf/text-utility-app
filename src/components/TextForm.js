import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpperCaseClick =()=>{
       console.log("Uppercase was clicked"); 
       console.log(text);
       const newText=text.toUpperCase();
       setText(newText);
    }
    const handleOnChange =(event)=>{
        console.log("On Change"); 
        setText(event.target.value);
       
     }
     const handleLowerCaseClick =()=>{
      console.log("LowerCase was clicked"); 
      console.log(text);
      const newText=text.toLowerCase();
      setText(newText);
   }
   const clearText=()=>{
    const newText="";
    setText(newText);
   }
   const copyText=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

   }
    const [text,setText] =useState("");
  return (
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
   <div className="mb-3">
    <h1>{props.heading.toUpperCase()}</h1>
  <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
<button className="mx-5" onClick={handleUpperCaseClick}>Convert into UpperCase</button>
<button onClick={handleLowerCaseClick}>Convert into LowerCase</button>
<button className="mx-5" onClick={clearText}>Clear text</button>
<button className='mx-5' onClick={copyText}>Copy Text</button>
</div>
<div className='container my-5' style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>YOUR TEXT SUMMARY</h1>
  <p>Number of Characters: {text.length}</p>  
  <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
  <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} minutes required to read</p>
</div>
    </div>
  )
}
