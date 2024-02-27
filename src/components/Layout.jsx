import {React,useEffect,useLayoutEffect} from "react"
import {Outlet,Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ClassList from "./ClassList.jsx";
import {getData,info} from "./data.jsx"

export default function Layout(){
    useLayoutEffect(()=>{
        getData();
    },[])
    return(
        <div>
            <div>
                <Link to="">
                    <button>
                        home
                    </button>
                </Link>
                <Link to="AdvancedSearch">
                    <button>
                        Advanced Search
                    </button>
                </Link>
                <h1>Chemical Compounds at Cornell College</h1>
                <SearchBar/>
                <ClassList classes={info.classes}/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}