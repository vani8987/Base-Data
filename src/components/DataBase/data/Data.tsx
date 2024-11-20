import React from "react"
import DataType from "../typeIndex"
import "./Data.scss"

interface DataProps {
    data: DataType;
    BtnMoreDetailed: (id:number) => any
    id: number
}


const Data:React.FC<DataProps> = ({data, BtnMoreDetailed, id}) => {
    return(
        <div className="containerData">
            <h1>{data.firstName} {data.lastName}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <button onClick={() => BtnMoreDetailed(id)}>показать подробнее</button>
        </div>
    )
}

export default Data