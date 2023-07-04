import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Speisekarte">SpeiseKarte</NavLink>
            <NavLink to="/Kontakt">Kontakt</NavLink>
            <NavLink to="/Oeffnungszeiten">Öffnungszeiten</NavLink>
            <NavLink to="/Galerie">Galerie</NavLink>
        </nav>
      );
}
 
export default Nav;