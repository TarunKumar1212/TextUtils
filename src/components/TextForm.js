import React,{useState} from 'react'

export default function TextForm(prop) {

    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Converted to Upper Case!","success");
        if(text.length===0){
            prop.showAlert("Enter Text First","danger");    
        }
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Converted to Lower Case!","success");
        if(text.length===0){
            prop.showAlert("Enter Text First","danger");    
        }
    }
    const handleclear = ()=>{
        let newText = "";
        setText(newText);
        prop.showAlert("Text is clear","success");
        if(text.length===0){
            prop.showAlert("Enter Text First","danger");    
        }
    
    }
    const handleCopy =()=>{        
        navigator.clipboard.writeText(text);
        prop.showAlert("Text is Copied","success");

        if(text.length===0){
            prop.showAlert("Enter Text First","danger");    
        }
    }
    const handleEXtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        prop.showAlert("Extra spaces are removed","success");
        if(text.length===0){
            prop.showAlert("Enter Text First","danger");    
        }
    }
    const [text,setText] = useState('');
    const wordsCount = text.split(/\s+/).filter(word => word !== '').length;
    const charactersCount = text.length;

  return (
    <>
    <div className="container" style={{color: prop.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{prop.heading}</h1>
        <div className="mb-3" >
            <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: prop.mode==='dark'?'#13466e':'white',color: prop.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear Text</button>        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleEXtraSpace}>Remove Extra Spaces </button>        
    </div>
    <div className="container my-3" style={{color: prop.mode==='dark'?'white':'black'}}>
        <h2 >{text.length>0?"Your text summary":""}</h2> 
        <p>{text.length>0?`${wordsCount} words and ${charactersCount} characters`:""}</p>
        <p>{text.length>0?`${0.008 * wordsCount} Minutes read`:""} </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>    
       </div>
    </>
  )
}
