import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import Services from "./Services/Services";

const Layout = ()=> {
    return(
        <>
        <div>
        {/* Header and intro */}
        <Header></Header>{/* the header component includes the about section component in order to handle the scroll */}
        <section>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Services></Services>
        <Contact></Contact>
        </section>
        <Footer></Footer>
        </div>
        
        </>
    )
}

export default Layout;