import "./App.css";
import {  ThemeProvider } from "@mui/material/styles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENT IMPORTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import QueryScreen from "./screens/QueryScreen";
import RecipeScreen from "./screens/RecipeScreen";
import LandingScreen from "./screens/LandingScreen";
import {defaultTheme} from './themes/defaultTheme'
function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<div className='App'>

				<Router>
				<Header />
					<Routes>
						<Route path='/' element={<LandingScreen />} />
						<Route path='search/*' element={<QueryScreen />} />
						<Route path='/recipe/:id' element={<RecipeScreen />} />
					</Routes>
				</Router>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
