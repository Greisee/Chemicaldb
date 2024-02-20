import {React, useState,useEffect} from "react";
import {data} from "./data.jsx";
import {Link} from "react-router-dom"

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
        data.forEach((d,ind)=>{
            if(d[0].substring(0,term.length).toLowerCase()===term.toLowerCase()){
                res.push(ind)
            }
        })
        setDisp(res);
    }
    return(
        <div>
            <input type="text" onChange={changeTerm}/>
            {(term!="")&&(
                <div>
                    {disp.slice(0,5).map((val,ind)=>(
                        <Link state={{pick:val}} to={"/Chemicaldb/ChemicalPage"} key={ind}>
                            <div>
                                {data[val][0]}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}