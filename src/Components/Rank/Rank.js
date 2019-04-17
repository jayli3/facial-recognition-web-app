import React from 'react';

const Rank = (props) => {
	const {name, faces} = props;
	return(
		<div className='center'>
			<div className='ph4 pv3 shadow-5 mt4 mh3 w-auto br3 bg-white o-70 flex-column'>
				<div id='rank' className='f5'>
					<strong>
						{`Hi ${name}, you've found `}
						<span className='f3'>{`${faces}`}</span>
						{` faces in total!`}
					</strong>
				</div>
			</div>
		</div>
	)
}

export default Rank;