import {React,useEffect,useState} from "react";
import axios from "axios";


const links=[
    //"https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1776806692&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=402436458&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1935199445&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=410433626&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1282116976&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=601279232&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1884025620&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=100774433&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1324941904&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1437155810&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=328292838&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=19939475&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=25952703&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=291207130&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=1514666763&single=true&output=tsv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXQglXMrGVW1oKhvQ2Uryt2sM0E4K4stdDl0Y2zXof4Ry2wUFHi7XGL5wPpYdBsHL7WTqBOgL5wsjI/pub?gid=203475841&single=true&output=tsv"
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
export function classCount(){
    return links.length;
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