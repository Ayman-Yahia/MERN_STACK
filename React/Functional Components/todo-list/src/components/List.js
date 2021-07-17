import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItems from './ListItems';
const List = () => {
    const [list, setList] = useState([])
    const[name,setName]=useState()
    // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
        setList(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, [])
  
  // run every time our list state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(list))
  }, [list])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setList(prev => prev.concat({name, check:false,id:Date.now()}))
        setName("")
    }
    return (
        <div className="s">
            <form onSubmit={handleSubmit}>
                <div className="row m">
                <input className="input-group-text" value={name} type="text" onChange={e => setName(e.target.value)} />
                
                </div><br></br>
                <button className="btn btn-primary">Add</button>
                
            </form>
            <div className="content">
                <ListItems  list={list } setList={setList} />
            </div>
            
        </div>
    )
}

export default List
