
export function Cloth({name, instock, price, clothes, setCloth, cartHandler, cartCounts, setCartCounts, setTotalPrice, category, clothObj}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Instock: {instock}</h4>
            <h4>Price: {price}</h4>
            <button onClick={(e) => cartHandler(e, clothObj, category, clothes, setCloth, cartCounts, setCartCounts, setTotalPrice, true)}>add To Cart</button>
            <button onClick={(e) => cartHandler(e, clothObj, category, clothes, setCloth, cartCounts, setCartCounts, setTotalPrice, false)}>remove From Cart</button>
        </div>
    )          
}