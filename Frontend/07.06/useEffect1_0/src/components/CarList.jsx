import Data from '../data/Data'

import {Link} from 'react-router-dom';

const CarList = () => {
    return ( 
        <section className='grid'>
            {Data.map((el, i) => {
                return (
                    <div className='grid-item App' key={i}>
                        <h3>{el.CarMake}</h3>
                        <Link to={`/Data/${el.id}`}>Read More</Link>

                    </div>
                )
            })}
        </section>
     );
}
 
export default CarList;