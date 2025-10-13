
import { useLocation } from "react-router-dom";
function About(){
    const location = useLocation();
    const{name}=location.state || {};
    return(
        <div>
    
        <p>Name:{name || "Guest"}</p>
        

    </div>

    )
    
}

export default About;
