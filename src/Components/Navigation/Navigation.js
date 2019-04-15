import React from 'react';
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = (props) => {
	const {isSignedIn, onRouteChange} = props;
	return(
		<header className='z-9999'>
			<Logo/>
			<nav style={{'whiteSpace': 'nowrap'}}>
				<ul>
					{isSignedIn ? 
						<li><p className='dim' onClick={() => onRouteChange('signin')}><strong>Sign Out</strong></p></li> 
						:
						<div>
							<li><p className='dim' onClick={() => onRouteChange('signin')}><strong>Sign In</strong></p></li>
							<li><p className='dim' onClick={() => onRouteChange('register')}><strong>Register</strong></p></li>
						</div>
					}
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;