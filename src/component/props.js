import '../component/new.css'
import bg from '../images/pic.jpg'

function New(obj){
    return (
        <div className="child">
            <img src={obj.img_path} alt="none"/>
            <h1 style={{color : 'green'}}>{obj.title}</h1>
        </div>
    )
}

export default New