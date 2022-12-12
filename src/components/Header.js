import {Link} from "react-router-dom";

const Header = () => {
 return (
    <header className="header">
        <nav>
            <ul className="headerList">
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
            </ul>
        </nav>
    </header>
 );
    
};

export default Header;