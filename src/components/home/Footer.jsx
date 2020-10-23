import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import facebook from './../../assets/images/footer_icons/Icon metro-facebook.png';
import twitter from './../../assets/images/footer_icons/Icon awesome-twitter-square.png';
import linkedin from './../../assets/images/footer_icons/Icon awesome-linkedin.png';
import youtube from './../../assets/images/footer_icons/Icon metro-youtube.png';
import instagram from './../../assets/images/footer_icons/Icon metro-instagram.png';

class Footer extends Component {
	render() {
		return (
			<div>
				<div className="footer_main">
				<div className="footer_">
					<MDBFooter  className="font-small pt-4 mt-4">
						<div className="footer">
							<MDBContainer fluid className="text-center text-md-left">
								<MDBRow className='footer_title'>
									<MDBCol md="3">
										<h5 className="title">About</h5>
										<ul>
											<li className="list-unstyled">
												<a href="www.google.com">About Bookit</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Carrers</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Contact Us</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Terms of Service</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Privacy Policy</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Press</a>
											</li>
										</ul>
									</MDBCol>
									<MDBCol md="3">
										<h5 className="title">Discover</h5>
										<ul>
											<li className="list-unstyled">
												<a href="www.google.com">Blog</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Meet the Teams</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">How it works</a>
											</li>
										</ul>
									</MDBCol>
									<MDBCol md="3">
										<h5 className="title">Transport</h5>
										<ul>
											<li className="list-unstyled">
												<a href="www.google.com">Register with Us</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Business Support</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">Advertise on Bookit</a>
											</li>
										</ul>
									</MDBCol>
									<MDBCol md="2">
										<h5 className="title">From Our Blog</h5>
										<ul>
											<li className="list-unstyled">
												<a href="www.google.com">My experience with...</a>
											</li>
											<li className="list-unstyled">
												<a href="www.google.com">How i travelled...</a>
											</li>
											<li className="list-unstyled3">
												<a href="www.google.com">My experience with...</a>
											</li>
										</ul>
										<h5 className="title">Connect With Us</h5>
										<div className="row">
											<div class="column">
												<a href="www.google.com"><img src={facebook} alt="fb" /></a>
											</div>
											<div class="column">
												<a href="www.google.com"><img src={twitter} alt="twitter" /></a>
											</div>
											<div class="column">
												<a href="www.google.com"><img src={instagram} alt="instagram" /></a>
											</div>
											<div class="column">
												<a href="www.google.com"><img src={youtube} alt="youtube" /></a>
											</div>
											<div class="column">
												<a href="www.google.com"><img src={linkedin} alt="linkedin" /></a>
											</div>
										</div>
									</MDBCol>
								</MDBRow>
							</MDBContainer>
						</div>
						<div className="footer-copyright text-center py-3">
							<MDBContainer fluid>
								&copy; {new Date().getFullYear()} Copyright: <a href="/"> bookit.com </a>
							</MDBContainer>
						</div>
					</MDBFooter>
				</div>
			</div>
			</div>
		);
	}
}

export default Footer;
