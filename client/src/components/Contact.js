import React from 'react';

const Contact = () => {
	return (
		<>
			<div className='contact_info'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-10 offset-1 d-flex justify-content-between'>
							{/* Phone Number */}
							<div className='contact_info_item d-flex justify-content-start align-items-center'>
								<img
									src='https://img.icons8.com/ultraviolet/40/000000/phone.png'
									alt='Phone'
								/>
								<div className='contact_info_content'>
									<div className='contact_info_title'>
										Phone
									</div>
									<div className='contact_info_text'>
										+91 897 5436 987
									</div>
								</div>
							</div>
							{/* Email */}
							<div className='contact_info_item d-flex justify-content-start align-items-center'>
								<img
									src='https://img.icons8.com/ultraviolet/40/000000/email.png'
									alt='Email'
								/>
								<div className='contact_info_content'>
									<div className='contact_info_title'>
										Email
									</div>
									<div className='contact_info_text'>
										dhanishssuvarna123@gmail.com
									</div>
								</div>
							</div>
							{/* Address */}
							<div className='contact_info_item d-flex justify-content-start align-items-center'>
								<img
									src='https://img.icons8.com/ultraviolet/40/000000/address.png'
									alt='Address'
								/>
								<div className='contact_info_content'>
									<div className='contact_info_title'>
										Address
									</div>
									<div className='contact_info_text'>
										Udupi, Karnataka, India
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Us Form */}
			<div className='contact_form'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-10 offset-lg-1'>
							<div className='contact_form_container py-5'>
								<div className='contact_form_title'>
									Get In Touch
								</div>
								<form id='contact_form'>
									<div className='contact_form_name d-flex justify-content-between align-items-center'>
										<input
											type='text'
											id='contact_form_name'
											className='contact_form_name input_field'
											placeholder='Your Name'
											required='true'
										/>
										<input
											type='email'
											id='contact_form_email'
											className='contact_form_email input_field'
											placeholder='Your Email'
											required='true'
										/>
										<input
											type='number'
											id='contact_form_phone'
											className='contact_form_phone input_field'
											placeholder='Your Phone Number'
											required='true'
										/>
									</div>
									<br />
									<br />
									<div className='contact_info_text'>
										<textarea
											className='text_field contact_form_message'
											placeholder='Message'
											cols='30'
											rows='10'
										></textarea>
									</div>
									<div className='contact_form_button'>
										<button
											type='submit'
											className='button contact_submit_button'
										>
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
