import axios from "axios";
import { Component } from "react";

class ClassEx extends Component{

    constructor(){

        super();
        this.state = {
            data: "Using state",
            data1 : [],
            load : true
        }

    }

    modify(){
        this.setState({
            data : "Modified using setState"
        })
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then((res)=>{
        
            this.setState({
                data1 : res.data,
                load : false
            })
        })

        .catch(()=>{
            this.setState({
                data1 : []
            })
        })
    }

    render(){
        return (
            <>
                <h1>Welcome </h1>
                <p>{this.props.name1}</p>
                <p>{this.state.data}</p>
                <button onClick={()=>this.modify()}>Change</button><br/>

            {this.state.load && "loading..."}

            {
                this.state.data1.map((ele)=>{
                    return <p>{ele.id} . {ele.username}</p>
                })
            }
            </>
        )

    }

}

export default ClassEx;