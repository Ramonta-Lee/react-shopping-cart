import React, {useContext} from "react";
import {CartContext} from "../contexts/CartContext";

const Item = props => {
			const { removeItem } = useContext(CartContext);
			
  const { title, price, image, id } = props.item;

  return (
    <div className="shopping-cart_item">
      <img src={image} alt={`${title} book`} />

      <div>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <button onClick={() => removeItem(id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
