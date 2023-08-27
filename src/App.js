// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import Home from "./component/home"
// import Contact from "./component/contact"
// import Effect from "./component/useEffect"
// import Print from "./component/print"
import {Provider} from "react-redux";
import store from "./component/store";
import WorkRedux from "./component/WorkRedux"


function App() {
  
  return (

    <Provider store={store}>
        <WorkRedux />
    </Provider>
    
  );

}

export default App;


/*

function App(){
  return (
    <div className="parent">
     <New title="Hello!! " img_path="https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0"/>
     <New title="I " img_path="https://th.bing.com/th/id/R.a36d890b2177626bd8f6e96395ec27c4?rik=cuwUhnt334Po5g&riu=http%3a%2f%2fwallpapercave.com%2fwp%2flKXsieb.jpg&ehk=UR2qHJTsSnMjLd1yJqgOEPZaE4q%2bD%2fZdinBQqG3BE1I%3d&risl=&pid=ImgRaw&r=0"/>
     <New title="am " img_path="https://cdn.wallpapersafari.com/21/31/wOSvcP.jpg"/>
     <New title="Swathi..." img_path="https://wallpaperaccess.com/full/4472020.jpg"/>
    </div>
  )
}

*/


/*
const data = [
  {
    title : "Hello!! ", 
    img_path : "https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0"
  },

  {
    title : "I ",
    img_path : "https://th.bing.com/th/id/R.a36d890b2177626bd8f6e96395ec27c4?rik=cuwUhnt334Po5g&riu=http%3a%2f%2fwallpapercave.com%2fwp%2flKXsieb.jpg&ehk=UR2qHJTsSnMjLd1yJqgOEPZaE4q%2bD%2fZdinBQqG3BE1I%3d&risl=&pid=ImgRaw&r=0"
  },

  {
    title : "am ", 
    img_path : "https://cdn.wallpapersafari.com/21/31/wOSvcP.jpg"
  },

  {
    title : "Swathi...", 
    img_path : "https://wallpaperaccess.com/full/4472020.jpg"
  }
]


<div className="parent">{
      data.map((obj,ind)=>{
        return<New
          key={ind}
          title={obj.title} 
          img_path={obj.img_path}
          />

      })
    }
      
    </div>
*/


/*
<BrowserRouter>
      <Link to="/" style={{marginRight : "20px"}}>Home</Link>
      <Link to="/contact">Contact</Link><br/>
      
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/contact/:uid" element={<Print />}></Route>
      </Routes>
    </BrowserRouter>
*/