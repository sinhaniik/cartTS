import { NavLink } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/cartIcon.svg';

import './navbar.styles.scss';

export const Navbar = () => {
	return (
		<>
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
				<button className='btn'>
					<CartIcon className='CI' />
					<span className='cir'>4</span>
				</button>
			</div>
		</>
	);
};

export default Navbar;
