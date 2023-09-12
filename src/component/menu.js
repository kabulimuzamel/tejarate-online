import { Cloth } from "./ClothDetail";
import { useMenu, useAddToCart, useRemoveFromCart } from "../hooks/hooks";
const { useState } = require("react");


export function Menu() {
    const [cart, setCart] = useState();
    const [clothes, setCloth] = useMenu(setCart);
    const [addToCart] = useAddToCart();
    const [removeFromCart] = useRemoveFromCart();
    
    return (
        <div>
            {
                clothes.map((cloth) => <Cloth key={cloth.name} {...cloth} setCloth={setCloth} clothes={clothes} addToCart={addToCart} removeFromCart={removeFromCart}/>)
            }
        </div>
    )
}