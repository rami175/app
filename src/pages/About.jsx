import { useState } from "react";
import "./About.css";
import { render } from "@testing-library/react";

function About() {
	const [contactVisible, setContactVisible] = useState(false);
	function showData() {
		console.log("clicked");
		setContactVisible(!contactVisible);
	}

	return (
		<div className='about page'>
			<h3>Rami M</h3>

			{contactVisible ? (
				<div className='box'>
					<h4>
						To get in tuch with me please email:<br></br>
						<span>ramicesar175@yahoo.com</span>
					</h4>
				</div>
			) : null}
			<button className='btn btn-primary' onClick={showData}>
				view contact
			</button>
		</div>
	);
}
export default About;
