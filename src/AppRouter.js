import App2 from "./App2";
import App6 from "./App6";
import App8 from "./App8";
import './Styling.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function AppRouter() {
    return(
        <div>
            <h2>Welcome!</h2>   
            <Router><center>
                <Link to="App2">ODD OR EVEN</Link><br/>
                <Link to="App6">LOGIN FORM</Link><br/>
                <Link to="App8">STUDENT ARRAY </Link><br/>
                </center>
                <Routes>
                    <Route path="/App2" element={<App2 />} />
                    <Route path="/App6" element={<App6 />} />
                    <Route path="/App8" element={<App8 />} />
                </Routes>
            </Router>
        </div>
    )
};
export default AppRouter;