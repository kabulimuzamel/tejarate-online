
function Cart() {

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
    )
}