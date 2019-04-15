import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return(
		<div className='pa3'>
			<p className='f3 dark-gray'>
				<strong>
					{'This Magic Brain will detect faces in your pictures. Give it a try!'}
				</strong>
			</p>
			<div className='form pa4 center br3 shadow-5'>
				<input className='formInput f4 pa2 w-70 center' type='text'/>
				<button className=' formBtn w-30 grow f5 link ph3 pv2 dib white bg-light-purple center'>Detect</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;