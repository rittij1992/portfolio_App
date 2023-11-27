import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

	const form = useRef();
	const [loader, setLoader] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoader(true);

		emailjs.sendForm('service_8kcftvm', 'template_b5js1a6', form.current, 'yw9ZIGWJZOO0eyCgL')
			.then((result) => {
				console.log(result.text);
				setLoader(false);
				window.alert("Message sent successfully...");
			}, (error) => {
				console.log(error.text);
			});
	};


	return (
		<>
			{/* <!-- contact
   ================================================== --> */}
			<section id="contact">

				<div className="row section-intro">
					<div className="col-twelve">

						<h5>Contact</h5>
						<h1>I'd Love To Hear From You.</h1>

						<p className="lead">Looking to enhance your website or create engaging content? Contact me for web
							development or content creation services!</p>

					</div>
				</div>
				{/* <!-- /section-intro --> */}

				<div className="row contact-form">

					<div className="col-twelve">

						{/* <!-- form --> */}
						<form ref={form} onSubmit={sendEmail}
							name="contactForm" id="contactForm" method="post" action="">
							<fieldset>

								<div className="form-field">
									<input name="user_name" type="text" id="contactName" placeholder="Name"
										minlength="2" required=""></input>
								</div>
								<div className="form-field">
									<input name="user_email" type="email" id="contactEmail" placeholder="Email"
										required=""></input>
								</div>
								<div className="form-field">
									<input name="subject" type="text" id="contactSubject" placeholder="Subject"></input>
								</div>
								<div className="form-field">
									<textarea name="message" id="contactMessage" placeholder="message" rows="10"
										cols="50" required=""></textarea>
								</div>
								<div className="form-field">
									<button type="submit" value="Send" className="submitform">Submit</button>
									<div style={{"display": loader ? "block" : "none"}} id="submit-loader">
										<div className="text-loader">Sending...</div>
										<div className="s-loader">
											<div className="bounce1"></div>
											<div className="bounce2"></div>
											<div className="bounce3"></div>
										</div>
									</div>
								</div>

							</fieldset>
						</form>
						{/* <!-- Form End --> */}

						{/* <!-- contact-warning --> */}
						<div id="message-warning">
						</div>
						{/* <!-- contact-success --> */}
						<div id="message-success">
							<i className="fa fa-check"></i>Your message was sent, thank you!
						</div>

					</div>
					{/* <!-- /col-twelve --> */}

				</div>
				{/* <!-- /contact-form --> */}

				<div className="row contact-info">

					<div className="col-four tab-full">

						<div className="icon">
							<i className="icon-pin"></i>
						</div>

						<h5>Where to find me</h5>

						<p>
							71C, Purna Chandra Mitra Lane,<br></br>Kolkata, West Bengal, INDIA
						</p>

					</div>


					<div className="col-four tab-full collapse">

						<div className="icon">
							<i className="icon-mail"></i>
						</div>

						<h5>Email Me At</h5>

						<p>rittij.mazumder@gmail.com
						</p>

					</div>

					<div className="col-four tab-full">

						<div className="icon">
							<i className="icon-phone"></i>
						</div>

						<h5>Call Me At</h5>

						<p>
							Phone: (+91) 9831907880
						</p>

					</div>

				</div>
				{/* <!-- /contact-info --> */}

			</section>
			{/* <!-- /contact --> */}

		</>
	)
}

export default Contact;