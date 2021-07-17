import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListItems = (props) => {
    const {list}=props
    const{setList}=props

    const handleCheck=(id)=>{
        const r=list.findIndex(p=>p.id===id)
        const s=[...list]
        s[r].check=!(s[r].check)
        setList(s)
    }

    return (
        
            list.map((li)=>{
                    return(
                        li.check?
                        <li><strike>{li.name}</strike><input type="checkbox" checked={li.check} onChange={()=> handleCheck(li.id)}/> 
                        <button className="btn btn-danger"  onClick={()=>setList(prev => prev.filter(p => p.id !== li.id))}>Delete</button></li>:
                        <li >{li.name} .
                        
                        <input type="checkbox" checked={li.check} onChange={()=> handleCheck(li.id)}/> 
                       <button className="btn btn-danger"  onClick={()=>setList(prev => prev.filter(p => p.id !== li.id))}>Delete</button></li>
                    )
                        
                    })
                    
              
            
    )
            
    
}

export default ListItems
