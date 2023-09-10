import { useCart, useCloth, useHandler } from "../hooks/hooks";

const { useState } = require("react");


export function Cards() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartNumber, setCartNumber] = useState({});
    const [clothObj, setCloth] = useCloth(setCartNumber);
    const [addRemoveClothbtn] = useHandler(cartNumber, setCartNumber, setCloth, setTotalPrice);

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