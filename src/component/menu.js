import { Cloth } from "./ClothDetail";
import { Cart } from "./Cart";
import { useMenu } from "../hooks/hooks";
import { cartHandler } from "../functions/functions";
import { Categories } from "./Categories";
import { SearchCloth } from "./SearchCloth";
const { useState } = require("react");

export function Menu() {
    const [cartCounts, setCartCounts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('winter')
    const [totalPrice, setTotalPrice] = useState(0);
    const [clothes, setCloth] = useMenu();

    const props = {
        totalPrice, 
        setTotalPrice,
        clothes,
        setCloth,
        cartCounts, 
        setCartCounts,
        cartHandler
    } 
    
    return (
        <div>
            <Cart totalPrice={totalPrice} cartCounts={cartCounts} />
            <SearchCloth clothes={clothes} props={props}  />
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            { Object.keys(clothes).length && clothes[selectedCategory].map(cloth => <Cloth key={cloth.name} clothObj={cloth} {...cloth} category={selectedCategory} {...props}/>) }
        </div>
    )
}

