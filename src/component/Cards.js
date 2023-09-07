const { useState } = require("react");


export function Cards() {
    const [clothObj, setCloth] = useState({});
    const [cartNumber, setCartNumber] = useState({});
    const [totalPrice, setTotalPrice] = useState(0)
    
    

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
  
    console.log(cartNumber)

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

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(cartNumber).map((clothData, index) => {
                            return (
                                <tr key={`table${index}`}>
                                    <td>{clothData}</td>
                                    <td>{cartNumber[clothData].count}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Price</th>
                            <th>${totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            {
                Object.keys(clothObj).map((cloth, index) => {
                    let instock = clothObj[cloth].instock;
                    let price = clothObj[cloth].price;
                    return (
                        <div key={index}>
                            <h2>{cloth}</h2>
                            <h4>Instock: {instock}</h4>
                            <h4>Price: {price}</h4>
                            <button onClick={(e) => addRemoveClothbtn(e, cloth, instock, price,  true)}>Add to Card</button>
                            <button onClick={(e) => addRemoveClothbtn(e, cloth, instock, price, false)}>Remove from Card</button>
                        </div>
                    )
                })
            }
        </div>
    )
}