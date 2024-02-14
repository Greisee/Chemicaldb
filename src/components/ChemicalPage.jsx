import {React} from "react";
import {data,headers} from "./data.jsx";
import {useLocation} from "react-router-dom";
import "./page.css";

export default function ChemicalPage(){
    const loc=useLocation();
    return(
        <div>
            <h2>{data[loc.state.pick][0]}</h2>
            <div className="mainPageDiv">
                <div>
                    <table>
                        <tbody>
                            {data[loc.state.pick].slice(1,9).map((val,ind)=>(
                                <tr key={"1-"+ind}>
                                    <td>{headers[ind]}</td>
                                    <td>{val}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <tbody>
                            {data[loc.state.pick].slice(10,14).map((val,ind)=>(
                                <tr key={"2-"+ind}>
                                    <td>{headers[ind+8]}</td>
                                    {val.map((val2,ind2)=>(
                                        <td key={ind2}>{val2}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td>Compound</td>
                                <td><img src={data[loc.state.pick][9]}></img></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    )
}