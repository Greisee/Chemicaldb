import {React,useEffect,useState} from "react";
import {data} from "./data.jsx";
import {useLocation,Link} from "react-router-dom";


export default function ClassPage(){
    const loc=useLocation();
    const[chems,setChems]=useState([]);
    useEffect(()=>{
        getChems();
    },[loc.state.class])
    function getChems(){
        let res=[];
        data.forEach((d,ind)=>{
            if(d[14].indexOf(loc.state.class)!=-1){
                res.push(ind)
            }
        })
        setChems(res);
    }
    return(
        <div>
            {chems.map((val,ind)=>(
                <Link to="/ChemicalPage" state={{pick:ind}}key={ind}>
                    <div>
                        {data[val][0]}
                    </div>
                </Link>
            ))}
        </div>
    )
}