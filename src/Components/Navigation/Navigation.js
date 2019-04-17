import React from 'react';
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = (props) => {
	const {isSignedIn, onRouteChange} = props;
	return(
		<header className='z-9999'>
			<Logo/>
			<nav>
				<ul id='navUl'>
					{isSignedIn ? 
						<li><p className='pointer dim' onClick={() => onRouteChange('signin')}><strong>Sign Out</strong></p></li> 
						:
						<div>
							<li><p className='pointer dim' onClick={() => onRouteChange('signin')}><strong>Sign In</strong></p></li>
							<li><p className='pointer dim' onClick={() => onRouteChange('register')}><strong>Register</strong></p></li>
						</div>
					}
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;