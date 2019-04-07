import './CartTotal.css';

import React from 'react'

function CartTotal(props) {

  return (
    <div className="total">
        <h3>Total</h3>
        {
            
          isNaN(props.total) ? (function(){throw new Error ("can't be NaN")}())  : <p>{props.total}</p>
        }
      
    </div>
  )
}

export default CartTotal
