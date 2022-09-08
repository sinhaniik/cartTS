import { NavLink } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/cartIcon.svg';
import { useShoppingCart } from '../../context/shoppingCartContext';
import ShoppingCart from '../shopping-cart/shopping-cart.componenet';

import './navbar.styles.scss';

export const Navbar = () => {
	const { isOpen, togleCart, cartQuantity } = useShoppingCart();
	return (
		<div>
			<div className='navbar'>
				<NavLink className={'hm'} to={'/'}>
					HOME
				</NavLink>
				<NavLink className={'abt'} to={'/about'}>
					ABOUT
				</NavLink>
				<NavLink className={'str'} to={'/store'}>
					STORE
				</NavLink>
				<button className='btn' onClick={togleCart}>
					<CartIcon className='CI' />
					<span className='cir'>{cartQuantity}</span>
					{isOpen && <ShoppingCart />}
				</button>
			</div>
		</div>
	);
};

export default Navbar;
