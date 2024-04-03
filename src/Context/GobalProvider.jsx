import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
	const [cart, setCart] = useState([]);

	function addProductToCart(prod) {
		console.log("Global function add");
		//add prod to cart
		let copy = [...cart];
		copy.push(prod);
		setCart(copy);
		console.log(cart);
		//setCart([...cart,prod])
	}

	function removeProductFromCart() {
		console.log("Global function remove");
	}

	return (
		<DataContext.Provider
			value={{
				cart: cart,
				addProductToCart: addProductToCart,
				removeProductFromCart: removeProductFromCart,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export default GlobalProvider;
