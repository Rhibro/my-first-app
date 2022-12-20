import {Link} from "react-router-dom";

const Footer = () => {
 return (
    <footer className="footer">
        <nav>
            <ul className="footerList">
                <li>
                    <Link className="links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <p className="footerContact">
                        Call Me: 012 345 67 89
                    </p>
                </li>
                <li>
                    <p className="footerContact">
                        Email Me: rhiannon@bron.com
                    </p>
                </li>
            </ul>
        </nav>
    </footer>
 );
    
};

export default Footer;