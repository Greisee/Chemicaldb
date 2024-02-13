import {React} from "react";
import SearchBar from "./SearchBar.jsx";
import {Link} from "react-router-dom"

export default function MainPage(){
    return(
        <div>
            Home Page
            <Link state={{pick:0}} to={"/ChemicalPage"}>acid</Link>
        </div>
    )
}