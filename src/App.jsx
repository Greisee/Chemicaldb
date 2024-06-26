import { useState } from 'react'
import MainPage from "./components/MainPage.jsx";
import Layout from "./components/Layout.jsx";
import Error404 from "./components/Error404.jsx";
import ChemicalPage from "./components/ChemicalPage.jsx";
import ClassPage from "./components/ClassPage.jsx";
import AdvancedSearch from "./components/AdvancedSearch.jsx";
import Structures from "./components/Structures.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Chemicaldb/'}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="ChemicalPage" element={<ChemicalPage/>}/>
          <Route path="ClassPage" element={<ClassPage/>}/>
          <Route path="AdvancedSearch" element={<AdvancedSearch/>}/>
          <Route path="Structures" element={<Structures/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
