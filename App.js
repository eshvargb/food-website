import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import RestaurantPage from "./components/RestaurantPage";
import Navbar from "./components/Navbar";
import AddRest from "./AddRest";
import Login from "./Login";
import Burgers from "./components/Burgers";
import Pizza from "./components/Pizza";
import Pasta from "./components/Pasta";
import Biriyani from "./components/Biriyani";
import Rolls from "./components/Rolls";
import Profile from "./components/Profile";
import My_Orders from "./components/My Orders";
import Cart from "./components/Cart";
import About_Us from "./components/About_Us";
const App = () => {
	return (
		<>
			<div>
				<Navbar />
				<Router>
					<Routes>
						<Route path="/" exact element={<LandingPage />} />
						<Route path="/add-restaurant" element={<AddRest />} />
						<Route path="/login" element={<Login />} />
						<Route path="/restaurant/:id" element={<RestaurantPage />} />
						<Route path="/restaurant/mcd" element={<RestaurantPage restName='Mc Donalds' restDesc = "McDonalds is a very nice place" />} />
						<Route path="/Food/:id" element={<Burgers/>}/>
						<Route path="/Food/Pizza" element={<Pizza/>}/>
						<Route path="/Food/Pasta" element={<Pasta/>}/>
						<Route path="/Food/Biriyani" element={<Biriyani/>}/>
						<Route path="/Food/Rolls" element={<Rolls/>}/>
						<Route path="/Profile" element={<Profile/>}/>
						<Route path="/My Orders" element={<My_Orders/>}/>
						<Route path="/Cart" element={<Cart/>}/>
						<Route path="/About_Us" element={<About_Us/>}/>
						
						
						
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App;