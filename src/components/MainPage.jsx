import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function MainPage() {
    const [csv, setCSV] = useState([]);
    useEffect(() => {
        getCSV();
    }, [])
    const getCSV = () => {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTo1a_GQNFVZkQ8o2LlfiJr9u8fRuE8rjKkxvvO6LQGvDF8cCKHIvi3piuSj8wpAQEiVHOWqHjsCZ2F/pub?output=csv";
        axios.get(url)
            .then((response) => {
                const parsed = parseCSV(response.data)
                setCSV(parsed);
                console.log(parsed)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function parseCSV(txt) {
        const rows = txt.split(/\r?\n/);
        const headers = rows[0].split(",");
        const data = [headers];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split('"');
            let rowData2 = [];
            rowData.forEach((r, ind) => {
                if (ind % 2 === 0) {
                    let temp = r.split(",");
                    temp.forEach((d) => {
                        if (d!== "") {
                            rowData2.push(d)
                        }
                    })
                }
                else {
                    if (r !== "") {
                        rowData2.push(r)
                    }
                }
            })
            console.log(txt)
            console.log(rowData2)
            data.push(rowData2)
        }
        console.log(data)
        return data;            

    }
    return (
        <div>
            Home Page
            <table>
                <tbody>
                    {csv.map((val, ind) => (
                        <tr key={ind}>
                            {val.map((val2, ind2) => (
                                <td key={"2."+ind2}>{val2}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}