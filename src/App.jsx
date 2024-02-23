import { useState } from 'react'
import MainPage from "./components/MainPage.jsx";
import Layout from "./components/Layout.jsx";
import Error404 from "./components/Error404.jsx";
import ChemicalPage from "./components/ChemicalPage.jsx";
import ClassPage from "./components/ClassPage.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="ChemicalPage" element={<ChemicalPage/>}/>
          <Route path="ClassPage" element={<ClassPage/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
