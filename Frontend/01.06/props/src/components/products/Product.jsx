const Product = (props) => {
    console.log(props);
    return (
        <div>
            <img src={props.artikel.img} alt={props.artikel.product}/>
            <article>{props.artikel.name}</article>
            <article>{props.artikel.preis}</article>
            <button>Buy Now</button>
        </div>
    )
}

export default Product