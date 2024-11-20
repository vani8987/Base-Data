import React from "react"
import "./search.scss"

interface SearchType {
    NameSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search:React.FC<SearchType> = ({NameSearch}) => {
    return(
        <div className="Search">
            <input type="text" placeholder="Введите имя: " onChange={NameSearch}/>
        </div>
    )
}

export default Search