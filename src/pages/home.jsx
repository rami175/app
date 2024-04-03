import "./home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className='home page'>
			<h2>welcom to my online store home page</h2>
			<Link className='btn btn-primary' to={"/catalog"}>
				Check our amazing catalog {">>>"}
			</Link>
		</div>
	);
}
export default Home;
