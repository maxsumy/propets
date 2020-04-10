import React from "react";
import "./sign.css";


class Sign extends React.Component{
    render() {
        return(
            <div className="containerSign">
                <div className="headerSign">
                    <img className="imgSign" src={require("../images/Group 1.svg")} alt="logo"/>

                </div>

                <section className="textSign">
                    <span className="textSignBold">Welcome!</span> Please sign in / sign up to continue

                </section>

                <section className="signUpSign">

                    <div className="signUpText">
                        Sign Up

                    </div>

                </section>

                <form className="singForm">
                    <div className="label-group-sing">
                        <div className="label-sing">
                            Name:
                        </div >
                        <div className="label-sing">
                            Email:
                        </div>
                        <div className="label-sing">
                            Password:
                        </div>
                        <div className="label-sing">
                            Password:
                        </div>
                    </div>

                    <div className="input-group-sing">
                        <input className="label-sing" name="Name" id="Student"/>
                        <input className="label-sing" name="Name" id="Student"/>
                        <input className="label-sing" type="password" id="pwd" name="pwd"/>
                        <input className="label-sing" type="password" id="pwd" name="pwd"/>
                    </div>


                    {/*<div className="form-group-sing">*/}
                    {/*    <label for="Name">Name:</label>*/}
                    {/*    <input className="nameSign" name="Name" id="Student"/>*/}

                    {/*    <label htmlFor="Name">Email:</label>*/}
                    {/*    <input className="nameSign" name="Name" id="Student"/>*/}

                    {/*    <label htmlFor="pwd">Password:</label>*/}
                    {/*    <input type="password" id="pwd" name="pwd"/>*/}

                    {/*    <label htmlFor="pwd">Password:</label>*/}
                    {/*    <input type="password" id="pwd" name="pwd"/>*/}
                    {/*</div>*/}
                </form>



            </div>
        )
    }
}

export default Sign;