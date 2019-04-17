import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
	const {image_url, array_of_boxes} = props;
	return(
		<div className='ph3 center mb3 tc'>
			<div className='absolute mr3'>
				<img id='inputImage' className='br2 mb4 shadow-3' src={image_url} width='600px' height='auto' alt=''/>
				{array_of_boxes.map((box, i) => {
					return(
						<div key={i} className='boundingBox mb4' style={{top: box.top_row, right: box.right_col, bottom: box.bottom_row, left: box.left_col}}></div>
					)
				})}
			</div>
		</div>
	)
}

export default FaceRecognition;