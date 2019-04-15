import React from 'react';
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = () => {
	return(
		<header>
			<Logo/>
			<nav style={{'whiteSpace': 'nowrap'}}>
				<ul>
					<li><a href='#'><strong>Sign In</strong></a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;