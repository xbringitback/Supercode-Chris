import Nav from '../components/Nav'

const Kontakt = (props) => {
    return (
        <section>
            <Nav />
            <h1>Kontakt</h1>
            <p>{props.text}</p>
        </section>
      );
}
 
export default Kontakt;