import { createContext, ReactNode, useContext, useState } from 'react';

// these are all the function that we wanted
// to perform certain action
type ShoppingCartType = {
	getItems: (id: number) => number;
	addItems: (id: number) => void;
	removeItems: (id: number) => void;
	deleteItems: (id: number) => void;
};

// initial value
const ShoppingCartContext = createContext({} as ShoppingCartType);

// custom hook
export const useShoppingCart = () => {
	return useContext(ShoppingCartContext);
};

// Reactnode type is a type we gave to the children (props)
type childrenProps = {
	children: ReactNode;
};

type CartItems = {
	id: number;
	quantity: number;
};

export const ShoppingCartProvider = ({ children }: childrenProps) => {
	//storage place for our items
	const [cartItem, setCartItem] = useState<CartItems[]>([]);

	// helper functions
	const getItems = (id: number) => {
		return cartItem.find((item) => item.id === id)?.quantity || 0;
	};

	const addItems = (id: number) => {
		setCartItem((currentItem) => {
			//if item is not there in cart thn, match their id and create an array
			//of that new item and add it to the cart
			if (currentItem.find((item) => item.id === id) == null) {
				return [...currentItem, { id, quantity: 1 }];
			} else {
				// and if item is already there, just increment the quntity by 1
				return currentItem.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeItems = (id: number) => {
		setCartItem((currentItem) => {
			if (currentItem.find((item) => item.id === id)?.quantity === 1) {
				return currentItem.filter((item) => item.id != id);
			} else {
				return currentItem.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const deleteItems = (id: number) => {
		setCartItem((currentItem) => {
			return currentItem.filter((item) => item.id != id);
		});
	};

	return (
		<ShoppingCartContext.Provider
			value={{ getItems, addItems, removeItems, deleteItems }}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
