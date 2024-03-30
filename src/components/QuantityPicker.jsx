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
	function add() {
		setQuantity(0);
		setcount(0);
	}

	return (
		<div className='picker1'>
			<div className='qpicker'>
				<button
					className='btn btn-sm btn-outline-success'
					disabled={quantity == 0}
					onClick={decrease}
				>
					-
				</button>
				<span>{quantity}</span>
				<button
					className='btn btn-sm btn-outline-success'
					onClick={increase}
				>
					+
				</button>
			</div>
			<button onClick={add} className='btn btn-dark' hidden={quantity == 0}>
				Add to cart
			</button>
		</div>
	);
}
export default QuantityPicker;
