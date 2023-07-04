import Nav from "../components/Nav";
import blogData from "../components/Data";
import Article from "../components/Article";

const Blog = () => {
    return (  
        <>
        <Nav />
        <section>
            {blogData.map((item, i) => <Article articles={item} key={i} />)}
        </section>
        </>
    );
}
 
export default Blog;