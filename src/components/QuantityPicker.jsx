import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
	const [quantity, setQuantity] = useState(1);

	function increase() {
		let newVal = quantity + 1;
		setQuantity(newVal);
	}
	function decrease() {
		let newVal = quantity - 1;
		if (newVal >= 0) {
			setQuantity(newVal);
		}
	}

	return (
		<div className='qpicker'>
			<button
				className='btn btn-sm btn-outline-success'
				disabled={quantity == 0}
				onClick={decrease}
			>
				-
			</button>
			<lable>{quantity}</lable>
			<button className='btn btn-sm btn-outline-success' onClick={increase}>
				+
			</button>
		</div>
	);
}
export default QuantityPicker;
