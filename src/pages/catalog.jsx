import "./catalog.css";
import Product from "../components/product";

function Catalog() {
	const data = [
		{
			title: "Wings",
			price: 10.99,
			category: "Hot",
			img: "./imges/wings",
			_id: "1",
		},
		{
			title: "Pizza",
			price: 12.99,
			category: "Hot",
			img: "https://picsum.photos/200",
			_id: "2",
		},
		{
			title: "Salad",
			price: 8.99,
			category: "Cold",
			img: "https://picsum.photos/200",
			_id: "3",
		},
		{
			title: "Drinks",
			price: 3.99,
			category: "cold",
			img: "https://picsum.photos/200",
			_id: "4",
		},
	];
	return (
		<div className='catalog page'>
			<h1>Our amazing catalog</h1>
			<Product info={data[0]} />
			<Product info={data[1]} />
			<Product info={data[2]} />
			<Product info={data[3]} />
		</div>
	);
}

export default Catalog;
