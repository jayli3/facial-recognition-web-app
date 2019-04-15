import React from 'react';
import Logo from './Logo/Logo';
import './Navigation.css'

const Navigation = () => {
	return(
		<header>
			<Logo/>
			<nav style={{'white-space': 'nowrap'}}>
				<ul>
					<li><a href='#'><strong>Sign Out</strong></a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation;