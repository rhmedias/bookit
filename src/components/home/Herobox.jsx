import React, { Component } from 'react';
import hero1 from '../../assets/images/hero1.jpeg';
import hero2 from '../../assets/images/hero2.jpeg';
import hero3 from '../../assets/images/hero3.jpeg';
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
