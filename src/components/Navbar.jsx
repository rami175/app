import { Link } from "react-router-dom";

/**
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 *
 * are usually exported
 */
import "./Navbar.css";

function Navbar() {
	return (
		<nav
			className='navbar navbar-expand-lg bg-body-tertiary'
			data-bs-theme='dark'
		>
			<div className='container-fluid'>
				<Link class='navbar-brand' to='/home'>
					Home
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<Link className='nav-link' to='/catalog'>
							Catalog
						</Link>
						<Link className='nav-link' to='/shoppinglist'>
							Shopping List
						</Link>
						<Link className='nav-link' to='/about'>
							About
						</Link>
						<Link className='nav-link' to='/admin'>
							Admin
						</Link>
					</div>
				</div>
			</div>
			<nav className='navbar bg-body-tertiary'>
				<div className='container-fluid'>
					<form className='d-flex' role='search'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button className='btn btn-outline-success' type='submit'>
							Search
						</button>
					</form>
				</div>
			</nav>
		</nav>
	);
}

export default Navbar;
