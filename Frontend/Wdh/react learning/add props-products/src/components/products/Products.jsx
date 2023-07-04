const Product = (props) => {
    console.log(props);
    return (
        <div>
            <img src={props.product.img} alt={props.product.product} />
            <p>{props.product.name}</p>
            <p>{props.product.preis}</p>
            <button>Buy NOW</button>
        </div>
    )
}

export default Product