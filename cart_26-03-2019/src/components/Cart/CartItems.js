import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CartItems.css';

const CartItems = props => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.quantity}</td>
      <td>{props.data.price}</td>
      <td>{(props.data.price)*(props.data.quantity)}</td>
      <td>
        <FontAwesomeIcon className="font-awesome-icon" onClick={()=>props.handleMinus(props.data.index)} icon="minus" />
      </td>
      <td>
        <FontAwesomeIcon className="font-awesome-icon" onClick={()=>props.handlePlus(props.data.index)} icon="plus" />
      </td>
      <td>
        <FontAwesomeIcon className="font-awesome-icon" onClick={()=>props.handleDelete(props.data.index)} icon="trash" />
      </td>
    </tr>
  );
};

export default CartItems;
