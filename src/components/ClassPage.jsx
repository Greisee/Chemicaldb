import {React,useEffect,useState} from "react";
import {info} from "./data.jsx";
import {useLocation,Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import "./page.css";


export default function ClassPage(){
    const loc=useLocation();
    const[chems,setChems]=useState([]);
    useEffect(()=>{
        getChems();
    },[loc.state.class])
    function getChems(){
        let res=[];
        info.data.forEach((d,ind)=>{
            if(d[d.length-1]===loc.state.class){
                res.push(ind)
            }
        })
        setChems(res);
    }
    return(
        <div className="classPageMain">
            <Helmet>
                <title>{loc.state.class}</title>
            </Helmet>
            <h2>{loc.state.class}</h2>
            <div className="classPageSub">
                {chems.map((val,ind)=>(
                    <Link to="/ChemicalPage" state={{chem:info.data[val]}}key={ind}>
                        <div className="chemInClass">
                            {info.data[val][0]}
                        </div>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}