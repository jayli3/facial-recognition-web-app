import React from 'react';

const Rank = () => {
	return(
		<div className='center'>
			<div className='ph4 pv3 shadow-5 mt4 mh3 w-auto br3 bg-white o-70 flex-column'>
				<div id='rank' className='f5'>
					<strong>
						{'Hi Jay, your current rank is...'}
						<span className='f3'>{'6!'}</span>
					</strong>
				</div>
			</div>
		</div>
	)
}

export default Rank;