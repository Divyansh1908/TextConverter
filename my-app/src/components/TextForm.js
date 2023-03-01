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
    const handleLCClick = () =>
    {
        let newText = text.toLowerCase(); 
        setText(newText) 
    }
    const handleClearClick = () =>
    {
        let newText = ""; 
        setText(newText)
    }
    const handleOnChange= (event) => //for typing
    {
        // console.log("ON Change");
        setText(event.target.value); //allowing typing in the dialogue box
    }
    const handleCopy = () =>
    {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const changeStyle = () =>{
        var element = document.getElementById("myBox");
        element.style.fontFamily = "timesnewroman";
    }

    const extraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('Enter Text here');
    // text = "new text"; //wrong way
    // setText("new text"); //correct way
    return (
        <>
        <div className='container my-3' style={{color: props.mode === 'light'? 'black':'white'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'? 'white':'#6c7272', color: props.mode === 'light'? 'black':'white'}} onChange={handleOnChange} id="myBox" rows="17"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-success mx-2" onClick={handleLCClick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={changeStyle}>Times New Roman Font</button>
            <button className="btn btn-success mx-2" onClick={extraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'? 'black':'white'}}>
            <h2> Your Text Summary </h2>
            <p> <b>{text.split(" ").length} </b> words and <b>{text.length}</b> characters</p>
            <p> <b>{text.length*0.008}</b> Minutes to read</p>
            <h2> Preview </h2>
            <p>{text.length>0?text:"Enter Something in the Text Box to Preview"}</p>
        </div>
        </>
    )
}
