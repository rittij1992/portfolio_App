
const About = ()=> {

	const myCV_FileUrl = 'http://localhost:3000/rittij_mazumderSD_CV.pdf';

	const downloadFile = (url) => {
		const fileName = url.split("/").pop();
		const aTag = document.createElement('a');
		aTag.href = url;
		aTag.setAttribute("Download", fileName);
		document.body.appendChild(aTag);
		aTag.click();
		aTag.remove();
	}
    return(
        <>
        {/* <!-- about section
   ================================================== --> */}
	<section id="about">

		<div className="row section-intro">
			<div className="col-twelve">

				<h5>About</h5>
				<h1>Let me introduce myself.</h1>

				<div className="intro-info">

					<img src="images/profile_pic.jpeg" alt="Profile"></img>

					<p className="lead">I am a driven Web Developer skilled in team collaboration to formulate and
						conceptualize corporate web presence. Embraces challenging projects
						requiring detailed coding changes, search engine-related considerations
						and security. Integrates knowledge of visual arts to develop functional,
						appealing, custom-made web products and services.</p>
				</div>

			</div>
		</div> 
        {/* <!-- /section-intro --> */}

		<div className="row about-content">
 
			<div className="col-six tab-full">

				<h3>Profile</h3>
				<p>I am a MERN stack web developer. I am a fresher and a very fast learner, ready to learn and grow my
					skills so that employers can benefit from my work.</p>

				<ul className="info-list">
					<li>
						<strong>Fullname:</strong>
						<span>Rittij Mazumder</span>
					</li>
					<li>
						<strong>Birth Date:</strong>
						<span>August 11th, 1992</span>
					</li>
					<li>
						<strong>Job:</strong>
						<span>Freelancer, Frontend Developer,</span>
						<span>MERN Stack Developer,</span>
						<span>Content Developer</span>
					</li>
					<li>
						<strong>Website:</strong>
						<span>www.kardswebsite.com</span>
					</li>
					<li>
						<strong>Email:</strong>
						<span>rittij.mazumder@gmail.com</span>
					</li>

				</ul> 
                {/* <!-- /info-list --> */}

			</div>

			<div className="col-six tab-full">

				<h3>Skills</h3>
				<p>Developed fully functional e-commerce website using the MERN stack Implemented user authentication,
					product listing, shopping cart, and payment integration using Stripe API Created a responsive and
					intuitive user interface using React.js and styled components Implemented CRUD operations using
					Node.js and Express.js for managing product data in the MongoDB database.</p>

				<ul className="skill-bars">
					<li>
						<div className="progress percent90"><span>90%</span></div>
						<strong>HTML5</strong>
					</li>
					<li>
						<div className="progress percent85"><span>85%</span></div>
						<strong>CSS3</strong>
					</li>
					<li>
						<div className="progress percent75"><span>75%</span></div>
						<strong>Java Script</strong>
					</li>
					<li>
						<div className="progress percent95"><span>95%</span></div>
						<strong>MERN Stack</strong>
					</li>
					<li>
						<div className="progress percent70"><span>70%</span></div>
						<strong>Git, Git Hub</strong>
					</li>
					<li>
						<div className="progress percent80"><span>80%</span></div>
						<strong>Postman API(Rest)</strong>
					</li>

				</ul> 
                {/* <!-- /skill-bars --> */}

			</div>

		</div>

		<div className="row button-section">
			<div className="col-twelve">
				<a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
				<button onClick={()=>downloadFile(myCV_FileUrl)}  title="Download CV" className="button button-primary">Download CV</button>
			</div>
		</div>

	</section> 
    {/* <!-- /process--> */}
        </>
    )
}

export default About;