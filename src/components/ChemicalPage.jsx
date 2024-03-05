import {React,useState,useEffect} from "react";
import {info} from "./data.jsx";
import {useLocation} from "react-router-dom";
import Error404 from "./Error404.jsx"
import "./page.css";
import {Helmet} from "react-helmet";

export default function ChemicalPage(){
    const [ready,setReady]=useState(false);
    const [arrs,setArrs]=useState([]);
    const [heads,setHeads]=useState([]);
    useEffect(()=>{
        console.log(loc.state.chem)
        if(loc.state.chem.length==34){
            let arr1=loc.state.chem.slice(1,7);//everything else
            let head1=info.headers.slice(1,7);
            arr1=arr1.concat(loc.state.chem.slice(16,18));
            head1=head1.concat(info.headers.slice(16,18));
            arr1=arr1.concat(loc.state.chem.slice(30,-1));
            head1=head1.concat(info.headers.slice(30));

            let arr2=loc.state.chem.slice(7,16);//chem form
            let head2=info.headers.slice(7,16);

            let arr3=loc.state.chem.slice(18,30);//func groups
            let head3=info.headers.slice(18,30);

            let func=[];
            for(let i=18;i<30;i++){
                if(loc.state.chem[i]=="Y"||loc.state.chem[i]=="y"){
                    func.push(info.headers[i])
                }
            }
            setArrs([arr1,arr2,arr3]);
            setHeads([head1,head2,head3]);
            setReady(true)
        }
        else{
            console.log("broken")
        }
    },[])
    const loc=useLocation();
    if(ready){
        return(
            <div>
                <Helmet>
                    <title>{loc.state.chem[0]}</title>
                </Helmet>
                <h2>{loc.state.chem[0]}</h2>
                <div className="mainPageDiv">
                    <div>
                        <h3>Basics:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    {heads[0].map((val,ind)=>(
                                        <td key={ind}>{val}</td>
                                    ))}
                                </tr>
                                <tr>
                                    {arrs[0].map((val2,ind2)=>(
                                        <td key={ind2}>
                                            {val2}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <h3>Chemical Formula:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    {heads[1].map((val,ind)=>(
                                        <td key={ind}>{val}</td>
                                    ))}
                                </tr>
                                <tr>
                                    {arrs[1].map((val2,ind2)=>(
                                        <td key={ind2}>
                                            {val2}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <h3>Functional Groups:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    {heads[2].map((val,ind)=>(
                                        <td key={ind}>
                                            {val}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    {arrs[2].map((val2,ind2)=>(
                                        <td key={ind2}>
                                            {val2}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        )
    }
    else{
        return(
            <Error404/>
        )
    }
    
}