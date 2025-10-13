import Home from './Home';
import About from './About';
import './Styling.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Navebuttons from "./Navebuttons";
function Approute(){
    
    return(
        <div >
        <Router>
            <Navebuttons/>
           <center><Link to="Home">Go to Home</Link><br/>
           <Link to="/About" state={{name:"Bhuvi"}}></Link>
            <br/></center>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            </Routes>
        </Router>
    </div>

    )
}

export default Approute;