import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Print(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then((res)=>{
            setData(res.data);
        })
        .catch(()=>{
            setData([])
        })

    },[])

    const {uid} = useParams();

    return (
        <>

            {
                data.map((ele)=>{
                    if(ele.id == uid){
                        return (
                            <div>
                                <br/><br/>
                                ID : {ele.id}<br/>
                                NAME : {ele.name}
                                <br/>
                                USERNAME : {ele.username}
                                <br/>
                                EMAIL : {ele.email}
                                <br/>
                                PHONE NUMBER : {ele.phone}
                                <br/>
                                

                             </div>
                        )
                    }
                })
            }

            

        </>
    )

}

export default Print