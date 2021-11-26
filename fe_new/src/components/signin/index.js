import { useState } from "react";
import Cookies from "js-cookie";
import "./styles/signin.css"

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
        await fetch("http://localhost:5000/user/sign-in", requestLogin)
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
    }

    return (
        <form onSubmit={submitHandle}>
            <div className="title">Đăng nhập</div>
            <div className="content">
                <label className="label_in" htmlFor="userName">User Name: </label>
                <input className="inp" type="text" name="User Name" id="userName" required placeholder="Tài khoản"
                    onChange={e => setDetails({ ...details, userName: e.target.value })} value={details.userName} />
                <label className="label_in" htmlFor="password">Password: </label>
                <input className="inp" type="password" name="password" id="password" required placeholder="Mật khẩu"
                    onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>
            <p className="err">{error}</p>
            <div className="btn-frame">
                <input className="btn" type="submit" value="Đăng nhập" />
            </div>
        </ form>
    )
}