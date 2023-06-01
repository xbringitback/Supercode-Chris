import ItemList from "../components/items/ItemList";
import ProductList from"../components/products/ProductList";

const MainSection = () => {
    return (
        <section>
            <h1>My Todos</h1>
            <ItemList />
            <h1>SUPERSHOP</h1>
            <article>
                <ProductList />
            </article>
        </section>
    )
}
export default MainSection