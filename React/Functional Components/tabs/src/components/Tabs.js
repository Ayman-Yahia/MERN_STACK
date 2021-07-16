import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TabsInfo from './TabsInfo'
const Tabs = () => {
    
    const [content,setContent]=useState({})
    const btnInfo = [
        {
            label: "Tab 1",
            content: "Tab 1 content shows here.",
            textColor: "blue",
        },
        {
            label: "Tab 2",
            content: "Tab 2 content shows here.",
            textColor: "red",
        },
        {
            label: "Tab 3",
            content: "Tab 3 content shows here.",
            textColor: "green",
        }
    ]
    const handleTab=()=>{
        setContent(btnInfo[0])
    }
    const handleTab1=()=>{
        setContent(btnInfo[1])
    }
    const handleTab2=()=>{
        setContent(btnInfo[2])
    }
    
    return (
        <>
        
        <div className="container">
            <div className="buttons">
                <button  className="btn btn-primary but" onClick={handleTab}>Tab 1</button> 
                <button  className="btn btn-primary but" onClick={handleTab1}>Tab 2</button>
                <button  className="btn btn-primary but" onClick={handleTab2}>Tab 3</button>
            </div>
            
            <div className="content">
                <TabsInfo content={content} />
            </div>
        </div>
        </>
    )
}


export default Tabs;
