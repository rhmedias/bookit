import React, { Component } from 'react';

class BusSelection extends Component {
	state = {};
	render() {
		return (
			<div>
				<div
					className="container"
					style={{
						width: '100%',
						height: 500,
						backgroundColor: 'red',
						marginTop: 40
					}}
				>
					<div class="col-sm-6" style={{ paddingTop: 20, float: 'right' }}>
						<div class="card">
							<div class="card-header">Featured</div>
							<div class="card-body">
								<h5 class="card-title">Special title treatment</h5>
								<p class="card-text">
									With supporting text below as a natural lead-in to additional content.
								</p>
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Details
									</button>
									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a class="dropdown-item" href="#">
											Action
										</a>
										<a class="dropdown-item" href="#">
											Another action
										</a>
										<a class="dropdown-item" href="#">
											Something else here
										</a>
									</div>
								</div>
								<a href="#" class="btn btn-primary">
									Select
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BusSelection;
