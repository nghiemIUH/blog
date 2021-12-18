import { useState } from "react";
import { Signup } from "../components";
import { HOME } from "../constants/routes";
import Cookies from "js-cookie";

export function SignupContainer() {

    const [error, setError] = useState("")

    const Register = () => {
        try {
            JSON.parse(Cookies.get("user"));
            window.location.href = HOME;
        } catch (error) {
            Cookies.remove("token");
            Cookies.remove("user")
            localStorage.removeItem("avatar")
            if (Cookies.get("message") === "undefined") {
                setError("Lỗi đăng kí");
            } else {
                setError(Cookies.get("message"));
                Cookies.remove("message");
            }
        }
    }

    return (
        <Signup Register={Register} error={error} />
    )
}