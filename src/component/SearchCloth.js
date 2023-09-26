import { useState } from "react";
import { searchHandler } from "../functions/functions"
import { Cloth } from "./ClothDetail";
import { useAutoComplete } from "../hooks/hooks";


export function SearchCloth({ clothes, props }) {
    const [search, setSearch] = useState('');
    const [searchedCloth, setSearchedCloth] = useState([])
    const [searchResult] = useAutoComplete(search, clothes);

    return (
        <div>
            <form>
                Search for the cloth you want
                <input value={search} onChange={e => setSearch(e.target.value)} />
            </form>
            <ul>
                { searchResult.map((clothObj, index) => (<li style={{textDecoration: 'underline'}} key={`Search${index}`} onClick={e => searchHandler(e, clothObj, setSearch, setSearchedCloth)}>{clothObj[1].name}</li>)) }
            </ul>
            <div>
                <h3>Result for {search}</h3>
                { searchedCloth.length !== 0 && <Cloth {...searchedCloth[1]} clothObj={searchedCloth[1]} category={searchedCloth[0]} {...props}/> }
            </div>
        </div>
    )
}