import {Link} from "react-router-dom";

const Footer = () => {
 return (
    <header className="header">
        <nav>
            <ul>
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
            </ul>
        </nav>
    </header>
 );
    
};

export default Footer;