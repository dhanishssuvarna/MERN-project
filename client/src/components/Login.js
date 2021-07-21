import React from 'react';
import { NavLink } from 'react-router-dom';
import loginPic from '../img/login.svg';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const Login = () => {
	return (
		<>
			<section className='sign-in'>
				<div className='container mt-5'>
					<div className='signin-content'>
						<div className='signin-image'>
							<figure>
								<img src={loginPic} alt='SignIn Vector' />
							</figure>
							<NavLink to='/signup' className='signin-image-link'>
								Create an Account
							</NavLink>
						</div>
						<div className='signin-form'>
							<h2 className='form-title'>Sign In</h2>
							<form className='register-form' id='register-form'>
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
									<label htmlFor='cpassword'>
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
								<div className='form-group form-button'>
									<input
										type='submit'
										id='signin'
										className='form-submit'
										value='Log In'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
