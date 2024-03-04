import {React,useState,useEffect} from "react";
import {funcGroups} from "./data.jsx";
import {info} from "./data.jsx";
import "./page.css"

export default function AdvancedSearch(){
    const[disp,setDisp]=useState([])
    const[molRange,setMolRange]=useState([0,0])
    const[carRange,setCarRange]=useState([0,0])
    const[lpRange,setLpRange]=useState([0,0])
    const[func,setFunc]=useState([])
    useEffect(recalcDisp,[molRange,carRange,lpRange,func])
    function recalcDisp(){
        let dat=info.data.slice()
        if(func.length>0){
            let res=[]
            func.forEach((f)=>{
                dat.forEach((c)=>{
                    if(c.slice(18,30).indexOf(f)!==-1){
                        res.push(c)
                    }
                })
            })
            dat=res;
        }
        if((molRange[0]-molRange[1])!=0){
            let mres=[]
            dat.forEach((c)=>{
                let pi=parseInt(c[6]);
                if(pi<molRange[1]&&pi>molRange[0]){
                    mres.push(c);
                }
            })
            dat=mres;
        }
        if(dat.length!==info.data.length){
            setDisp(dat)
        }
    }
    function setMol(ind,evt){
        if(ind===1&&evt.target.value!==undefined){
            setMolRange([molRange[0],parseInt(evt.target.value)]);
        }
        else if(evt.target.value!==undefined){
            setMolRange([parseInt(evt.target.value),molRange[1]]);
        }
        else{
            console.log("Mol range event undefined")
        }
    }
    return(
        <div className="advMain">
            <div className="advCrit">
                <div className="funcParent">
                    <h4>Functional Groups</h4>
                    <div className="funcs">
                        {funcGroups.map((val,ind)=>(
                            <div key={ind}>
                                <input id={"func"+ind} type="checkbox"/>
                                <label htmlFor={"func"+ind}>{val}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="minMax">
                    <h4>Molar Weight</h4>
                    <input type="number" id="molMax" className="minMaxLabel" 
                        onChange={evt=>setMol(1,evt)}/>
                    <label htmlFor="molMax">Max</label>
                    <input type="number" id="molMin" className="minMaxLabel" 
                        onChange={evt=>setMol(0,evt)}/>
                    <label htmlFor="molMin">Min</label>
                </div>
                <div className="minMax">
                    <h4>Carbons</h4>
                    <input type="number" id="carMax" className="minMaxLabel"/>
                    <label htmlFor="carMax">Max</label>
                    <input type="number" id="carMin"className="minMaxLabel"/>
                    <label htmlFor="carMin" >Min</label>
                </div>
                <div className="minMax">
                    <h4>LogP</h4>
                    <input type="number" id="lpMax" className="minMaxLabel"/>
                    <label htmlFor="lpMax">Max</label>
                    <input type="number" id="lpMin"className="minMaxLabel"/>
                    <label htmlFor="lpMin" >Min</label>
                </div>
            </div>
            <div className="advDisp">
                {disp.map((val,ind)=>(
                    <p key={val}>
                        {val[0]}
                    </p>
                ))}
            </div>
        </div>
    )
}