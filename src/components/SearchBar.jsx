import {React, useState,useEffect} from "react";

export default function SearchBar(){
    const[term,setTerm]=useState("");
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
                    {term/*replace with sort results*/}
                </div>
            )}
        </div>
    )
}