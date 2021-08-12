import React from "react";
import "./Login.css";
import Navbar from "../navbar/Navbar";
class Login extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="login">
                    <div className="login__title">Log in</div>
                    <div className="login__form">
                        <form action="" className="">
                            <div>
                                <label htmlFor="">Username</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <input type="password" />
                            </div>
                        </form>
                        <div className="forgot__password">
                            <a href="">Forgot password ?</a>
                        </div>
                        <button className="btn__login">Log in</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
