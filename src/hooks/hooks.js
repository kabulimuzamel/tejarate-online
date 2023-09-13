import { useState } from "react";

export const useAddToCart = () => {
    const addToCart = (name, clothes, setClothes, cartCounts, setCartCounts, setTotalPrice) => {
        const index = clothes.findIndex((cloth) => cloth.name === name);
        const cloth = clothes[index];
        if(cloth.instock > 0) {
            const count = cartCounts[index];
            const price = parseInt(cloth.price);
            const newCloth = {...cloth, instock: cloth.instock - 1};
            const newCount = {...count, count: count.count + 1};
            clothes[index] = newCloth;
            cartCounts[index] = newCount;
            setClothes([...clothes]);
            setCartCounts([...cartCounts]);
            setTotalPrice(prev => prev + price)
         
        } else {
            alert(`We are run out of ${name}`)
        }
    }

    return [addToCart]
}

export const useRemoveFromCart = () => {
    const removeFromCart = (name, clothes, setClothes, cartCounts, setCartCounts, setTotalPrice) => {
        const index = clothes.findIndex((cloth) => cloth.name === name);
        const count = cartCounts[index];
        if(count.count > 0) {
            const cloth = clothes[index];
            const price = parseInt(cloth.price)
            const newCloth = {...cloth, instock: cloth.instock + 1};
            clothes[index] = newCloth
            setClothes([...clothes]);
            const newCount = {...count, count: count.count - 1};
            clothes[index] = newCloth;
            cartCounts[index] = newCount;
            setClothes([...clothes]);
            setCartCounts([...cartCounts]);
            setTotalPrice(prev => prev - price)
        } else {
            alert(`No more ${name} left in your cart`)
        }
    }

    return [removeFromCart]
}

export const useMenu = (setCartCounts) => {
    const [clothes, setCloth] = useState([]);

    if(!clothes.length) {
        fetch('clothData.json')
            .then(res => res.json())
            .then(res => {
                setCloth(res)
                res.forEach(obj => {
                    setCartCounts(prev => {
                      const objCount = { name: obj.name, count: 0 }
                      if (!prev.some(item => item.name === obj.name)) {
                        return [...prev, objCount]
                      }
                      return prev;
                    })
                  })
                  
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
