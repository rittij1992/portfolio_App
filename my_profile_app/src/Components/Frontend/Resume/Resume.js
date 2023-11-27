const Resume = () => {
    return (
        <>
            {/* <!-- resume Section
   ================================================== --> */}
            <section id="resume" className="grey-section">

                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>Resume</h5>
                        <h1>More of my credentials.</h1>

                        <p className="lead">Happy to share few from the timeline of my life.<br />
                            Hope you find me interesting enough to tickle your interest.</p>

                    </div>
                </div>
                {/* <!-- /section-intro--> */}

                <div className="row resume-timeline">

                    <div className="col-twelve resume-header">

                        <h2>Work Experience</h2>

                    </div>
                    {/* <!-- /resume-header --> */}

                    <div className="col-twelve">

                        <div className="timeline-wrap">

                            <div className="timeline-block">

                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>

                                <div className="timeline-header">
                                    <h3>MERN Stack Web Developer Trainee</h3>
                                    <p>Jan 2023 - Present</p>
                                </div>

                                <div className="timeline-content">
                                    <h4>Karmick Solutions</h4>
                                    <p>Learned the MERN stack technology to use in web development and worked in live projects.
                                        Used React.js for frontend and node.js for the backend with express. Developed Rest APIs.
                                        Managed data through dabase of mongoDB.
                                    </p>
                                </div>

                            </div>
                            {/* <!-- /timeline-block --> */}

                            <div className="timeline-block">

                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>

                                <div className="timeline-header">
                                    <h3>Web & Digital Content Manager</h3>
                                    <p>November 2018 - June 2022</p>
                                </div>

                                <div className="timeline-content">
                                    <h4>Windows Productions</h4>
                                    <p>Managed content distribution to online channels and social media
                                        platforms. Directed content of website by gathering information and integrating
                                        data from other departments.Utilized analytics and site metrics to determine areas of improvement.
                                        Maintained content marketing calendar to schedule creation and
                                        delivery deadlines. Edited and sourced images and videos using FCP, Premier Pro and
                                        Photoshop. Approved, reviewed and edited content flowing to website.
                                    </p>
                                </div>

                            </div>

                        </div>
                        {/* <!-- /timeline-wrap --> */}

                    </div>
                    {/* <!-- /col-twelve --> */}

                </div>
                {/* <!-- /resume-timeline --> */}

                <div className="row resume-timeline">

                    <div className="col-twelve resume-header">

                        <h2>Education</h2>

                    </div>
                    {/* <!-- /resume-header --> */}

                    <div className="col-twelve">

                        <div className="timeline-wrap">

                            <div className="timeline-block">

                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>

                                <div className="timeline-header">
                                    <h3>B.Com Hons.</h3>
                                    <p>August 2012 - July 2016</p>
                                </div>

                                <div className="timeline-content">
                                    <h4>University of Calcutta</h4>
                                    <p>
                                        Completed bachelor degree in commerce with specialisation in finance.
                                        Placed in second division with honors degree.
                                    </p>
                                </div>

                            </div>
                            {/* <!-- /timeline-block --> */}

                            <div className="timeline-block">

                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>

                                <div className="timeline-header">
                                    <h3>Certificate In MERN Stack & HTML5, CSS3</h3>
                                    <p>Jan 2023 - Nov 2023</p>
                                </div>

                                <div className="timeline-content">
                                    <h4>Karmick Institute</h4>
                                    <p>Learned the MERN stack technology to use in web development and worked in live projects.
                                        Used React.js for frontend and node.js for the backend with express. Developed Rest APIs.
                                        Managed data through dabase of mongoDB.</p>
                                </div>

                            </div>
                            {/* <!-- /timeline-block --> */}

                        </div>
                        {/* <!-- /timeline-wrap --> */}

                    </div>
                    {/* <!-- /col-twelve --> */}

                </div>
                {/* <!-- /resume-timeline --> */}

            </section>
            {/* <!-- /features --> */}

        </>
    )
}

export default Resume;