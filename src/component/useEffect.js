import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Print from "./print";

function Effect() {

    const [data, setData] = useState([]);

    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')

            .then((res) => {
                setLoad(false);
                setData(res.data);
            })
            .catch(() => {
                setData([])
            })

    }, [])

    return (
        <>
            <h1>Server Call</h1>

            {load && "loading..."}

                {
                    data.map((ele) => {
                        return (
                            <Link to={`/contact/${ele.id}`} style={{ display: "block" }}>{ele.id}. {ele.username}</Link>

                        )
                    })
                }
                


        </>
    )

}

export default Effect