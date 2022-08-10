import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//for routing
import { BrowserRouter } from 'react-router-dom';
//Provider
import { ShoppingCartProvider } from './context/shoppingCartContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ShoppingCartProvider>
	</React.StrictMode>
);

reportWebVitals();
