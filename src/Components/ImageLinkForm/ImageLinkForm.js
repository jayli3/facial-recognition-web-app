import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
	const {onInputChange, onSubmit} = props;
	return(
		<div className='pa3'>
			<p className='f3 dark-gray fw5'>
				{'Harry Potter will detect faces in your pictures. It\'s like magic!'}
			</p>
			<div className='form pa4 center br3 shadow-5'>
				<input className='formInput f5 pa2 w-70 center' type='text' onChange={onInputChange}/>
				<button className=' formBtn w-30 grow f5 link ph3 pv2 dib white bg-light-purple center fw9' onClick={onSubmit}>Submit</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;