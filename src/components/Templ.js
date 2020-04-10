import React from "react";
import "./templ.css";


class Templ extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className="wrapper">

                <header>
                    <div className="header__container">
                        <div className="header-logo">
                            <a href="#"><img src={require("../images/group2.svg")} alt="logo"/></a>
                        </div>

                    </div>
                </header>

                <footer className="footer__main">
                    <div className="left__side">

                        <div className="menu-ul">
                            <ul>
                                <li className="menu-ul-li-1"><a href="#">Home</a></li>
                                <li className="menu-ul-li-2"><a href="#">Lost</a></li>
                                <li className="menu-ul-li-3"><a href="#">Found</a></li>
                                <li className="menu-ul-li-4"><a href="#">Services</a></li>
                                <li className="menu-ul-li-5"><a href="#">Favorites</a></li>
                            </ul>
                        </div>

                        <div className="anna_smith-logout">

                            <div className="anna_smith">
                                <ul>
                                    <li className="anna-li"><a href="#">Anna</a></li>
                                    <li><a href="#">Smith</a></li>
                                </ul>

                            </div>
                            <div className="logout">
                                <ul>
                                    <li className="logout-li"><a href="#">Logout</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div className="middle__side"></div>
                    <div className="right__side"></div>

                </footer>

            </div>
        )
    }
}

export default Templ;