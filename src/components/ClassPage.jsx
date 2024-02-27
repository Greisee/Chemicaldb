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
        info.data.forEach((d,ind)=>{
            console.log(d[31])
            console.log(loc.state.class)
            if(d[32]==loc.state.class){
                res.push(ind)
            }
        })
        console.log(res)
        setChems(res);
    }
    return(
        <div>
            {chems.map((val,ind)=>(
                <Link to="/ChemicalPage" state={{pick:ind}}key={ind}>
                    <div>
                        {info.data[val][0]}
                    </div>
                </Link>
            ))}
        </div>
    )
}