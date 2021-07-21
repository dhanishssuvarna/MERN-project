import React from 'react';
import dhanishPic from '../img/dhanish.jpg';

const About = () => {
	return (
		<>
			<div className='container emp-profile'>
				<form method=''>
					<div className='row'>
						<div className='col-md-4'>
							<div className='profile-img'>
								<img src={dhanishPic} alt='Dhanish Pic' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className='profile-head'>
								<h5>Dhanish S Suvarna</h5>
								<h6>Web Developer</h6>
								<p className='profile-rating mt-3 mb-5'>
									RANKING : <span>1/10</span>
								</p>
								<ul className='nav nav-tabs' role='tablist'>
									<li className='nav-items'>
										<a
											className='nav-link active'
											id='home-tab'
											data-toggle='tab'
											href='#home'
											role='tab'
											onClick='toogle(home)'
										>
											About
										</a>
									</li>
									<li className='nav-items'>
										<a
											className='nav-link'
											id='profile-tab'
											data-toggle='tab'
											href='#profile'
											role='tab'
										>
											Timeline
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<input
								type='submit'
								className='profile-edit-btn'
								name='btnAddMore'
								value='Edit Profile'
							/>
						</div>
					</div>
					<div className='row'>
						{/* Left Side Url Start*/}
						<div className='col-md-4'>
							<div className='profile-work'>
								<p>WORK LINK</p>
								<a
									href='https://github.com/dhanishssuvarna'
									target='blank'
								>
									GitHub
								</a>
								<br />
								<a
									href='https://github.com/dhanishssuvarna'
									target='blank'
								>
									Linkdin
								</a>
								<br />
								<a
									href='https://github.com/dhanishssuvarna'
									target='blank'
								>
									Youtube
								</a>
								<br />
								<a
									href='https://github.com/dhanishssuvarna'
									target='blank'
								>
									Instagram
								</a>
								<br />
							</div>
						</div>
						{/* Left Side Url End*/}

						{/* Right Side Data Toggle Start*/}
						<div className='col-md-8 pl-5 about-info'>
							<div
								className='tab-content profile-tab'
								id='myTabContent'
							>
								{/* Toggle 1 Start */}
								<div
									className='tab-pane fade show active'
									id='home'
									role='tabpanel'
									aria-labelledby='home-tab'
								>
									<div className='row'>
										<div className='col-md-6'>
											<div>User ID</div>
										</div>
										<div className='col-md-6'>
											<p>22435677</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Name</div>
										</div>
										<div className='col-md-6'>
											<p>Dhanish S Suvarna</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Email</div>
										</div>
										<div className='col-md-6'>
											<p>dhanishssuvarna123@gmail.com</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Phone</div>
										</div>
										<div className='col-md-6'>
											<p>9876543210</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Profession</div>
										</div>
										<div className='col-md-6'>
											<p>Web Developer</p>
										</div>
									</div>
								</div>
								{/* Toggle 1 End */}

								{/* Toggle 2 Start */}
								<div
									className='tab-pane fade'
									id='profile'
									role='tabpanel'
									aria-labelledby='profile-tab'
								>
									<div className='row'>
										<div className='col-md-6'>
											<div>User ID</div>
										</div>
										<div className='col-md-6'>
											<p>1234567</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Name</div>
										</div>
										<div className='col-md-6'>
											<p>Dhanish S Suvarna</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Email</div>
										</div>
										<div className='col-md-6'>
											<p>dhanishssuvarna123@gmail.com</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Phone</div>
										</div>
										<div className='col-md-6'>
											<p>9876543210</p>
										</div>
									</div>
									<div className='row mt-3'>
										<div className='col-md-6'>
											<div>Profession</div>
										</div>
										<div className='col-md-6'>
											<p>Web Developer</p>
										</div>
									</div>
								</div>
								{/* Toggle 2 End */}
							</div>
						</div>
						{/* Right Side Data Toggle End*/}
					</div>
				</form>
			</div>
		</>
	);
};

export default About;
