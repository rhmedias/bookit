import React, { Component } from 'react';
import p1 from '../../assets/images/partner_bus/p1.jpeg';
import p2 from '../../assets/images/partner_bus/p2.jpeg';
import p3 from '../../assets/images/partner_bus/p3.jpeg';
import p4 from '../../assets/images/partner_bus/p4.jpeg';
import p5 from '../../assets/images/partner_bus/p5.jpeg';

class Partners extends Component {
	state = {};
	render() {
		return (
			<div>
                <div className='partners'>
                <h1>Our Partner Bus Companies</h1>
                </div>
				<table className="partner_table">
					
					<tr>
						<td>
							<img src={p1} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
						<td>
							<img src={p2} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
						<td>
							<img src={p3} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
						<td>
							<img src={p4} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
                        <td>
							<img src={p5} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
					</tr>
					<tr>
						<td>
							<img src={p5} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
						<td>
							<img src={p3} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
						<td>
							<img src={p4} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
						<td>
							<img src={p2} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
                        <td>
							<img src={p1} alt="partner1" style={{ height: 100, width: 100 }} />
						</td>
					</tr>
				</table>

                {/* popular routes */}
                <div className='routes'>
                <h1>Popular Routes</h1>
                </div>

                <table className="popular_route">
					
					<tr>
						<td>
							<a href="#"><a href="#">Manitoba to Winnipeg</a></a>
						</td>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
                        <td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
					</tr>
					<tr>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
						<td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
                        <td>
                        <a href="#">Manitoba to Winnipeg</a>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default Partners;
