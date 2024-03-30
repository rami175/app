import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker({ setcount }) {
	const [quantity, setQuantity] = useState(0);

	function increase() {
		let newVal = quantity + 1;
		setQuantity(newVal);
		setcount(newVal);
	}
	function decrease() {
		let newVal = quantity - 1;
		if (newVal >= 0) {
			setQuantity(newVal);
			setcount(newVal);
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
			<span>{quantity}</span>
			<button className='btn btn-sm btn-outline-success' onClick={increase}>
				+
			</button>
		</div>
	);
}
export default QuantityPicker;
