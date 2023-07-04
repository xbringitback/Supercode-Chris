import {NavLink} from "react-router-dom";


import Nav from "../components/Nav";

const Home = () => {
    return ( 
        <>
        <header>
            <Nav />
        </header>
        <div>
            <h2>Welcome to my simple Blog</h2>
            <NavLink to="Blog">Go to articles</NavLink>
        </div>
        </>

     );
}
 
export default Home ;