import {React} from "react";
import {classes} from "./data.jsx";
import {Link} from "react-router-dom";

export default function ClassList(){
    return(
        <div>
            <h3>Classes:</h3>
            {classes.map((val,ind)=>(
                <Link to="/Chemicaldb/ClassPage"state={{class:val}}key={ind}>
                    <button >{val}</button>
                </Link>
            ))}
        </div>
    )
}