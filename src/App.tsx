import './App.css';

import { Route, Routes } from 'react-router-dom';
import About from './pages/About/about.component';
import Store from './pages/Store/store.component';
import Home from './pages/Home/home.component';
import { Navbar } from './component/navbar/navbar.component';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/store' element={<Store />} />
			</Routes>
		</div>
	);
};

export default App;
