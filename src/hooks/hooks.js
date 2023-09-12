import { useState } from "react";

export const useAddToCart = () => {
    const addToCart = (name, clothes, setClothes) => {
        const index = clothes.findIndex((cloth) => cloth.name === name);
        const cloth = clothes[index]
        const newCloth = {...cloth, instock: cloth.instock - 1};
        clothes[index] = newCloth
        setClothes([...clothes]);
    }

    return [addToCart]
}

export const useRemoveFromCart = () => {
    const removeFromCart = (name, clothes, setClothes) => {
        const index = clothes.findIndex((cloth) => cloth.name === name);
        const cloth = clothes[index]
        const newCloth = {...cloth, instock: cloth.instock + 1};
        clothes[index] = newCloth
        setClothes([...clothes]);
    }

    return [removeFromCart]
}

export const useMenu = () => {
    const [clothes, setCloth] = useState([]);

    if(!Object.keys(clothes).length) {
        fetch('clothData.json')
            .then(res => res.json())
            .then(res => {
                setCloth(res)
            })
            .catch(err => console.log(err.message))
    }
    return [clothes, setCloth]
}




// Custoom hooks should have extra logic and that is when they will be considered useful


// Making function small is part of debugging

// When it comes to custoom hooks we need to be specif in naming.

// Test Driven Development
    // Steps
        // 1. Write tests
        // 2. Write the code such that the test passes
        // 3. Refactor the code
