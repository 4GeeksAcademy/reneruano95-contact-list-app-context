import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container justify-content-center">
				<Link to="/contact" className="text-decoration-none">
					<h1 className="navbar-brand mb-0 text-center fs-1">Contact List</h1>
				</Link>
			</div>
		</nav>
	);
};
