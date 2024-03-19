import "./catalog.css";
import Product from "../components/product";

function Catalog() {
	const data = [
		{
			title: "Wings",
			price: 10.99,
			category: "Hot",
			img: "wings.jpg",
			_id: "1",
		},
		{
			title: "Pizza.jpg",
			price: 12.99,
			category: "Hot",
			img: "pizza.jpg",
			_id: "2",
		},
		{
			title: "Salad",
			price: 8.99,
			category: "Cold",
			img: "salad.jpg",
			_id: "3",
		},
		{
			title: "Drinks",
			price: 3.99,
			category: "cold",
			img: "drink.jpg",
			_id: "4",
		},
	];
	return (
		<div className='catalog page'>
			{data.map((prod) => (
				<Product key={prod.id} info={prod} />
			))}
		</div>
	);
}

export default Catalog;
