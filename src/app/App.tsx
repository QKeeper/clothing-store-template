import Catalog from "@/pages/Catalog";
import Header from "@/pages/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "@/pages/Reviews";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Catalog />} />
					<Route path="/outerwear" element={<Catalog />} />
					<Route path="/shoes" element={<Catalog />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
