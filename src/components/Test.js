import React from "react";
import "./test.css";

class Test extends React.Component {

    constructor() {
        super();
        this.state ={
            lost: 'I lost my pet!',
            found: 'I found a pet!',

            singStyle:{
                display: 'none'
            },
            divStyle: {
                display: ''
            },
            divStyle1: {
                display: ''
            },

            passwordStyle: {
                display: 'none'
            },
            opasStyle:{
                opacity: 0.28
            },
            opasStyle1:{
                opacity: 1
            },
            footerStyle:{
               "margin-top": '35px'
            }

          };
    }

    mouseOverFunkLost = ()=>{

        this.setState({lost: "Click to find!"});

    }

    mouseOutFunkLost = ()=>{
        this.setState({lost: "I lost my pet!"});

    }

    mouseOverFunkFound = ()=>{

        this.setState({found: "What to do?"});

    }

    mouseOutFunkFound = ()=>{
        this.setState({found: "I found a pet!"});

    }

    mouseClickOnSing = () =>{
        this.setState({singStyle: {
                display: ''
            }});
    }

    mouseClickOnX = ()=>{
        this.setState({singStyle: {
                display: 'none'
            }});
    }

    mouseClickOnSingIn = ()=>{
        this.setState({divStyle1: {
                display: 'none'
            },
            opasStyle:{
                opacity: 1
            },
            opasStyle1:{
                opacity: 0.28
            },
            passwordStyle: {
                display: ''
            },
            footerStyle:{
                "margin-top": '103px'
            }
        });

    }

