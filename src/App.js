import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</ScrollToTop>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
