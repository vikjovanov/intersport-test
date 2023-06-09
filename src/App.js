import Banner from "./components/sections/Banner";
import GoodDeal from "./components/sections/GoodDeal";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import OurBrands from "./components/sections/OurBrands";
import OurSelection from "./components/sections/OurSelection";
import OurSports from "./components/sections/OurSports";

function App() {
	return (
		<div className="app">
			<Banner />
			<Hero />
			<Navbar />
			<GoodDeal />
			<OurSelection />
			<OurBrands />
			<OurSports />
		</div>
	);
}

export default App;
