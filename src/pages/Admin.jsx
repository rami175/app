import "./Admin.css";
import { useState } from "react";
import Product from "./../components/product";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Admin() {
	const [coupon, setCoupon] = useState({
		code: "", // code should match the name property in the input
		discount: "", //should match the discount property in the input
	});

	function handleCouponChange(e) {
		const val = e.target.value;
		const name = e.target.name;

		//
		var copy = { ...coupon };
		copy[name] = val;
		setCoupon(copy);
		//
	}

	function addcoupon() {
		//console.log(coupon);

		let copy = [...allcoupons];
		copy.push(coupon);
		setAllCoupons(copy);
	}

	//product
	const [product, setProduct] = useState({}); //can be declared without initial values
	const [allProducts, setAllProducts] = useState([]);
	function handleProductChange(e) {
		const val = e.target.value;
		const name = e.target.name;

		//
		var copy = { ...product };
		copy[name] = val;
		setProduct(copy);
		//console.log(product);
		//
	}

	//form validation
	const [allcoupons, setAllCoupons] = useState([]);

	function onAdding(data) {
		//console.log(data);
		let copy = [...allProducts];
		copy.push(data);
		setAllProducts(copy);
		reset();
	}
	//validation using yup

	const schema = yup.object().shape({
		product: yup.string().required("please enter a name"),
		title: yup.string().required("Please enter a title"),
		category: yup.string(),
		image: yup.string(),
		price: yup.number().positive("Please enter a positive number"),
	});
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// function addProduct() {
	// 	//console.log(allProducts);

	// 	let copy = [...allProducts];
	// 	copy.push(product);
	// 	setAllProducts(copy);
	// }

	return (
		<div className='admin page'>
			<h1>Admin page</h1>
			<div className='parent'>
				<div className='products'>
					<h2>Products</h2>
					<div className='form'>
						<form onSubmit={handleSubmit(onAdding)}>
							<div className='row mb-3'>
								<label className='col-sm-2 col-form-label'>
									Product
								</label>
								<div className='col-sm-10'>
									<input
										onChange={handleProductChange}
										type='text'
										className='form-control'
										name='product'
										{...register("product")}
										//placeholder={errors.product?.message}
									/>
									<p className='speech-bubble'>
										{errors.product?.message}
									</p>
								</div>
							</div>
							<div className='row mb-3'>
								<label className='col-sm-2 col-form-label'>Title</label>
								<div className='col-sm-10'>
									<input
										onChange={handleProductChange}
										type='text'
										className='form-control'
										name='title'
										{...register("title")}
									/>
									<p className='speech-bubble'>
										{errors.title?.message}
									</p>
								</div>
							</div>
							<div className='row mb-3'>
								<label className='col-sm-2 col-form-label'>
									Category
								</label>
								<div className='col-sm-10'>
									<input
										onChange={handleProductChange}
										type='text'
										className='form-control'
										name='category'
										{...register("category")}
									/>
								</div>
							</div>
							<div className='row mb-3'>
								<label className='col-sm-2 col-form-label'>Image</label>
								<div className='col-sm-10'>
									<input
										onChange={handleProductChange}
										type='text'
										className='form-control'
										name='image'
										{...register("image")}
									/>
								</div>
							</div>
							<div className='row mb-3'>
								<label className='col-sm-2 col-form-label'>Price</label>
								<div className='col-sm-10'>
									<input
										onChange={handleProductChange}
										type='number'
										className='form-control'
										name='price'
										{...register("price")}
									/>
									<p className='speech-bubble'>
										{errors.price?.message}
									</p>
								</div>
							</div>
							<button
								//onClick={reset()}
								type='submit'
								className='btn btn-primary'
							>
								Create Product
							</button>
						</form>
						<ul>
							{allProducts.map((x) => (
								<li>
									{x.title}--{x.category}--${x.price}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='coupons'>
					<h2>Coupons</h2>
					<div className='form'>
						<form>
							<div className='mb-3'>
								<label className='form-label'>Code</label>
								<input
									onChange={handleCouponChange}
									className='form-control'
									type='text'
									name='code'
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label'>Discount</label>
								<input
									onChange={handleCouponChange}
									className='form-control'
									type='text'
									name='discount'
								/>
							</div>
							<div className='mb-3 form-check'></div>
							<button
								onClick={addcoupon}
								type='button'
								className='btn btn-primary'
							>
								Submit
							</button>
						</form>
						<div>
							<ul>
								{allcoupons.map((x) => (
									<li>
										{x.code}--${x.discount}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Admin;
