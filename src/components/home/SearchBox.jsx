import React, { Component } from 'react';

class SearchBox extends Component {
	state = {};
	render() {
		return (
			<div className="searchbox">
				<div class="card text-center">
					<div class="card-header">
						<ul class="nav nav-tabs card-header-tabs">
							<li class="nav-item">
								<a class="nav-link active" href="#">
									Book a Seat
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Hire a Bus
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Booking Status
								</a>
							</li>
						</ul>
					</div>
					<div class="card-body">
						<form>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputEmail4">Travelling From:</label>
									<select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
										<option selected>Departure Terminal</option>
										<option value="1">Lagos</option>
										<option value="2">Abuja</option>
										<option value="3">Calabar</option>
									</select>
								</div>
								<div class="form-group col-md-6">
									<label for="inputPassword4">Travelling To:</label>
									<select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
										<option selected>Arrival Terminal</option>
										<option value="1">Lagos</option>
										<option value="2">Abuja</option>
										<option value="3">Calabar</option>
									</select>
								</div>
							</div>

							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputDate">Departure Date</label>
									<input type="text" class="form-control" id="inputDate" />
								</div>
                
								<div class="form-group col-md-1">
									<label for="inputState">Adult</label>
									<select id="inputState" class="form-control">
										<option selected>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
									</select>
								</div>
							</div>

							<button type="submit" class="btn btn-primary">
								Book Now
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBox;
