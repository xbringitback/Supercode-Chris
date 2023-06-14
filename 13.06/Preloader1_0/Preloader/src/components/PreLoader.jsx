import './preloader.css'
import { useEffect } from 'react';
import { preLoaderAnim } from '../animations'

const PreLoader = () => {

useEffect (() => {
    preLoaderAnim()
}, []);

    return ( 
        <div className="preloader">
            <div className="texts-container">
                <span>Bing </span>
                <span>Bong </span>
                <span>Ching </span>
                <span>Chong </span>
            </div>

        </div>
     );
}
 
export default PreLoader;