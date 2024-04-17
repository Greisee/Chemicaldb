import {React,useEffect,useLayoutEffect} from "react"
import {Outlet,Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ClassList from "./ClassList.jsx";
import {getData} from "./data.jsx"
import "./page.css"

export default function Layout(){
    useLayoutEffect(()=>{
        getData();
    },[])
    return(
        <div>
            <h1>Chemical Compounds at Cornell College</h1>
            <div className="aboveMain">
                <Link to="">
                    <button>
                        Home Page
                    </button>
                </Link>
                <Link to="AdvancedSearch">
                    <button>
                        Advanced Search
                    </button>
                </Link>
                <SearchBar/>
                <ClassList/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <footer>
                <span>
                    Produced by Rachael Adewusi, Thomas Cook, and Ingrid Peters
                    of the Cornell College Chemistry Department under supervision of Jai Shanata
                    <br/>
                    Site programmed by Torii Greiskalns
                </span>
            </footer>
        </div>
    )
}