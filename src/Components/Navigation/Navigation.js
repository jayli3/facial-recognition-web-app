import React from 'react';
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = (props) => {
	const {route, onRouteChange} = props;
	return(
		<header className='z-9999'>
			<Logo/>
			<nav style={{'whiteSpace': 'nowrap'}}>
				<ul>
					{route === 'home' ? <li><a className='dim' href='#' onClick={() => onRouteChange('signin')}><strong>Sign Out</strong></a></li> : <div></div>}
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;