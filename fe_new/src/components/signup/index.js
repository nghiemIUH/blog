import Cookies from "js-cookie";
import { useState } from "react"
import Resizer from "react-image-file-resizer";
import "./styles/signup.css"

export default function Signup({ Register, error }) {

    const [details, setDetails] = useState({ userName: "", password: "", email: "", fullName: "", avatar: "" });

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(file, 300, 300, "JPEG", 100, 0, (uri) => { resolve(uri); }, "base64");
        });

    const toBase64 = async e => {
        try {
            const image = await resizeFile(e.target.files[0]);
            setDetails({ ...details, avatar: image });
        } catch (error) { }
    };

    const submitHandle = async e => {
        e.preventDefault();
        const requestSiginup = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": details.userName,
                "password": details.password,
                "email": details.email,
                "fullName": details.fullName,
                "avatar": details.avatar
            })
        }
        await fetch("http://localhost:5000/user/sign-up", requestSiginup)
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
                } catch (error) {
                    Cookies.set("message", i.message);
                };
                Register();
            }).catch();

    }

    return (
        <form onSubmit={submitHandle}>
            <div className="title">Đăng kí</div>
            <div className="content">
                <label className="label_in" htmlFor="userName">User Name: </label>
                <input className="inp" type="text" name="User Name" id="userName" required placeholder="Tài khoản"
                    onChange={e => setDetails({ ...details, userName: e.target.value })} value={details.userName} />

                <label className="label_in" htmlFor="password">Password: </label>
                <input className="inp" type="password" name="password" id="password" required placeholder="Mật khẩu"
                    onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />

                <label className="label_in" htmlFor="email">Email: </label>
                <input className="inp" type="email" name="email" id="email" required placeholder="Email"
                    onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />

                <label className="label_in" htmlFor="fullName">Full Name: </label>
                <input className="inp" type="fullName" name="fullName" id="fullName" required placeholder="Full Name"
                    onChange={e => setDetails({ ...details, fullName: e.target.value })} value={details.fullName} />

                <label className="label_in" htmlFor="avatar">Avatar: </label>
                <input className="inp" type="file" name="avatar" id="avatar"
                    onChange={toBase64} />
            </div>
            <p className="err">{error}</p>
            <div className="btn-frame">
                <input className="btn" type="submit" value="Đăng kí" />
            </div>
        </ form>
    )
}