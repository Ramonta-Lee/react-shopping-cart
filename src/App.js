import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  console.log("cart", cart);
  const addItem = item => {
    // add the given item to the cart
		
				return setCart([...cart, {item}]);
		}
  
		console.log("setcart to state", cart);
		
		const removeItem = id => {
			setCart(
				cart.filter(item => {
					return item.item.id !== id;
				})
			)
		}


  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart">
            {" "}
            <ShoppingCart cart={cart} />}
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
