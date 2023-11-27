import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import About from "../About/About";

const Header = () => {
    const ref = useRef(null);
    const [menuToggle, setMenuToggle] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setMenuToggle(!menuToggle);
    }

    const handleScroll = (e) => {
        e.preventDefault();
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            {/* <!-- header 
   ================================================== --> */}
            <header>
                <div className="row">

                    <div className="top-bar">
                        <Link onClick={(e) => toggleMenu(e)}
                            className="menu-toggle">
                                {
                                    menuToggle ? <i className="fa fa-times" aria-hidden="true"></i> : <span>Menu</span>
                                }
                            
                        </Link>

                        <div className="logo">
                            <Link to='/'><img src="R_logo.png" alt="nameLogo"></img></Link>
                        </div>

                        <nav id="main-nav-wrap">
                            <ul className="main-navigation" style={{"display": menuToggle ? "block" : "none"}}>
                                <li className="current"><a className="smoothscroll" href="#intro" title="">Home</a></li>
                                <li><a className="smoothscroll" href="#about" title="">About</a></li>
                                <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
                                <li><a className="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
                                <li><a className="smoothscroll" href="#services" title="">Services</a></li>
                                <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- /top-bar --> */}

                </div>
                {/* <!-- /row --> */}
            </header>
            {/* <!-- /header --> */}

            {/* <!-- intro section
   ================================================== --> */}
            <section id="intro">

                <div className="intro-overlay"></div>

                <div className="intro-content">
                    <div className="row">

                        <div className="col-twelve">

                            <h5>Hello, World.</h5>
                            <h1>I'm Rittij Mazumder.</h1>

                            <p className="intro-position">
                                <span>Front-end Developer</span>
                                <span>MERN Statck Developer</span>
                                <span>Content Developer</span>
                            </p>

                            <Link onClick={(e)=>handleScroll(e)} className="button stroke smoothscroll">More About Me</Link>

                        </div>

                    </div>
                </div>
                {/* <!-- /intro-content --> */}

                <ul className="intro-social">
                    <li><Link to="https://twitter.com/ritzsmaz" target="_blank"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="https://www.linkedin.com/in/rittij-mazumder-a3a119274/" target="_blank"><i
                        className="fa fa-linkedin-square" aria-hidden="true"></i></Link></li>
                    {/* <!-- <li><a href="https://www.imdb.com/name/nm13094710/" target="_blank"><i className="fa fa-imdb"></i></a></li> --> */}
                    <li><Link to="https://www.instagram.com/rittij.maz_ig/" target="_blank"><i className="fa fa-instagram"></i></Link>
                    </li>
                </ul>
                {/* <!-- /intro-social --> */}

            </section>
            {/* <!-- /intro --> */}
{/* --------------------------------------------------------------------------------------- */}


            {/* about section */}
            <div ref={ref}>
            <About></About>
            </div>
            

        </>
    )
}

export default Header;