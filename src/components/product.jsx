import "./product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import { useState, useContext } from "react";
import DataContext from "../Context/dataContext";
//import QuantityPicker from "./QuantityPicker";

function Product(props) {
	//const [pcount, setcount] = useState(0);
	const [quantity, setQuantity] = useState(0);

	let addProductToCart = useContext(DataContext).addProductToCart;

	function add() {
		let prod = { ...props.info };
		prod.quantity = quantity;
		addProductToCart(prod);
		//console.log(prod);
	}
	function quantityChange(qty) {
		setQuantity(qty);
	}
	function getTotal() {
		let total = props.info.price * quantity;
		return total.toFixed(2);
	}
	return (
		<div className='product'>
			<img src={constants.IMAGE_PATH + props.info.img} />
			<div className='title-box'>
				<h6>{props.info.title}</h6>
				<h7>(${props.info.price})</h7>
			</div>
			<span className='total'>Total: ${getTotal()}</span>
			<QuantityPicker
				//setcount={setcount}
				onChange={quantityChange}
			></QuantityPicker>
			<button className='btn btn-success' onClick={add}>
				add
			</button>
		</div>
	);
}

export default Product;