    mouseClickOnSingUp = ()=>{
        this.setState({divStyle1: {
                display: ''
            },
            opasStyle:{
                opacity: 0.28
            },
            opasStyle1:{
                opacity: 1
            },
            passwordStyle: {
                display: 'none'
            },
            footerStyle:{
                "margin-top": '35px'
            }
        });
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">

                        <div className="header_logo">
                            <a href="#"><img src={require("../images/Group 1.svg")} alt="logo"/></a>

                        </div>

                        <nav className="menu">
                            <ul>
                                <li><a onClick={this.mouseClickOnSing} className="header_btn" href="#">Sign in</a></li>
                            </ul>

                        </nav>

                    </div>

                </header>

                <section className="section">
                    <div className="container1">
                        <div className="section_text">
                            <p>Welcome to your <span className="pawfessional">pawfessional</span> community</p>
                            <div className="lost_found">
                                <a onMouseOver={this.mouseOverFunkLost} onMouseOut={this.mouseOutFunkLost} className="section_lost" href="#">{this.state.lost}</a>
                                <a onMouseOver={this.mouseOverFunkFound} onMouseOut={this.mouseOutFunkFound} className="section_found" href="#">{this.state.found}</a>
                                <img className="img_lost" src={require("../images/Group 11.svg")} alt="logo"/>
                            </div>
                            <div className="im_ok">
                               <p>I’m okay, just want to <a className="join" href="#">JOIN</a> the pawsome community!</p>
                            </div>

                        </div>
                        <div className="simage">
                            <img src={require("../images/Image 2.png")} alt="logo"/>

                        </div>

                    </div>

                </section>

                <section className="section2">
                    <div className="container2">
                        Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.

                    </div>

                </section>

                <section className="section2_5">

                </section>

                <section className="section3">
                    <div className="container3">
                        <div className="img_anm">
                            <img className="img_anm1" src={require("../images/8347.png")} alt="animal"/>

                        </div>

                        <div className="sec3_text">
                            <p className="here">Here is collected everything that your pet needs:</p>
                            <ul>
                                <li>professional veterinarian tips;</li>
                                <li>useful information about education and care;</li>
                                <li>fostering home search;</li>
                                <li>information about pet-sitting and walking service;</li>
                                <li>and of course, great communication with new friends in your social network!</li>

                            </ul>
                        </div>


                    </div>


                </section>

                <section className="section4">
                    <div className="container4">
                        <div className="com_soon">
                            <p className="com_s">Coming soon</p>

                        </div>

                        <div className="we_are">
                            <p className="wa"> We are planing to open a new service,</p>
                            <p className="wa1">where your cats and dogs can find their love!</p>

                        </div>

                        <div className="love">
                            <img className="img_anm1" src={require("../images/component.png")} alt="animal"/>
                            <p className="lv">LOVE</p>

                        </div>

                    </div>
                </section>

                <footer className="footer">
                    <div className="container5">
                        <div className="footer_logo">
                            <a href="#"><img src={require("../images/Group 87.svg")} alt="logo"/></a>
                        </div>
                        <div className="footer_midl">
                            <div className="facebook">
                                <a href="https://www.facebook.com" target="_blank"><img src={require("../images/facebook.png")} alt="facebook" /></a>
                            </div>
                            <div className="instagram">
                                <a href="https://www.instagram.com" target="_blank"><img src={require("../images/instagram.png")} alt="facebook" /></a>

                            </div>
                            <p className="adress1">1600 Amphitheatre Pkwy</p>
                            <p className="adress2">Mountain View, CA 94043, USA</p>
                        </div>

                        <div className="links">
                            <div className="links1">
                                <div>
                                    <a className="lost_footer" href="#">Lost</a>
                                </div>
                                <div>
                                    < a className="found_footer" href="#">Found</a>
                                </div>
                                <div>
                                    <a className="vet_help" href="#">VetHelp</a>
                                </div>
                            </div>

                            <div className="links2">
                                <div>
                                    <a className="hotels" href="#">Hotels</a>
                                </div>
                                <div>
                                    <a className="walking" href="#">Walking</a>
                                </div>
                                <div>
                                    <a className="fostering" href="#">Fostering</a>
                                </div>
                        </div>


                    </div>


                    </div>

                </footer>

                {/*<div className="sing" style={this.state.divStyle}>*/}
                <div className="sing" style={this.state.singStyle}>

                    <div className="sing__high">
                        <div className="sing__conteiner">
                            <div className="sing__high__inner">
                                <div className="sing-logo">
                                    <img src={require("../images/group2.svg")} alt="logo"/>
                                </div>
                                <div onClick={this.mouseClickOnX} className="sing-x">X</div>
                            </div>
                        </div>
                    </div>

                    <div className="sing__sec1">
                        <div className="sing__conteiner">
                            <div className="sing__sec1__text">
                                <span className="sing__sec1_span">Welcome!</span> Please sign in / sign up to continue
                            </div>
                        </div>
                    </div>

                    <div className="sing__sec2">
                        <div className="sing__conteiner">
                            <div className="sing_sec2__inner">
                                <div onClick={this.mouseClickOnSingUp} className="sing__sec2__sing_up">
                                    <a className="sing_up" href="#" style={this.state.opasStyle1}><div>Sign up</div></a>
                                </div>
                                <div onClick={this.mouseClickOnSingIn} className="sing__sec2__sing_in">
                                    <a className="sing_in" href="#" style={this.state.opasStyle}>Sign in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sing__forms">
                        <div className="sing__conteiner">
                            <div className="sing__forms_inner">
                                <div className="forms__forms">
                                    <div className="label-group-sing">
                                        <div className="label-sing label-text" style={this.state.divStyle1}>
                                            Name:
                                        </div >
                                        <div className="label-sing label-text">
                                            Email:
                                        </div>
                                        <div className="label-sing label-text">
                                            Password:
                                        </div>
                                        <div className="label-sing label-text" style={this.state.divStyle1}>
                                            Password:
                                        </div>
                                    </div>

                                    <div className="input-group-sing">
                                        <input className="label-sing" type="text" id="Student" style={this.state.divStyle1}/>
                                        <input className="label-sing" type="text" id="Student"/>
                                        <input className="label-sing" type="password" id="pwd" name="pwd"/>
                                        <input className="label-sing" type="password" id="pwd" name="pwd" style={this.state.divStyle1}/>
                                    </div>
                                </div>
                                <div className="forms__text" style={this.state.divStyle1}>
                                    <p>Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and at least one number or special character.
                                    </p>
                                    <p>
                                        Please re-enter your password
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="forgot-password" style={this.state.divStyle1}>*/}
                    <div className="forgot-password" style={this.state.passwordStyle}>
                        <div className="sing__conteiner">
                            <div className="forget-password-inner">
                                <div className="forgot-password__text">
                                    <p > <a className="forgot-password__link" href="#">Forgot password?</a></p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="sing__footer">
                        <div className="sing__conteiner">
                            <div className="sing__footer__inner" style={this.state.footerStyle}>
                                <div className="sing__footer__text">
                                    <p>By clicking “Submit”, you agree to us processing your
                                        information in accordance with <a className="sing__footer__link" href="#">these terms</a>.</p>

                                </div>
                                <div className="sing__footer__buttons">
                                    <div>
                                        <a onClick={this.mouseClickOnX}  className="button-cancel" href="#">Cancel</a>
                                    </div>

                                    <div className="sing-button-submit">
                                        <a className="button-submit" href="#">Submit</a>
                                    </div>



                                </div>

                            </div>
                        </div>


                    </div>


                </div>


            </div>


        )
    }
}



export default Test;