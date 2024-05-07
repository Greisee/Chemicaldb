import {React,useState} from "react"
import "./page.css"
import Error404 from "./Error404.jsx"
import img0 from "./structures/0.png"
import img1 from "./structures/1.png"
import img2 from "./structures/2.png"
import img3 from "./structures/3.png"
import img4 from "./structures/4.png"
import img5 from "./structures/5.png"
import img6 from "./structures/6.png"
import img7 from "./structures/7.png"
import img8 from "./structures/8.png"
import img9 from "./structures/9.png"
import img10 from "./structures/10.png"
import img11 from "./structures/11.png"
import img12 from "./structures/12.png"
import img13 from "./structures/13.png"
import img14 from "./structures/14.png"
import img15 from "./structures/15.png"


export default function Structures(){
    const image=[img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15]
    const[images,setImages]=useState([])
    function getImagePaths() {
        let imgs = [];
        for(let i=0;i<16;i++){
            imgs.push("./"+i+".png")
            console.log(imgs[i])
        }
        console.log(imgs)
        setImages(imgs);
      }
      if(images.length>0){
        return(
            image.map((val,ind)=>(
                <div>
                    <img src={val}/>
                </div>
            ))
        )
      }
      else{
        getImagePaths()
        return(
            <div>
                <Error404/>
            </div>
        )
      }
    
}