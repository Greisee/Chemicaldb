import {React} from "react"
import {Outlet} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function Layout(){
    return(
        <div>
            <SearchBar/>
            <Outlet/>
        </div>
    )
}