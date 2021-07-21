import React from 'react';
import signinPic from '../img/signup.svg';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import WorkIcon from '@material-ui/icons/Work';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';

const Signup = () => {
	return (
		<>
			<section className='signup'>
				<div className='container mt-5'>
					<div className='signup-content'>
						<div className='signup-form'>
							<h2 className='form-title'>Sign Up</h2>
							<form className='register-form' id='register-form'>
								<div className='form-group'>
									<label htmlFor='name'>
										<SupervisorAccountIcon />
									</label>
									<input
										type='text'
										name='name'
										id='name'
										autoComplete='none'
										placeholder='Your Name'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='email'>
										<EmailIcon />
									</label>
									<input
										type='text'
										name='email'
										id='email'
										autoComplete='none'
										placeholder='Your Email'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='phone'>
										<PhoneInTalkIcon />
									</label>
									<input
										type='text'
										name='phone'
										id='phone'
										autoComplete='none'
										placeholder='Your Phone Number'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='work'>
										<WorkIcon />
									</label>
									<input
										type='text'
										name='work'
										id='work'
										autoComplete='none'
										placeholder='Your Profession'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='password'>
										<LockIcon />
									</label>
									<input
										type='text'
										name='password'
										id='password'
										autoComplete='none'
										placeholder='Your Password'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='cpassword'>
										<LockIcon />
									</label>
									<input
										type='text'
										name='cpassword'
										id='cpassword'
										autoComplete='none'
										placeholder='Confirm Your Password'
									/>
								</div>
								<div className='form-group form-button'>
									<input
										type='submit'
										id='signup'
										className='form-submit'
										value='Register'
									/>
								</div>
							</form>
						</div>
						<div className='signup-image'>
							<figure>
								<img src={signinPic} alt='SignIn Vector' />
							</figure>
							<NavLink to='/login' className='signup-image-link'>
								I am already Registred
							</NavLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
