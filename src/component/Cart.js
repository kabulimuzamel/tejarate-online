
export function Cart({ totalPrice, cartCounts }) {
    return (
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
                        cartCounts.map(item => {
                            return (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
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
    )
}