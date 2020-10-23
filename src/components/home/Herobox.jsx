import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Herobox extends Component {
	
	render() {
		return (
			<div>
				<div className='herobox' col-sm-3 col-md-6>
				<div className='header-title' mb-0>
				<h1>Please stay safe.</h1>
				<h1>Travel responsibly.</h1>
				<h3 className='header-subtitle'>We miss connecting you with the world. We remain dedicated to keeping you safe during your travel.</h3>
				</div>				
			</div>
			<div>
				<SearchBox/>
				</div>
			</div>
		);
	}
}

export default Herobox;
