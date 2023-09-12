
export function Cloth({name, instock, price, clothes, setCloth, addToCart, removeFromCart}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Instock: {instock}</h4>
            <h4>Price: {price}</h4>
            <button onClick={() => addToCart(name, clothes, setCloth)}>add To Cart</button>
            <button onClick={() => removeFromCart(name, clothes, setCloth)}>remove From Cart</button>
        </div>
    )          
}