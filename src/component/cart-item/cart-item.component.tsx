import { useShoppingCart } from '../../context/shoppingCartContext';
import './cart-item.styles.scss';

export type Date = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
};

export const CartItem = ({ id, name, imageUrl, price }: Date) => {
	const { getItems, addItems, removeItems, deleteItems } = useShoppingCart();

	let quantity = getItems(id);

	const onItemHandler = () => {
		addItems(id);
	};

	const onRemoveHandler = () => {
		removeItems(id);
	};

	const onDelItemsHandler = () => {
		deleteItems(id);
	};

	return (
		<div className='item-container' key={id}>
			<img src={imageUrl} alt={`${name}`} />
			<div className='name-container'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<div className='addToCart'>
				{quantity === 0 ? (
					<button className='adCart' onClick={onItemHandler}>
						+ add to cart
					</button>
				) : (
					<div className='btn_container'>
						<div className='remove'>
							<button className='plus' onClick={onItemHandler}>
								+
							</button>
							<span>{quantity} </span> in the cart
							<button className='minus' onClick={onRemoveHandler}>
								-
							</button>
						</div>
						<button onClick={onDelItemsHandler}>remove</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartItem;
