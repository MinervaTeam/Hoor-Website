import React from "react";
import "./Navbar.css";
import {Link} from "react-scroll";

const navbar = () => {
    return (

        /*left side of navbar*/
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">هور</div>
            </div>

        {/*right side of navbar*/}
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link className="link" activeClass="active" to="Navbar" spy={true} smooth={true}>خانه</Link>
                        </li>
                        <li>
                            <Link className="link" activeClass="active" to="" spy={true} smooth={true}>تماس با ما</Link>
                        </li>
                        <li>
                            <Link className="link" activeClass="active" to="Portfolio" spy={true} smooth={true}>محصولات</Link>
                        </li>
                        <li>
                            <Link className="link" activeClass="active" to="" spy={true} smooth={true}>درباره ما</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default navbar;