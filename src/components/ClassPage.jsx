import {React,useEffect,useState} from "react";
import {info} from "./data.jsx";
import {useLocation,Link} from "react-router-dom";


export default function ClassPage(){
    const loc=useLocation();
    const[chems,setChems]=useState([]);
    useEffect(()=>{
        getChems();
    },[loc.state.class])
    function getChems(){
        let res=[];
        /*
        info.data.forEach((d,ind)=>{
            if(d[14].indexOf(loc.state.class)!=-1){
                res.push(ind)
            }
        })
        */
        setChems(res);
    }
    return(
        <div>
            {info.data.map((val,ind)=>(
                <Link to="/ChemicalPage" state={{pick:ind}}key={ind}>
                    <div>
                        {val[0]}
                    </div>
                </Link>
            ))}
        </div>
    )
}