import React from "react"
import "./ItemDataCard.scss"
import DataType from "../typeIndex"

interface ItemDataCardType {
    card: DataType

}

const ItemDataCard:React.FC<ItemDataCardType> = ({card}) => {
    return(    
        <div className="Card">
            <div className="headCard">
                <h1>{card.firstName} {card.lastName}</h1>
                <p>Email: { card.email}</p>
                <p>Phone: { card.phone}</p>
                <p>Description: { card.description}</p>
            </div>
            <div className="BodyCard">
                <p>StreetAddress: { card.address.streetAddress}</p>
                <p>City: { card.address.city}</p>
                <p>State: { card.address.state}</p>
                <p>Zip: { card.address.zip}</p>
            </div>
        </div>
    )
}

export default ItemDataCard