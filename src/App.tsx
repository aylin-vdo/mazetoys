
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Menu from "./Menu";
import Loading from "./Loading";
import Game from "./Game";

function App() {
	return (
		<>
			<BrowserRouter basename={"/mazetoys/"}>
				<Routes>
					<Route
						path="/"
						element={
						<div>
						<Home />
						</div>
					}
					/>
					<Route
						path="/menu"
						element={
						<div>
						<Menu />
						</div>
					}
					/>
					<Route
						path="/loading"
						element={
						<div className="">
						<Loading />
						</div>
					}
					/>
					<Route
						path="/game"
						element={
						<div className="">
						<Game />
						</div>
					}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
