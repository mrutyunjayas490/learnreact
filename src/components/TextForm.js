import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase","success")
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase","success")
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear","success")
    }

    const handleOnChange = (event)=>{
        //console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //text = "New text";// worng way to chnage the text state
    //setText("new text");// correct way to change the text state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter your text'></textarea>
            </div>
            <button className ="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className ="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className ="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something into the text box to preview it here"}</p>
    </div>
    </>
  )
}

//mx use to make distance in x-axis and my is use for y-axis
