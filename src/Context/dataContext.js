import { createContext } from "react";

// Context is an interface / definition of the data
//should not have implementations meaning no logic within the function

const DataContext = createContext({
	//immutable data
	cart: [],
	addProductToCart: () => {},
	removeProductFromCart: () => {},
});
export default DataContext;
