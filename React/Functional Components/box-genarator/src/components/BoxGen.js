import React, { useState } from 'react';
import DisplayBoxes from './DisplayBoxes';
function BoxGen(){

    const [ boxes, setBoxes] = useState([]);
    return(
        <>
        <div className="box">
        <GenBox setBoxes={setBoxes}/>
        <DisplayBoxes boxes={boxes}/>

        </div>
        
        </>
    )
}
function GenBox(props){
    const[color,setColor]=useState()
    const[width,setWidth]=useState()
    const[height,setHeight]=useState()
    function handleSubmit(e) {
        e.preventDefault()
        props.setBoxes(prev => prev.concat({color,width,height}))
        setColor("")
        setHeight("")
        setWidth("")
    }

    return(
        <form onSubmit={handleSubmit} className="formUser">
          <h1>Generate a Box</h1>
            <div className="form-group">
                <input value={color} type="text" placeholder="Choose a Color" onChange={e => setColor(e.target.value)} />
            </div><br />
            <div className="form-group">
                <input value={width} type="text" placeholder="Choose the width of the Box" onChange={e => setWidth(e.target.value)} />
            </div><br />
            <div className="form-group">
                <input value={height} type="text" placeholder="Choose the height of the Box" onChange={e => setHeight(e.target.value)} />
            </div><br />
            <button>Grnarate a Box</button>
        </form>
    )
}
export default BoxGen;