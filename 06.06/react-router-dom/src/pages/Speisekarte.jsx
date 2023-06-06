import Nav from '../components/Nav'

const Speisekarte = (props) => {
    return (
        <section>
            <Nav />
            <h1>Speisekarte</h1>
            <p>{props.text}</p>
        </section>
      );
}
 
export default Speisekarte