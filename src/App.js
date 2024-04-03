// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import ShoppingList from "./pages/ShoppingList";
import Home from "./pages/home";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./Context/GobalProvider";

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/about' element={<About />} />
						<Route path='/shoppinglist' element={<ShoppingList />} />
						<Route path='/admin' element={<Admin />} />
					</Routes>

					<Footer></Footer>
				</div>
			</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;
