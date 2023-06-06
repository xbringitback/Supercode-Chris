import { NavLink } from "react-router-dom";

const Article = (props) => {
    const href = "/details/" + props.articles.id;
    return ( 
        <div>
            <img src={props.articles.img_url} alt={props.articles.title} />
            <h3>{props.articles.title}</h3>
            <NavLink to={href}>Read more</NavLink>
        </div>
     );
}
 
export default Article;