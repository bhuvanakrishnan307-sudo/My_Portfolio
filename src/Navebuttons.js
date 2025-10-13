import { useNavigate } from "react-router-dom";
function Navebuttons(){
    const navigate = useNavigate();
    return ( 
           
        <div>
             <button onClick={()=> navigate("/App2")}>Go To odd or even</button> <br/><br/>
                <button onClick={()=> navigate("/App8")}>Go To Student array</button> <br/>
                <button onClick={()=> navigate("/App6")}>Go To Login form</button> <br/>
                <button onClick={()=>navigate("/About",{state:{name:"Bhuvi"}})}>Click me</button>
            </div>

    )
};
export default Navebuttons;