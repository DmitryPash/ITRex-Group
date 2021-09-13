import React, {useState} from "react";
import '../Search/Search.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [value, setValue] = useState('')
    const valueChange = event => {
        setValue(event.target.value)
    }


    return (
        <div className="wrapper">
            <div className="input__btn">
            <input 
                type="text" 
                onChange={valueChange}
                value={value}
                placeholder="Search"
            />
            <button 
            onClick={() => props.onSearch(value)}
            >Find Me</button>
            </div>
        </div>
    )
}