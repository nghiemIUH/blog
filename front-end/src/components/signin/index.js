import { useState } from "react";
import Cookies from "js-cookie";
import "./styles/signin.css";
import { ip } from "../../IP";

export default function Signin({ Login, error }) {

    const [details, setDetails] = useState({ userName: "", password: "" });

    const submitHandle = async e => {
        e.preventDefault();
        const requestLogin = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": details.userName,
                "password": details.password
            })
        }
        try {
            await fetch(ip + "/user/sign-in", requestLogin)
                .then(response => response.json())
                .then(i => {
                    try {
                        localStorage.setItem("avatar", i.user.avatar);
                        const user = JSON.stringify({
                            "username": i.user.userName,
                            "email": i.user.email,
                            "isStaff": i.user.isStaff,
                            "isUser": i.user.isUser,
                            "isAdmin": i.user.isAdmin,
                            "fullName": i.user.fullName
                        })
                        Cookies.set("user", user);
                        Cookies.set("token", i.accessToken);
                    } catch (error) { };
                    Login();
                }).catch();
        } catch (error) { }
    }

    return (
        <form className="SignIn__Form" onSubmit={submitHandle}>
            <div className="SignIn__PageName">Đăng nhập</div>
            <div className="SignIn__Content">
                <label className="SignIn__Label_in" htmlFor="userName">User Name: </label>
                <input className="SignIn__Inp" type="text" name="User Name" id="userName" required placeholder="Tài khoản"
                    onChange={e => setDetails({ ...details, userName: e.target.value })} value={details.userName} />
                <label className="SignIn__Label_in" htmlFor="password">Password: </label>
                <input className="SignIn__Inp" type="password" name="password" id="password" required placeholder="Mật khẩu"
                    onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>
            <p className="SignIn__Err">{error}</p>
            <div className="SignIn__Btn-frame">
                <input className="SignIn__Btn" type="submit" value="Đăng nhập" />
            </div>
        </ form>
    )
}