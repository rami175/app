import "./product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import { useState } from "react";
//import QuantityPicker from "./QuantityPicker";

function Product(props) {
	const [pcount, setcount] = useState(0);

	return (
		<div className='product'>
			<img src={constants.IMAGE_PATH + props.info.img} />
			<div className='title-box'>
				<h6>{props.info.title}</h6>
				<h7>(${props.info.price})</h7>
			</div>
			<span>Price: ${props.info.price * pcount}</span>
			<QuantityPicker setcount={setcount}></QuantityPicker>
		</div>
	);
}

export default Product;
