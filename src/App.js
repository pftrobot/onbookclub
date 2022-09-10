import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import GlobalStyle from "./js/globalStyle";

function App() {
	return (
		<div className="App">
			<GlobalStyle/>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home/>}/>
					<Route path='/books' element={<List/>}/>
					<Route path='/books/1' element={<Detail/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
