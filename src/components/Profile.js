import React from "react";
import "./profile.css";


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
                    <div className="middle__side">
                        <div className="middle__side__wrapper">
                            <div className="middle__side-title">
                                <p><span className="middle__side-span">Your profile.</span> Change, edit and manage your data. </p>
                            </div>
                            <div className="middle__side__myprofile">
                                <div className="myprofile-buttons">
                                    <div className="button-myprofile">My profile</div>
                                    <div className="button-activities">Activities</div>
                                </div>

                                <div className="myprofile">
                                    <div className="myprofile-title">
                                        Anna Smith
                                    </div>
                                    <div className="myprofile-title-img">
                                        <a  href="#"><img src={require("../images/3b0045c9cc47b640ddcb43d6d06d1379.png")} alt="logo"/></a>
                                    </div>
                                    <div className="myprofile-info">
                                        <label className="label-email">Email:</label>
                                        <label className="label-phone">Phone:</label>
                                        <label className="label-fb">FB link:</label>
                                        <input className="info-email" type="text" name="email"/>
                                        <input className="info-phone" type="text" name="phone"/>
                                        <input className="info-fb" type="text" name="fb"/>
                                    </div>
                                </div>
                            </div>
                            <div className="myprofile__buttons">
                                <button className="myprofile__buttons-cancel">Cancel</button>
                                <button className="myprofile__buttons-save">Save changes</button>
                            </div>
                        </div>

                    </div>
                    <div className="right__side"></div>

                </footer>

            </div>
        )
    }
}

export default Templ;