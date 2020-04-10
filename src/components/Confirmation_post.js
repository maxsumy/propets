import React from "react";
import "./confirmation_post.css";


class Confirmation_post extends React.Component {
    constructor(){
        super();
        this.state={
            bgImg: 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg'
        }
        this.img1 = "../images/5d87fd0f82452ab6787e72d1754d8900.png"
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
                                <p><span className="middle__side-span">Preview and Publish.</span> Please share the post to your FB to be more effective.</p>
                            </div>

                            <div className="middle__side-card">

                                <div className="card-img" >
                                    <img src={require("../images/5d87fd0f82452ab6787e72d1754d8900.png")} alt="logo"/>
                                </div>

                                <div className="card-info">
                                    <div className="card-info-title">
                                        Dog, Golden Retriever
                                    </div>

                                    <div className="card-info1">
                                        <div className="card-info1-col1">
                                            <p><span>Color:</span> golden</p>
                                            <p><span>Sex:</span> male</p>
                                            <p><span>Height:</span> 45 cm</p>
                                        </div>
                                        <div className="card-info1-col2">
                                            <p><span>Distinctive features:</span> blue
                                            collar with stars, no left ear,
                                            damaged tail.</p>
                                        </div>
                                    </div>

                                    <div className="card-info-description">
                                        <p><span>Description:</span> brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                                            Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
                                    </div>

                                    <div className="card-info-line"></div>

                                    <div className="card-info-adress">
                                        Florentin, 27, Tel Aviv
                                    </div>

                                    <div className="card-info-footer">
                                        <p className="card-info-john">John Goodboy</p>
                                        <p className="card-info-date">Dec 12, 2019</p>
                                        <a className="card-info-phone" href="tel:+78142332211"><img src={require("../images/phone-square-solid.svg")} alt=""/></a>
                                        <a className="card-info-facebook" href="https://www.facebook.com" target="_blank"><img src={require("../images/facebook-square-brands.svg")} alt=""/></a>
                                        <a className="card-info-emeil" href="mailto:ask@htmlbook.ru"><img src={require("../images/envelope-square-solid.svg")} alt=""/></a>
                                    </div>



                                </div>

                            </div>

                            <div className="middle-side-finger-text">
                                <p>
                                    Fingers crossed. We wish your fluffy to be found as soon as possible.
                                    Your post will expire in two weeks.
                                    To make it active again follow the instructions you’ll get in email.
                                </p>
                            </div>

                            <div className="middle-side-buttons">
                                <a className="middle-side-button-edit" href="#">Edit</a>
                                <a className="middle-side-button-publish" href="#">Publish</a>
                            </div>

                            <div className="middle-side-clicking-text">
                                By clicking “Publish”, you agree to us processing your information in
                                accordance with these terms.
                            </div>

                        </div>




                    </div>

                    <div className="right__side"></div>

                </footer>

            </div>
        )
    }
}

export default Confirmation_post;