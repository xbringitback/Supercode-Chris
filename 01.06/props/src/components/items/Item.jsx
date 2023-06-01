const Item = (props) => {
    console.log(props);
    return (
        <li>{props.artikel.toDo}</li>
    )
}

export default Item