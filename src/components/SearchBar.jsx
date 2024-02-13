import {React, useState,useEffect} from "react";
import {data} from "./data.jsx";

export default function SearchBar(){
    const[term,setTerm]=useState("");
    const[res,setRes]=useState("");
    useEffect(()=>{
        console.log(term)
        //sort here
    },[term])
    const changeTerm=(event)=>{
        setTerm(event.target.value);
    }
    return(
        <div>
            <input type="text" onChange={changeTerm}/>
            {(term!="")&&(
                <div>
                    <div>
                        {term/*replace with sort results*/}
                    </div>
                    <div>
                        {term/*replace with sort results*/}
                    </div>
                </div>
            )}
        </div>
    )
}