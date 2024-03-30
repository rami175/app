import "./product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import { useState } from "react";
//import QuantityPicker from "./QuantityPicker";

function Product(props) {
	const [pcount, setcount] = useState(0);
	function add() {
		console.log("added ");
		// QuantityPicker(0);
		// setcount(0);
		// // setQuantity(0)
	}
	return (
		<div className='product'>
			<img src={constants.IMAGE_PATH + props.info.img} />
			<h6>{props.info.title}</h6>
			<span>Price: ${props.info.price * pcount}</span>
			<div className='button'>
				<QuantityPicker setcount={setcount}></QuantityPicker>
				<button onClick={add} className='btn btn-dark'>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default Product;
