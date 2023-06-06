import Nav from '../components/Nav'

const Oeffnungszeiten = (props) => {
    return (
        <section>
            <Nav />
            <h1>Öffnungszeiten</h1>
            <p>{props.text}</p>
        </section>
      );
}

export default Oeffnungszeiten;