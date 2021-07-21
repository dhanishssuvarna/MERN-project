import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid d-flex'>
					<NavLink className='navbar-brand' to='/'>
						<img src={logo} alt='Logo' />
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse flex-row-reverse'
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<NavLink
									className='nav-link active'
									aria-current='page'
									to='/'
								>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/about'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/contact'>
									Contact
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='login'>
									Login
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='signup'>
									Registration
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
