import { useEffect, useRef, useState } from "react"
import "./index.scss"
import DataType from "./typeIndex"
import Data from "./data/Data"
import Form from "./Form/form"
import Pagination from "./pagination/pagination"
import ItemDataCard from "./ItemDataCard/ItemDataCard"
import Search from "./search/search"


const DataBase:React.FC = () => {
    const [data, setData] = useState<DataType[]>([])
    const [dataFilter, setDataFilter] = useState<DataType[]>(data)
    const [card, setCard] = useState<DataType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [startCount, setStartCount] = useState<number>(0)
    const [endCount, setendCount] = useState<number>(8)
    const [valueItem, setValueItem] = useState<DataType>({
        id: 0,
        firstName: "",
        lastName: "", 
        email: "",
        phone: "",
        description: "",
        address : {
            streetAddress: "",
            city: "",
            state: "",
            zip: ""
        }
    })
    const inputRef = useRef<null|any>(null)

    useEffect(() => {
        const FethcData = async () => {
            try{
                const res = await fetch(" http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
                const result:DataType[] = await res.json()
                setData(result)
            } finally {
                setLoading(false)
            }
        }
        
        FethcData()
    }, [])

    useEffect(() => {
        setDataFilter(data);
    }, [data]);


    if (loading) {
        return(
            <div className="loader">
                <h1>загрузка...</h1>
            </div>
        )
    }

    const dataItem = dataFilter.slice(startCount, endCount).map((item, index:number) => {
        const BtnMoreDetailed = (id:number) => {
            const ItemElement = data.filter(itemElem => {
                return itemElem.id === id
            })
            setCard(ItemElement)
        }

        return <Data data={item} key={index} id={item.id} BtnMoreDetailed={BtnMoreDetailed} />
    })

    const Cards = card.map(card => {
        return <ItemDataCard card={card} />
    })

    const nextBtn = ():void => {
        if (endCount < data.length) {
            setStartCount(startCount + 8)
            setendCount(endCount + 8)
        } else {
            setendCount(data.length)
        }
    }

    const backBtn = ():void => {
        if (endCount !== 8) {
            setStartCount(startCount - 8)
            setendCount(endCount - 8)
        } else {
            setendCount(8)
        }
    }
    

    const firstNameInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.firstName = event.target.value
    }

    const lastName = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.lastName = event.target.value
    }

    const emailInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.email = event.target.value
    }

    const phoneInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.phone = event.target.value
    }

    const descriptionInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.description = event.target.value
    }

    const streetAddressInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.address.streetAddress = event.target.value
    }

    const cityInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.address.city = event.target.value
    }

    const stateInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.address.state = event.target.value
    }

    const zipInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        valueItem.address.zip = event.target.value
    }

    const SubmitData = (event: any):void => {
        if (valueItem.address.zip !== "" && valueItem.phone !== "" && valueItem.lastName !== "") {
            event.preventDefault()

            const DateTime:number = Date.now()
            valueItem.id = DateTime

            setData([valueItem, ...data])
            setValueItem({
                id: 0,
                firstName: "",
                lastName: "", 
                email: "",
                phone: "",
                description: "",
                address : {
                    streetAddress: "",
                    city: "",
                    state: "",
                    zip: ""
                }
            })

            inputRef.current.reset() 
        }
    }

    const NameSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const eventNameInput: string = event.target.value.toLowerCase()

        const filtrItems = data.filter(filterItem => {
            return filterItem.firstName.toLowerCase().includes(eventNameInput) || filterItem.lastName.toLowerCase().includes(eventNameInput)
        })

        if (eventNameInput === "") {
            setDataFilter(data)
        } else {
            setDataFilter(filtrItems)
        }
    }
    

    return(
        <div className="app">
            {Cards}
            <div className="rowDataForm">
                <div className="data">
                    {dataItem}
                </div>

                <Form 
                firstNameInput={firstNameInput} 
                lastName={lastName} 
                emailInput={emailInput} 
                phoneInput={phoneInput} 
                descriptionInput={descriptionInput}
                streetAddressInput={streetAddressInput}
                cityInput={cityInput}
                stateInput ={stateInput}
                zipInput={zipInput}
                SubmitData={SubmitData}
                inputRef={inputRef}
                />
            </div>
            <Search NameSearch={NameSearch}/>
            <Pagination nextBtn={nextBtn} backBtn={backBtn}/>
        </div>
    )
}

export default DataBase