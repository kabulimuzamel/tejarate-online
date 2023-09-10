import { useState } from "react";

export function addToCart() {
    const addToCart = (name, clothes, setClothes) => {
        const index = clothes.findIndex((cloth) => cloth.name === name);
        const cloth = clothes[index]
        const newCloth = {...cloth, instock: cloth.instock - 1};
        clothes[index] = newCloth
        setClothes([...clothes]);
    }

    return [addToCart]
}

export function useCloth(setCartNumber) {
    const [clothObj, setCloth] = useState({})

    if(!Object.keys(clothObj).length) {
        fetch('clothData.json')
            .then(res => res.json())
            .then(res => {
                setCloth(res)
                Object.keys(res).forEach(clothName => {
                    setCartNumber(prev => {
                        const newObj = {...prev};
                        newObj[clothName] = {
                            count: 0,
                        }
                        return newObj
                    })
                })
            })
            .catch(err => console.log(err.message))
    }

    return [clothObj, setCloth]
}

// Custoom hooks should have extra logic and that is when they will be considered useful

export function useCart() {
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartNumber, setCartNumber] = useState({});
    
    return [totalPrice, setTotalPrice, cartNumber, setCartNumber];
}

// Making function small is part of debugging

// When it comes to custoom hooks we need to be specif in naming.

// Test Driven Development
    // Steps
        // 1. Write tests
        // 2. Write the code such that the test passes
        // 3. Refactor the code

export function useHandler(cartNumber, setCartNumber, setCloth, setTotalPrice) {
    const addRemoveClothbtn = (e, cloth, instock, price, addOrRem) => {
        e.preventDefault();
    
        let priceInt = parseInt(price);
        let instockInt = parseInt(instock);

        if(addOrRem){
            if(instockInt > 0) {
                setCartNumber(prev => {
                    const newObj = {...prev};
                    newObj[cloth].count += 1;
                    return newObj;
                });
                setTotalPrice(prev => prev + priceInt)
                setCloth(prev => {
                    const newObj = {...prev};
                    newObj[cloth].instock -= 1;
                    return newObj
                })
            } else {
                alert(`We are run out of ${cloth}`)
            }
        } else {
            if(parseInt(cartNumber[cloth].count) > 0) {
                setCartNumber(prev => {
                    const newObj = {...prev};
                    newObj[cloth].count -= 1;
                    return newObj;
                });
                setTotalPrice(prev => prev - priceInt)
                setCloth(prev => {
                    const newObj = {...prev};
                    newObj[cloth].instock += 1
                    return newObj
                })
            } else {
                alert(`You do not have ${cloth} in your cart anymore`)
            }

        }
    }

    return [addRemoveClothbtn];
}