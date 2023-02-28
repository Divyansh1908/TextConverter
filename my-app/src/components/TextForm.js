import React, {useState} from 'react'
//STATES
// HOOKS - use feature of class without initializing a class
// useState - Modifiy state of a function based component
// text is the variable store - Enter text here and whenver I update the text use SetText, setCount
// whenver text is updated it will be updated everywhere, without reload page
// and change the the value using function not normally.

export default function TextForm(props) {
    const handleUpClick = () =>
    {
        // console.log("UP Click" + text); // taking log of the text
        let newText = text.toUpperCase(); //converting text to uppercase
        setText(newText) // setting the text once clicked
    }
    const handleOnChange= (event) => //for typing
    {
        // console.log("ON Change");
        setText(event.target.value); //allowing typing in the dialogue box

    }
    const [text, setText] = useState('Enter Text here');
    // text = "new text"; //wrong way
    // setText("new text"); //correct way
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="17"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
        </div>
    )
}
