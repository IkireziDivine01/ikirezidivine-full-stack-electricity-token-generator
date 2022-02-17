import React from 'react'
import './buy.css'
var Buy = () =>  {
        return (
            <div className="contact-us">
                <p>Buy Electricity</p>
                <form action="#">
                    <label htmlFor="customerName">
                        Money amount
                        <em>*</em>
                    </label><input id="customerName" name="customerName" required type="text"/>
                    <label htmlFor="customerEmail">
                        meter number
                        <em>*</em>
                    </label><input id="customerPhone" name="customerPhone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" />
                    <button id="customerOrder">SUBMIT
                    </button>
                </form>
            </div>
        );
    }
export default Buy