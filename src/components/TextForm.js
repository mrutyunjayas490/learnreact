import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
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
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter your text'></textarea>
            </div>
            <button className ="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className ="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-2">
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
//mx use to make distance in x-axis and my is use for y-axis
