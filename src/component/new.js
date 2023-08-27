import '../component/new.css'
import bg from '../images/pic.jpg'

function New(){
    return (
        <div className="child">
            <img src={bg} alt="none"/>
            <h1 style={{color : 'green'}}>Welcome</h1>
        </div>
    )
}

export default New