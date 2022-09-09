import React, {useState} from 'react'
export default function (props) {

  //for upper case
const handleUpperClick = () =>{
  // console.log(text);
  let newText = text.toUpperCase();
  setText(newText);
}

//For lower case
const handleLowerClick = () =>{
  // console.log(text);
  let newText = text.toLowerCase();
  setText(newText);
}

const handleonChange = (event) =>{
  setText(event.target.value);
}

const handleCopy = () =>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  }

  const extraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" 
        id="myBox" value={text} onChange={handleonChange} placeholder="Enter text here"
         style={{backgroundColor: props.mode==='dark'?'#161528':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6">
        </textarea>
        
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpperClick}>Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLowerClick}>Lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-1"  onClick={extraSpaces}>Remove Extra Space</button>
      

      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text:"Enter something to preview it!"}</p>
      </div>
    </>

  )
}
