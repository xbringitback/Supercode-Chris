import Item from './Item'

const ItemList = () => {
    const itemArray = [
        {
            toDo: "Bug Grocery"
        },
        {
            toDo: "Send Email"
        },
        {
            toDo: "Finish Assignment"
        },
        {
            toDo: "Write Blog"
        },
    ]
    return (
        <>
        <ul>
            {itemArray.map((item, i ) => <Item artikel={item} key={i} />)}
        </ul>
        </>

    )
}

export default ItemList