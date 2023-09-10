import { useCart, useCloth, useHandler } from "../hooks/hooks";
import { Cloth } from "./ClothDetail";
const { useState } = require("react");

const useMenu = () => {
    const [clothes, setClothes] = useState([
        {name: 'T-Shirt', price: 20, instock: 4},
        {name: 'Jeans', price: 10, instock: 2},
    ]);
    const addToCart = (name, clothes, setClothes) => {
        const index = clothes.findIndex((cloth) => cloth.name === name);
        const cloth = clothes[index]
        const newCloth = {...cloth, instock: cloth.instock - 1};
        clothes[index] = newCloth
        setClothes([...clothes]);
    }

    return [clothes, addToCart]
}

function Cloth({name, price, instock, addToCart}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Instock: {instock}</h4>
            <h4>Price: {price}</h4>
            <button onClick={() => addToCart(name)}>add To Cart</button>
        </div>
    )          
}

export function Menu() {
    const [clothes, addToCart] = useMenu();
    return (
        <div>
            {
                clothes.map((cloth) => <Cloth key={cloth.name} {...cloth} addToCart={addToCart}/>)
            }
        </div>
    )
}