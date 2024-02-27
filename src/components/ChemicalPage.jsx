import {React} from "react";
import {info} from "./data.jsx";
import {useLocation} from "react-router-dom";
import "./page.css";

export default function ChemicalPage(){
    const loc=useLocation();
    return(
        <div>
            <h2>{info.data[loc.state.pick][0]}</h2>
            <div className="mainPageDiv">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                {info.headers.map((val,ind)=>(
                                    <td key={ind}>{val}</td>
                                ))}
                            </tr>
                            <tr>
                                {info.data[loc.state.pick].slice(0,31).map((val2,ind2)=>(
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