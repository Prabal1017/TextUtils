import React, {useState} from 'react'

export default function TextForm(props) {

  function handleUpClick(){
    setText(text.toUpperCase())
    props.showAlert("Converted to Uppercase!","success")
  }

  function handleDownClick(){
    setText(text.toLowerCase())
    props.showAlert("Converted to Lowercase!","success")

  }

  function handleCopyText(){
    var text = document.getElementById('mybox')
    text.select()
    text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text.value)

    props.showAlert("Text Copied","success")
  }

  function handleOnChange(event){
    setText(event.target.value)
  }

  function countWordLength(){
    if(text.length === 0){
      return 0
    }
    else{
      return text.split(" ").length
    }
  }

  function handleClearClick(){

    if(text.length<1){
      props.showAlert("Nothing to clear!","warning")
    }
    else{
      props.showAlert("Text cleared!","success")

    }
    setText('')
  }

  function handleExtraSpaces(){
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }


  const [text, setText] = useState('')


  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.title}</h1>
      <div className="mb-3">
      <textarea className="form-control"
      onChange={handleOnChange} 
      value={text} 
      id="mybox" 
      style={{backgroundColor: props.mode === 'dark' ? '#2f3338' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
      }} rows="5"></textarea>
      </div>
      <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
      <button type="button" onClick={handleDownClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
      <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Spaces</button>
      <button type="button" onClick={handleCopyText} className="btn btn-primary mx-1">Copy Text</button>
      <button type="button" onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
    </div>
    
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text : "Your text will appear here as a preview."}</p>
      </div>
    </>
  );
}