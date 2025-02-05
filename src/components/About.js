import React,{useState} from 'react'


export default function About(props) {

    const [myStyle,setMyStyle]=useState({
        color:props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
        backgroundColor:props.green?'#32CD32':(props.mode==='light'?'white':'black'),
    });
    
  return (
    <div className='container' style={{
        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
        backgroundColor: props.green ? '#32CD32' : (props.mode === 'light' ? 'white' : '#495057'),
    }}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}  >
                    <h2 className="accordion-header">
                    <button style={{
                        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
                        backgroundColor: props.green ? '#228B22' : (props.mode === 'light' ? 'white' : '#495057'),
                    }} className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{
                        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
                        backgroundColor: props.green ? '#32CD32' : (props.mode === 'light' ? 'white' : '#495057'),
                    }}  >
                        TextUtils gives you a way to analyze your text quickly
                    </div>
                    </div>
        </div>
        <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button style={{
                        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
                        backgroundColor: props.green ? '#228B22' : (props.mode === 'light' ? 'white' : '#495057'),
                    }} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Edit Your Text</strong> 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{
                        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
                        backgroundColor: props.green ? '#32CD32' : (props.mode === 'light' ? 'white' : '#495057'),
                    }} >
                        You can edit your text in any way you want
                    </div>
                    </div>
        </div>
        <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button style={{
                        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
                        backgroundColor: props.green ? '#228B22' : (props.mode === 'light' ? 'white' : '#495057'),
                    }}  className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Efficient Handling of Text</strong> 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{
                        color: props.green ? 'blue' : (props.mode === 'light' ? 'black' : 'white'),
                        backgroundColor: props.green ? '#32CD32' : (props.mode === 'light' ? 'white' : '#495057'),
                    }}  >
                        You can handle your text in any way you want
                    </div>
                    </div>
        </div>
        </div>
        
    </div>
  )
}
