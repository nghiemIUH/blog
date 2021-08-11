import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
    render() {
        return (
            <div className="sign-up">
                <div className="bg__signup">
                    <div className="my__form">
                        <div className="title__signup">Sign Up</div>
                        <div className="input__form">
                            <div>
                                <label>Username</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Full Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="Email" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div>
                                <label>Password confirm</label>
                                <input type="password" />
                            </div>
                            <div>
                                <label>Avatar</label>
                                <input type="file" style={{ border: "none" }} />
                            </div>
                            <button className="btn__signup">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
