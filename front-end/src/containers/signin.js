import { useState } from "react";
import { HOME } from '../constants/routes';
import { Signin } from "../components";
import Cookies from "js-cookie";

export function SigninContainer() {

    const [error, setError] = useState("");

    const Login = () => {
        try {
            JSON.parse(Cookies.get("user"));
            window.location.href = HOME;
        } catch (error) {
            Cookies.remove("token");
            Cookies.remove('pass');
            Cookies.remove("user");
            localStorage.removeItem("avatar")
            setError("Tài khoản hoặc mật khẩu sai")
        }
    }

    return (
        <Signin Login={Login} error={error} />
    )
}