import React from "react";
import "./profile.css";


class Templ extends React.Component {
    constructor(){
        super();
        this.state ={
            myProfile: true,
            activities: false,
            opasStyle:{
                opacity: 0.36
            },
            opasStyle1:{
                opacity: 1
            },
        }

    }

    clickActivities =()=>{
        this.setState({
            myProfile: false,
            activities: true,
            opasStyle:{
                opacity: 1
            },
            opasStyle1:{
                opacity: 0.36
            },
        })
    }

    clickMyProfile =()=>{
        this.setState({
            myProfile: true,
            activities: false,
            opasStyle:{
                opacity: 0.36
            },
            opasStyle1:{
                opacity: 1
            },
        })
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

                                    <div onClick={this.clickMyProfile} className="button-myprofile" style={this.state.opasStyle1}>My profile</div>
                                    <div onClick={this.clickActivities} className="button-activities" style={this.state.opasStyle}>Activities</div>
                                </div>

                                {this.state.myProfile &&
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
                                }

                                {this.state.activities &&
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


                                }


                            </div>

                            {this.state.myProfile &&
                            <div className="myprofile__buttons">
                                <button className="myprofile__buttons-cancel">Cancel</button>
                                <button className="myprofile__buttons-save">Save changes</button>
                            </div>
                            }

                        </div>

                    </div>
                    <div className="right__side"></div>

                </footer>

            </div>
        )
    }
}

export default Templ;