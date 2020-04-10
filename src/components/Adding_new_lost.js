import React from "react";
import "./adding_new_lost.css"

class Adding_new_lost extends React.Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className="main_div">

                <header>
                    <div className="header-container">
                        <div className="header-logo">
                            <a href="#"><img src={require("../images/group2.svg")} alt="logo"/></a>
                        </div>

                    </div>
                </header>

                <footer className="footer-main">
                    <div className="left-side">

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
                    <div className="middle-side">
                        <div className="middle-side-container">

                            <div className="middle-side-header">
                                <div className="middle-side-header-text">
                                    <p><span className="lost-text">Lost your buddy?</span> Keep calm and complete the form.</p>
                                </div>
                            </div>

                            <div className="middle-side-sec1">

                                <div className="forms-select">
                                    <div className="type">
                                        <select className="type-select" id="country" name="country">
                                            <option value="australia">Dog</option>
                                            <option value="canada">Cat</option>
                                            <option value="usa">Rabbit</option>
                                        </select>
                                    </div>

                                    <div className="sex">
                                        <select className="type-sex" id="country" name="country">
                                            <option value="australia">Male</option>
                                            <option value="canada">Female</option>
                                        </select>
                                    </div>


                                    <div className="breed">
                                        <input className="type-breed" type="text" id="fname" name="firstname" placeholder="Golden Retriver"/>
                                    </div>

                                    <div className="color">
                                        <input className="type-breed" type="text" id="fname" name="firstname" placeholder="Beige"/>
                                    </div>

                                    <div className="height">
                                        <select className="type-height" id="country" name="country">
                                            <option value="australia">45-70 cm</option>
                                            <option value="canada">70-100 cm</option>
                                        </select>
                                    </div>

                                    <div className="distinktiv-futures">
                                        <div className="distinktiv-futures1">
                                            <div className="distinktiv-futures2">
                                                <textarea className="type-distinktiv-futures">Some text...</textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="discription">
                                        <div className="discription1">
                                            <textarea className="type-discription" >Some text...</textarea>
                                        </div>

                                    </div>

                                    <div className="location">
                                        <textarea className="type-location">Some text...</textarea>
                                    </div>


                                </div>

                                <div className="middle-side-sec1-pic">

                                    <div className="men-dog"></div>
                                    <div className="drag-drop-form">
                                        <div className="drag-drop">
                                            <div className="drag-drop-pic">

                                            </div>
                                            <div className="drag-drop-text">
                                                <p>Drag and drop photos or</p>
                                            </div>
                                            <div className="drag-drop-button">
                                                <a className="drag-drop-button-link" href="#">Browse</a>
                                            </div>

                                        </div>
                                        <div className="form-drag-drop">
                                            <textarea className="form-drag-drop-form"></textarea>

                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="line-middle-side">

                            </div>

                            <div className="contacts">
                                <div className="phone">
                                    <input className="type-phone" type="text" id="fname" name="firstname" placeholder="Phone*"/>
                                </div>

                                <div className="email">
                                    <input className="type-email" type="text" id="fname" name="firstname" placeholder="Email"/>
                                </div>

                                <div className="facebook_prof">
                                    <input className="type-facebook_prof" type="text" id="fname" name="firstname" placeholder="Facebook profile"/>
                                </div>
                            </div>

                            <div className="middle-side-footer">
                                <div className="middle-side-footer-text">
                                  John Goodboy
                                </div>
                                <div className="middle-side-footer-button">
                                    <a className="middle-side-footer-button-link" href="#">Publish</a>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="right-side"></div>
                </footer>


            </div>
        )
    }
}

export default Adding_new_lost;