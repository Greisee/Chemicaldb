import {React,useEffect,useState} from "react";
import {info} from "./data.jsx";
import {Link} from "react-router-dom";
import Error404 from "./Error404.jsx";

export default function ClassList(){
    const[ready,setReady]=useState(false);
    const[classes,setClasses]=useState([]);
    useEffect(()=>{
        checkInfo();
    },[])
    function checkInfo(){
        if(info.classes.length!==0){
            setReady(true)
        }
        else{
            setTimeout(checkInfo,1000)
        }
    }
    if(ready){
        return(
            <div>
                <h3>Classes:</h3> 
                {info.classes.map((val,ind)=>(
                    <Link to="/ClassPage"state={{class:val}}key={ind}>
                        <button >{val}</button>
                    </Link>
                ))}
            </div>
        ) 
    }
    else{
        return(
            <Error404/>
        )
    }
    
}