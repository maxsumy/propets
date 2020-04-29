import React from "react";
import Popup from "reactjs-popup";
import "./service_hotels.css";

class Service_hotels extends React.Component {
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
                                {/*<li className="menu-ul-li-4"><a href="#">Services</a></li>*/}
                                <li className="menu-ul-li-4">
                                    <Popup
                                        trigger={<button className="button-services"><span className="button-services-span">Services</span></button>}
                                        position="right top"
                                        // position="right top"
                                        on="hover"
                                        contentStyle={{ padding: "0px", border: "none" }}
                                        arrow={true}
                                    >
                                        <div className="menu-main1">
                                            <div className="menu-item item1"> <a href="#">Hotels</a></div>
                                            <div className="menu-item item2"> <a href="#">Walking</a></div>
                                            <div className="menu-item item3"> <a href="#">Fostering</a></div>
                                            <div className="menu-item item4"> <a href="#">VetHelp</a></div>
                                        </div>
                                    </Popup>
                                </li>
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

export default Service_hotels;


