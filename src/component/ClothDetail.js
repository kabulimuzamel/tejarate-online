
export function Cloth({name, price, instock, addToCart}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Instock: {instock}</h4>
            <h4>Price: {price}</h4>
            <button onClick={() => addToCart(name)}>add To Cart</button>
        </div>
    )          
}