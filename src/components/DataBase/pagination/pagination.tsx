import React from "react"
import "./pagination.scss"

type btnFun = {
    nextBtn: () => void
    backBtn: () => void
}

const Pagination:React.FC<btnFun> = ({nextBtn, backBtn}) => {
    return(
        <div className="pagination">
            <button onClick={backBtn}>назад</button>
            <button onClick={nextBtn}>вперед</button>
        </div>
    )
}

export default Pagination