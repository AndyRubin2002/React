import { Link } from "react-router-dom";


export function NavBarTwo(){
    return(
        <div>
            <h1>Hii I am Nav Bar</h1>
            <p><Link to={'/Home2'}>Home</Link></p>
            <p><Link to="/About2">About</Link></p>
            <p><Link to="/Contact2">Contact</Link></p>
        </div>
    );
}