import React, { useState } from 'react'

export default function Textarea(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLcClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (<>
        <div>
            <div class="mb-3 my-5">
                {/* <h1 >Type Here</h1> */}
                <textarea placeholder='Type here...' value={text} className="form-control" onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-success">Convert to UpperCase</button>
            <button type="button" onClick={handleLcClick} className="btn btn-success mx-3">Convert to LowerCase</button>
        </div>

        <div className="container">
           <h1 className='my-3'>Text Summary</h1> 
           <p>{text.split(' ').length} Words and {text.length} Characters</p>
           <h2>preview</h2>
           {text}
        </div>

        </>
    )
}
