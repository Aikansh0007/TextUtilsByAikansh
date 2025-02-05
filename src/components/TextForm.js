import React,{useState} from 'react'  //this {useState} is a hook used for importing class based functions
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked-"+text.toUpperCase());
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
        
        
    }

    const handleClearClick=()=>{
        let newText=''
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text,setText]=useState('');
//   text="Aikansh" //wrong way to change state
//   setText("Aikansh")  //correct way to change the state
  return (
    <>
    <div className='container'>
        <h1 style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white')}}>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white'),
                                                                backgroundColor: props.green?'green':(props.mode==='light'?'white':'rgb(33 37 41)'),
        }}   placeholder='Enter Text Here' onChange={handleOnChange} id="myBox" rows="9"></textarea>
    </div>
    <button style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white'),
                                                                backgroundColor: props.green?'green':(props.mode==='light'?'white':'rgb(33 37 41)'),}} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Upper Case</button>
    <button style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white'),
                                                                backgroundColor: props.green?'green':(props.mode==='light'?'white':'rgb(33 37 41)'),
        }} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lower Case</button>
    <button style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white'),
                                                                backgroundColor: props.green?'green':(props.mode==='light'?'white':'rgb(33 37 41)'),
        }} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    <button style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white'),
                                                                backgroundColor: props.green?'green':(props.mode==='light'?'white':'rgb(33 37 41)'),
        }} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my8" style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white')}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*60*(text.split(' ').filter((element)=>{return element.length!==0}).length)} seconds read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
