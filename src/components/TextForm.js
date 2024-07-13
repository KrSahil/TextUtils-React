import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text); //here we can access text so we can make any changes here
        let newText = text.toUpperCase();
        //setText("You have clicked on handleUpClick");
        setText(newText);
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText] = useState("Enter your text here");
    //text = "new text"; //wrong way to change the state
    //setText("Enter your text here now");
    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
            </div>
            <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className = "btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>

        </div>
        <div className = "container my-5">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes to read the text</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
//rows = 8 increase the text area
//my-3 = margin (social distancing)
//mx-2 = to create some distance between the buttons