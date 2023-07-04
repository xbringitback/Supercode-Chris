import Nav from '../components/Nav';

const Galerie = (props) => {
    return (
        <section>
            <Nav />
            <h1>Galerie</h1>
            <p>{props.text}</p>
        </section>
      );
}
 
export default Galerie;