import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
	const {onInputChange, onSubmit} = props;
	return(
		<div className='pa3 o-90'>
			<div className='form mt3 pa4 center br3 shadow-5'>
				<input id='formInput' className='f5 pa2 w-70 center' type='text' onChange={onInputChange} placeholder='https://www.google.com/human-face.jpg'/>
				<button id='formBtn' className='w-30 grow f5 link ph3 pv2 dib white bg-light-purple center fw9' onClick={onSubmit}>Submit</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;