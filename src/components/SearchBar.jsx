import {React, useState,useEffect} from "react";
import {info} from "./data.jsx";
import {Link} from "react-router-dom"
import "./page.css"

export default function SearchBar(){
    const[term,setTerm]=useState("");
    const[disp,setDisp]=useState("");
    useEffect(()=>{
        findBest();
    },[term])
    const changeTerm=(event)=>{
        setTerm(event.target.value);
    }
    function findBest(){
        let res=[];
        info.data.forEach((d,ind)=>{
            if(d[0].substring(0,term.length).toLowerCase()===term.toLowerCase()){
                res.push(ind)
            }
        })
        setDisp(res);
    }
    function clearSearch(){
        setTerm("");
        setDisp("");
    }
    return(
        <div className="sbMain">
            <input type="text" onChange={changeTerm}/>
            {(term!="")&&(
                <div>
                    {disp.slice(0,5).map((val,ind)=>(
                        <Link state={{chem:info.data[val]}} to={"/ChemicalPage"} key={ind}>
                            <div onClick={clearSearch}>
                                {info.data[val][0]}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}