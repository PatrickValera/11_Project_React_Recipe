import "./App.css";
import { ThemeProvider } from "@mui/material/styles";

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// COMPONENT IMPORTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import QueryScreen from "./screens/QueryScreen";
import RecipeScreen from "./screens/RecipeScreen";
import LandingScreen from "./screens/LandingScreen";
import { defaultTheme } from './themes/defaultTheme'
import { CssBaseline } from "@mui/material";
function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline/>
				<Router>
					<Routes>
						<Route path='/' element={<LandingScreen />} />
						<Route path='/main' element={<><Header /><Outlet /><Footer /></>}>
							<Route path='search/*' element={<QueryScreen />} />
							<Route path='recipe/:id' element={<RecipeScreen />} />
						</Route>
					</Routes>
				</Router>
		</ThemeProvider>
	);
}

export default App;
