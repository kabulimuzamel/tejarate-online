import { Cloth } from "./ClothDetail";
import { Cart } from "./Cart";
import { useMenu, useAddToCart, useRemoveFromCart } from "../hooks/hooks";
const { useState } = require("react");


export function Menu() {
    const [cartCounts, setCartCounts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [clothes, setCloth] = useMenu(setCartCounts);
    const [addToCart] = useAddToCart();
    const [removeFromCart] = useRemoveFromCart();
    const props = {
        totalPrice, 
        setTotalPrice,
        clothes,
        setCloth,
        cartCounts, 
        setCartCounts,
        addToCart,
        removeFromCart
    }
    
    return (
        <div>
            <Cart totalPrice={totalPrice} cartCounts={cartCounts} />
            {
                clothes.map((cloth) => <Cloth key={cloth.name} {...cloth} {...props} />)
            }
        </div>
    )
}

