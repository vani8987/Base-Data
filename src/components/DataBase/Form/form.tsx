import React from "react"
import "./form.scss"

type form = {
    firstNameInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    lastName: (event: React.ChangeEvent<HTMLInputElement>) => void,
    emailInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    phoneInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    descriptionInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    streetAddressInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    cityInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    stateInput: (event: React.ChangeEvent<HTMLInputElement>) => void, 
    zipInput: (event: React.ChangeEvent<HTMLInputElement>) => void, 
    SubmitData: (event: any) => void, 
    inputRef: any
}

const Form:React.FC<form> = ({firstNameInput, lastName, emailInput, phoneInput, descriptionInput, streetAddressInput, cityInput, stateInput, zipInput, SubmitData, inputRef}) => {
    return(
        <form className="Form" ref={inputRef}>
            <input type="Text" placeholder="firstName"  required onChange={firstNameInput}/>
            <input type="text" placeholder="lastName" required onChange={lastName}/>
            <input type="email" placeholder="email" required onChange={emailInput}/>
            <input type="phone" placeholder="phone" required onChange={phoneInput}/>
            <input type="text" placeholder="description" required onChange={descriptionInput}/>
            <input type="text" placeholder="streetAddress" required onChange={streetAddressInput}/>
            <input type="text" placeholder="city" required onChange={cityInput}/>
            <input type="text" placeholder="state" required onChange={stateInput}/>
            <input type="text" placeholder="zip" required onChange={zipInput}/>
            <button onClick={SubmitData}>отправить</button>     
        </form>
    )
}

export default Form