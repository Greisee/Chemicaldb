import {React} from "react";
import {funcGroups} from "./data.jsx";

export default function AdvancedSearch(){
    return(
        <div>
            {funcGroups.map((val,ind)=>(
                <div>
                    <input id={val+ind} type="checkbox"/>
                    <label for={val+ind}>{val}</label>
                </div>
            ))}
        </div>
    )
}