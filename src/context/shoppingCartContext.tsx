import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
	useState
} from 'react';

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
			if (currentItem.find((item) => item.id === id) == null) {
				return [...currentItem, { id, quantity: 1 }];
			} else {
				currentItem.map((item) => {
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
				currentItem.map((item) => {
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
