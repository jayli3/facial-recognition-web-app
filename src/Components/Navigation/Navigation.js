import React from 'react';
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = (props) => {
	const {route} = props;
	return(
		<header className='z-9999'>
			<Logo/>
			<nav style={{'whiteSpace': 'nowrap'}}>
				<ul>
					{route === 'signout' ? <li><a href='#'><strong>Sign Out</strong></a></li> : <div></div>}
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;