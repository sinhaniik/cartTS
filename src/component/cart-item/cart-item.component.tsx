import './cart-item.styles.scss';

export type Date = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
};

export const CartItem = ({ id, name, imageUrl, price }: Date) => {
	let quantity = 0;
	return (
		<div className='item-container' key={id}>
			<img src={imageUrl} alt={`${name}`} />
			<div className='name-container'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<div className='addToCart'>
				{quantity === 0 ? (
					<button className='adCart'>+ add to cart</button>
				) : (
					<div className='btn_container'>
						<div className='remove'>
							<button>+</button>
							<span>{quantity} </span> in the cart
							<button>-</button>
						</div>
						<button>remove</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartItem;
