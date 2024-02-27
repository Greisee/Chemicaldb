import {React,useEffect,useState} from "react";
import axios from "axios";


const links=[
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo1a_GQNFVZkQ8o2LlfiJr9u8fRuE8rjKkxvvO6LQGvDF8cCKHIvi3piuSj8wpAQEiVHOWqHjsCZ2F/pub?gid=0&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo1a_GQNFVZkQ8o2LlfiJr9u8fRuE8rjKkxvvO6LQGvDF8cCKHIvi3piuSj8wpAQEiVHOWqHjsCZ2F/pub?gid=2016937024&single=true&output=tsv"
]
export const info={
    headers:[],
    data:[],
    classes:[]
}
export function getData(){
    initData();
    function initData(){
        links.forEach((l,ind)=>{
            axios.get(l)
                .then((response) => {
                    parseCSV(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        return true;
    }
    function parseCSV(txt) {
        const rows = txt.split(/\r?\n/);
        const classNow=rows[0].split("\t")[0];
        if(info.classes.indexOf(classNow)==-1){
            info.classes.push(classNow)
        }
        if(info.headers.length===0){
            const nheaders = rows[2].split("\t");
            info.headers=nheaders;
        }
        for(let i=3;i<rows.length;i++){
            const rowData = rows[i].split('\t');
            rowData.push(classNow)
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
    }
}
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