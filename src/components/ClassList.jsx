import {React,useEffect,useState} from "react";
import {info,classCount} from "./data.jsx";
import {Link} from "react-router-dom";

export default function ClassList(){
    const[ready,setReady]=useState(false);
    useEffect(()=>{
        checkInfo(0);
    },[])
    function checkInfo(limit){
        if(info.classes.length<classCount()&&limit<1000){
            setTimeout(()=>checkInfo(limit+1),1000);
        }
        else{
            setReady(true)
        }
    }
    if(ready){
        return(
            <div>
                <h3>Classes:</h3> 
                {info.classes.sort().map((val,ind)=>(
                    <Link to="/ClassPage"state={{class:val}}key={ind}>
                        <button >{val}</button>
                    </Link>
                ))}
            </div>
        ) 
    }
    else{
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    
}