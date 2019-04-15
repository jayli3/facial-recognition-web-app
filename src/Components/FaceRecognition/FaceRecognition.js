import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
	const {image_url, box} = props;
	return(
		<div className='ph3 center mb3'>
			<div className='absolute'>
				<img id='inputImage' className='br1 mb4 shadow-3' src={image_url} width='600px' height='auto' alt=''/>
				<div className='boundingBox' style={{top: box.top_row, right: box.right_col, bottom: box.bottom_row, left: box.left_col}}></div>
			</div>
		</div>
	)
}

export default FaceRecognition;