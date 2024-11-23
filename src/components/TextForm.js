import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        //console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the text');
    //text = "New text";// worng way to chnage the text state
    //setText("new text");// correct way to change the text state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className ="button btn-primery" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
