import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import './book.css';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
class Footer extends Component {
	render() {
		return (

			<div className="footer-distributed">
				{/* <footer > */}

				<div className="footer-left">


					<p className="footer-links">
						<u>TeamWork Creations</u> <br />
						<h4>Abhishek,
						Punit M V,
						Preethi,
						Suhas</h4><br />
						<a href="#" className="link-1">Home</a>

						<a href="#">Blog</a>

						<a href="#">About</a>

						<a href="#">FAQ</a>

						<a href="#">Contact</a>
					</p>

					<p className="footer-company-name">TeamWork@BMSApp© 2021</p>
				</div>

				<div className="footer-center">

					<div>
						<a href="#"><IconButton><LocationOnIcon /></IconButton></a>
						<p><span>7744 APSP</span> Global Tech Park, Bengaluru</p>
					</div>

					<div>

						<a href="#"><IconButton><PhoneRoundedIcon /></IconButton></a>
						<p>+91 7348902042</p>
					</div>

					<div>


						<a href="#"><IconButton><MailOutlineIcon /></IconButton></a>
						<p><a href="">support@teamwork.com</a></p>
					</div>

				</div>

				<div className="footer-right">

					<p className="footer-company-about">
						<span>About the project</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

					<div className="footer-icons">

						<a href="#"><IconButton><FacebookIcon /></IconButton></a>
						<a href="#"><IconButton><InstagramIcon /></IconButton></a>
						<a href="#"><IconButton><TwitterIcon /></IconButton></a>
						<a href="#"><IconButton><GitHubIcon /></IconButton></a>
						<a href="#"><IconButton><LinkedInIcon /></IconButton></a>


					</div>

				</div>

				{/* </footer> */}
			</div>

		)
	}
}

export default Footer
