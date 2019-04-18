import React from 'react';
import github_logo from './github@2x.png';

const Footer = () => {
	const style ={
		'backgroundImage': `url(${github_logo})`,
		'background-size': 'contain',
		'background-position': 'center center',
		'background-repeat': 'no-repeat',
		'width': '25px',
		'height': '25px',
		'margin-right': '10px'
	}

	const style2 ={
		'bottom': '0',
		'padding': '30px 45px 25px 30px'
	}

	return(
		<div className='absolute w-100 flex justify-end white helvetica' style={style2}>
			<a href='https://github.com/jayli3/facial-recognition-web-app' className='white link b flex items-center flex-row dim'>
				<div style={style}></div>
				<span>View on GitHub</span>
			</a>
		</div>
	)
}

export default Footer;