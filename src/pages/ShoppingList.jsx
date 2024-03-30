import { useState } from "react";
import "./shoppingList.css";

function ShoppingList() {
	const [list, setList] = useState(["test 1", "test 2", "test 3"]);
	const [text, setText] = useState("");

	function addItem() {
		//console.log(list);
		/**
		 * create a copy
		 * modify your copy
		 * set the copy
		 */
		if (text !== "") {
			let copy = [...list];
			copy.push(text);
			setList(copy);
		}
	}

	function handleTextChange(e) {
		const val = e.target.value;
		//console.log(val);
		setText(val);
	}
	function deletAll() {
		setList([]);
	}
	return (
		<div className='shopping-list page'>
			<h3>Shopping List</h3>
			<div className='shopping-form'>
				<input onChange={handleTextChange} type='text' />
				<button className='btn btn-sm btn-success' onClick={addItem}>
					Add
				</button>
				<button className='btn btn-sm btn-danger' onClick={deletAll}>
					Clear list
				</button>
			</div>
			<ul>
				{list.map((x) => (
					<li>{x}</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
