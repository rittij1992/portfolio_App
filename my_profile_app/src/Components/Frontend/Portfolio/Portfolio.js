const Portfolio = ()=> {
    return(
        <>
        {/* <!-- Portfolio Section
   ================================================== --> */}
	<section id="portfolio">

		<div className="row section-intro">
			<div className="col-twelve">

				<h5>Portfolio</h5>
				<h1>Check Out Some of My Works.</h1>

				<p className="lead">Hi! Please go through my projects for which I have spent hundreds of hours so that I can deliver the best of my ability.
                These projects are to exhibit my programing skills and ability to develop application. By the way, just to remind you, the website you are scrolling through is also an example!!!
                I hope you find my project apealing and interesting...</p>

			</div>
		</div>
        {/* <!-- /section-intro--> */}

		<div className="row portfolio-content">

			<div className="col-twelve">

				{/* <!-- portfolio-wrapper --> */}
				<div id="folio-wrapper" className="block-1-2 block-mob-full stack">

					<div className="bgrid folio-item">
						<div className="item-wrap">
							<img src="book_Store.jpg" alt="Liberty"></img>
							<a href="#modal-01" className="overlay">
								<div className="folio-item-table">
									<div className="folio-item-cell">
										<h3 className="folio-title">Pixie Book Store</h3>
										<span className="folio-types">
											Web Development
										</span>
									</div>
								</div>
							</a>
						</div>
					</div> 
                    {/* <!-- portfolio-item --> */}
                    
					{/* <!-- modal popups - begin
	            ============================================================= --> */}
					{/* <div id="modal-01" className="popup-modal slider mfp-hide">

						<div className="media">
							<img src="images/portfolio/modals/m-liberty.jpg" alt="" />
						</div>

						<div className="description-box">
							<h4>Pixie Book Store</h4>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
								auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

							<div className="categories">Web Development</div>
						</div>

						<div className="link-box">
							<a href="http://www.behance.net">Details</a>
							<a href="#" className="popup-modal-dismiss">Close</a>
						</div>

					</div>  */}
                    {/* <!-- /modal-01 --> */}

					{/* <!-- modal popups - end
	            ============================================================= --> */}

				</div> 
                {/* <!-- /portfolio-wrapper --> */}

			</div> 
            {/* <!-- /twelve --> */}

		</div> 
        {/* <!-- /portfolio-content --> */}

	</section> 
    {/* <!-- /portfolio --> */}

        </>
    )
}

export default Portfolio;