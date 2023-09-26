import { useState, useEffect } from "react";

export const useMenu = () => {
    const [clothes, setCloth] = useState(false);
    if(!clothes) {
        fetch('clothData.json')
            .then(res => res.json())
            .then(res =>  setCloth(res))
            .catch(err => console.log(err.message))  
    }
    return [clothes, setCloth]
}

export const useAutoComplete = (search, clothes) => {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        const lowCaseSearch = search.toLowerCase();
        const categoriesArr = Object.keys(clothes);
        const resultsArr = [];
        
        for (let i = 0; i < categoriesArr.length; i++) {
            const category = categoriesArr[i]
            for(let y = 0; y < clothes[category].length; y++) {
                const cloth = clothes[category][y];
                const clothSlicedPrefix = cloth.name.slice(0, search.length).toLowerCase();
                if(search !== '' && clothSlicedPrefix === lowCaseSearch) {
                    resultsArr.push([category, cloth])
                }
            }
        }
        setSearchResult(resultsArr);
    }, [search])
    return [searchResult];
}