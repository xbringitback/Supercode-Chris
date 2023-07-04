import {NavLink} from "react-router-dom"

const Header = () => {
    return ( 
         <nav className="nav App">
               <h1>Super Carlist</h1>
               <NavLink to="/"> Home </NavLink>
         </nav>
     );
}
 
export default Header
