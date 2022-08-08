import shopData from '../../data/shopData.json';
import CartItem from '../../component/cart-item/cart-item.component';
import './store.styles.scss';

const Store = () => {
	return (
		<>
			<h2 className='h2'>Store</h2>
			<div className='data_container'>
				{shopData.map((data) => (
					<CartItem {...data} />
				))}
			</div>
		</>
	);
};

export default Store;
