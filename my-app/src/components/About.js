import React, { useState } from 'react'


export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    //Using this to make the dark mode match the rest of the application
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#2b5c69':'white'
  }  
  return (
    <div className='container'>
        <h2 className='my-3' style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                A text analyzer app is a useful tool for transforming text in various ways. This app can perform several operations on the text, such as converting it to uppercase or lowercase, clearing the text of any unwanted characters, changing fonts, and removing extra spaces. The user can input any text they wish to analyze, and then choose from a variety of available operations to transform the text according to their needs. The app can be used for a range of purposes, such as preparing documents for printing, creating clean copies of text, or transforming text for use in different types of applications or platforms. The app's user-friendly interface makes it easy to use for anyone, regardless of their technical skills.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Along with the various text transformations, it provides additional useful features such as a character and word count of the text provided. This feature can be especially helpful for writers who need to adhere to specific character or word count requirements. Additionally, the app calculates the approximate time it will take to read the entire text, which is useful for readers who want to know how long a piece of writing will take them to complete. All these features make the text analyzer app an essential tool for anyone who works with text on a regular basis at no additional cost.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Our app is compatible with all major web browsers, allowing you to access it from any device. Try it now and see how it can simplify your text transformation needs!
                </div>
                </div>
            </div>
        </div>    
    </div>
  )
}
