
const cartSetters = (setCloth, setCartCounts, setTotalPrice, category, index, clothObj, indexCount, countObj, addOrRemove) => {
    setCloth(prev => {
        prev[category][index] = clothObj; 
        return prev;
    }); 
    setCartCounts(prev => {
        prev[indexCount] = countObj;
        if(indexCount < 0) return [countObj, ...prev];
            return prev;
    })
    setTotalPrice(prev => addOrRemove ? prev + parseInt(clothObj.price) : prev - parseInt(clothObj.price))
}

const cartConditionalHandler = (addOrRemove, clothObj, countObj, setCloth, setCartCounts, setTotalPrice, category, index, indexCount) => {
    if(addOrRemove ? clothObj.instock > 0 : countObj.count > 0) {
        addOrRemove ? countObj.count += 1 : countObj.count -= 1;
        addOrRemove ? clothObj.instock -= 1 : clothObj.instock += 1; 
        cartSetters(setCloth, setCartCounts, setTotalPrice, category, index, clothObj, indexCount, countObj, addOrRemove)
    } else {
        alert(addOrRemove ? `We are run out of ${clothObj.name}` : `You have 0 ${clothObj.name} in your cart`)
    }
}


export const cartHandler = (e, clothObj, category, clothes, setCloth, cartCounts, setCartCounts, setTotalPrice, addOrRemove) => {
    e.preventDefault()
    let countObj = {}
    const index = clothes[category].indexOf(clothObj);
    const indexCount = cartCounts.findIndex(cloth => cloth.name === clothObj.name);
    indexCount < 0 ? countObj = {name: clothObj.name, count: 0} : countObj = cartCounts[indexCount];
    cartConditionalHandler(addOrRemove, clothObj, countObj, setCloth, setCartCounts, setTotalPrice, category, index, indexCount)
}

export const searchHandler = (e, clothObj, setSearch, setSearchedCloth) => {
    e.preventDefault();
    setSearch(clothObj[1].name);
    setSearchedCloth(clothObj);
}