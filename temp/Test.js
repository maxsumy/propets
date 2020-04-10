import React from "react";

class Test extends React.Component {
    render() {
        return (
            <div>

                <div className="header">
                    <div className="pro_pets_logo">
                        <img src={require("../images/Group 1.svg")} alt="logo"/>
                    </div>

                    <div>
                        <a className="btn btn_sign_in" href="#" role="button">Sign in</a>
                    </div>
                </div>

                <div className="main1">

                    <div className="text_main1">
                        <p>
                            Welcome to your pawfessional community
                        </p>

                    </div>

                    <div className="img_dog">
                        {/*<img src={require("../images/Image 2.png")} alt="logo"/>*/}
                    </div>

                </div>

                <div className="footer">

                </div>

            </div>


        )
    }
}

export default Test;