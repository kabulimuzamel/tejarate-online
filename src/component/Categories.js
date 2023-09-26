
export function Categories({selectedCategory, setSelectedCategory}) {
    return (
        <div>
            <h2>Category: {selectedCategory}</h2>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value='spring'>Spring</option>
                <option value='summer'>Summer</option>
                <option value='fall'>Fall</option>
                <option value='winter'>Winter</option>
            </select>
        </div>
    )
}