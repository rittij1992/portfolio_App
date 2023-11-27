import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* <!-- footer
   ================================================== --> */}

            <footer>
                <div className="row">

                    <div className="col-six tab-full pull-right social">

                        <ul className="footer-social">
                            <li><Link to="https://twitter.com/ritzsmaz" target="_blank"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/in/rittij-mazumder-a3a119274/" target="_blank"><i
                                className="fa fa-linkedin-square" aria-hidden="true"></i></Link></li>
                            {/* <!-- <li><a href="https://www.imdb.com/name/nm13094710/" target="_blank"><i classNameName="fa fa-imdb"></i></a></li> --> */}
                            <li><Link to="https://www.instagram.com/rittij.maz_ig/" target="_blank"><i className="fa fa-instagram"></i></Link>
                            </li>
                        </ul>

                    </div>

                    <div className="col-eight tab-full">
                        <div className="copyright">
                            <span>© Copyright 2023 </span>
                        </div>
                    </div>
                </div>
                {/* <!-- /row --> */}
            </footer>
        </>
    )
}

export default Footer;