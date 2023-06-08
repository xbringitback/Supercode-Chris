import { useParams } from "react-router-dom";
import Data from '../data/Data'
import Header from '../components/Header'

const CarDetails = () => {
    const idParams = useParams();
    console.log(idParams);

    const detailCars = Data.filter((el) => {
        return el.id.toString() === idParams.carid;
    })
    return ( 
        <>
        <Header />
        <section className="App">
            <h2>{detailCars[0].carModel}</h2>
            <h2>{detailCars[0].CarMake}</h2>
            <h2>{detailCars[0].CarYear}</h2>
        </section>
        </>

     );
}
 
export default CarDetails;