import React from 'react'
import {Link} from 'react-router-dom'


const Form = props =>{

    const {values, onInputChange, onCheckboxChange, onSubmit} = props

    return (
        <div>
            <h3>Build Your Own Pizza</h3>
            <img></img>
            <h2>Build Your Own Pizza</h2>
            <div>
                {/* Size Dropbox */}
                <label>Choice of Size
                    <select name='size' value={values.size} onChange={onInputChange}>
                        <option defaultValue=''>Please choose</option>
                        <option value='small'>small</option>
                        <option value='mid'>mid</option>
                        <option value='large'>large</option>
                    </select>
                </label>

                {/* Sauce Checkbox
                <label>Choice of Sauce
                    <label>Original Red
                        <input name='red' type="checkbox"></input>
                    </label>
                    <label>Garlic Ranch
                        <input name='ranch' type="checkbox"></input>
                    </label>
                    <label>BBQ sauce
                        <input name='bbq' type="checkbox"></input>
                    </label>
                    <label>Spinach Alfredo
                        <input name='alfredo' type="checkbox"></input>
                    </label>
                </label> */}
                
                {/* Toppings Checkbox */}
                <label>Add Toppings
                <label>Pepperoni
                        <input name='pepperoni' type="checkbox" checked={values.toppings.pepperoni} onChange={onCheckboxChange}></input>
                    </label>
                    <label>Sausage
                        <input name='sausage' type="checkbox" checked={values.toppings.sausage} onChange={onCheckboxChange}></input>
                    </label>
                    <label>Canadian Bacon
                        <input name='bacon' type="checkbox" checked={values.toppings.bacon} onChange={onCheckboxChange}></input>
                    </label>
                    <label>Spicy Italian Sausage
                        <input name='itSausage' type="checkbox" checked={values.toppings.itSausage} onChange={onCheckboxChange}></input>
                    </label>
                </label>

                {/* Substitute Checkbox
                <label>Choice of Substitute
                    <input name='substitute' type="checkbox"></input>
                </label> */}


                {/* Special Text */}
                <label>Special Instructions
                    <input name='special' type='text' value={values.special} onChange={onInputChange} placeholder='Anything else you&apos;d like to add'></input>
                </label>

                {/* Order button */}
                <button name='submit' onClick={onSubmit}>Add to Order</button>
            </div>
        </div>
    )
}

export default Form;