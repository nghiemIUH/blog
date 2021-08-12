import React from "react";
import "./SignUp.css";
import Navbar from "../navbar/Navbar";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fileName: "Choose file",
        };
    }

    generateInputFile = () => {
        return (
            <label htmlFor="avatar" className="label__selectfile">
                {this.state.fileName}
            </label>
        );
    };

    handleChooseFile = (event) => {
        let path = event.target.value.split("\\");
        this.setState({
            fileName: path[path.length - 1],
        });
    };

    render() {
        return (
            <>
                <Navbar />
                <div className="sign-up">
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
                            <div className="choose__file">
                                <label className="title__avatar">Avatar</label>
                                {this.generateInputFile()}
                                <input
                                    type="file"
                                    style={{ border: "none" }}
                                    id="avatar"
                                    name="avatar"
                                    ref="avatar"
                                    hidden
                                    onChange={this.handleChooseFile}
                                />
                            </div>

                            <button className="btn__signup">Sign up</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SignUp;
