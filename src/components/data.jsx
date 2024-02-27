import {React,useEffect,useState} from "react";
import axios from "axios";


const links=[
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo1a_GQNFVZkQ8o2LlfiJr9u8fRuE8rjKkxvvO6LQGvDF8cCKHIvi3piuSj8wpAQEiVHOWqHjsCZ2F/pub?gid=0&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo1a_GQNFVZkQ8o2LlfiJr9u8fRuE8rjKkxvvO6LQGvDF8cCKHIvi3piuSj8wpAQEiVHOWqHjsCZ2F/pub?gid=2016937024&single=true&output=tsv"
]
export const info={
    headers:[],
    data:[]
}
export function getData(){
    initData();
    function initData(){
        let ndata=[];
        links.forEach((l,ind)=>{
            axios.get(l)
                .then((response) => {
                    const parsed = parseCSV(response.data)
                    //ndata.push(parsed)
                    //console.log(parsed)
                    console.log(info.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        //console.log(ndata)
        info.data=ndata; 
        return true;
    }
    function parseCSV(txt) {
        const rows = txt.split(/\r?\n/);
        const nheaders = rows[0].split("\t");
        info.headers=nheaders;
        const ndata = [];
        for(let i=1;i<rows.length;i++){
            const rowData = rows[i].split('\t');
            //console.log(rowData)
            let good=true
            info.data.forEach((i)=>{
                if(i[0]===rowData[0]){
                    good=false
                }
            }) 
            if(good){
                info.data.push(rowData)
            }
        }
       
        return ndata;            
    }
}

export const classes=[
    "CHE121",
    "CHE122",
    "CHE202",
    "CHE225",
    "CHE326",
    "CHE327",
    "CHE334",
    "BIO328"
]

export const funcGroups=[
    "Alcohol",
    "Amine",
    "Carboxylic Acid",
    "Ketone",
    "Ester",
    "Aldehyde",
    "Ether",
    "Alkylbenzenes",
    "Amide",
    "Aromatic",
    "Alkyl Halide"
]