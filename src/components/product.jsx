import "./product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";

function Product(props) {
	function add() {
		console.log("adding product");
	}
	return (
		<div className='product'>
			<img src={constants.IMAGE_PATH + props.info.img} />
			<h6>{props.info.title}</h6>
			<label>${props.info.price}</label>
			<div className='button'>
				<QuantityPicker></QuantityPicker>
				<button onClick={add}>Add to cart</button>
			</div>
		</div>
	);
}

export default Product;
