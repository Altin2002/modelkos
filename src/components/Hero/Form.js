import React from 'react'
import logo from '../../assets/logo.png'
import './form.scss'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>
                    <select>
                        <img src={logo} alt='logo' />
                        <option value="grapefruit">Female Models</option>
                        <option value="lime">Male Models</option>
                        <option value="coconut">Kids Models</option>
                        <option value="mango">Elderly Models</option>
                    </select>
                </label>
                <label>
                    <select>
                        <option value="grapefruit">Find location</option>
                        <option value="lime">Prishtina</option>
                        <option value="coconut">Gjilan</option>
                        <option value="mango">Vushtrri</option>
                    </select>
                </label>
                <input type="submit" value="Find model" />
            </form>
        </div>
    )
}

export default Form