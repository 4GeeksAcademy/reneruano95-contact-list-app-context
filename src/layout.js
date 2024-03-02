import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contact } from "./views/contact/Contact";
import { AddContact } from "./views/add-contact/AddContact";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="h-100 d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>

					<Route path="/contact" element={<Contact />} />
					<Route path="/add-contact" element={<AddContact />} />
					<Route path="/contact/:theid" element={<AddContact />} />

					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
