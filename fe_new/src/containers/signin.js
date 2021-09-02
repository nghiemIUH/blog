import { Signin } from "../components";
import { SIGN_UP } from "../constants/routes";

export function SigninContainer() {
    return (
        <Signin>
            <Signin.Title>Đăng nhập</Signin.Title>
            <Signin.Form>
                <Signin.TextArea>User Name:</Signin.TextArea>
                <Signin.Input placeholder='User Name' required />
                <Signin.TextArea>Password:</Signin.TextArea>
                <Signin.Input placeholder='Password' required />
                <Signin.Text href={SIGN_UP}>Tạo tài khoản</Signin.Text>
                <Signin.Text>Quên mật khẩu?</Signin.Text>
            </Signin.Form>
            <Signin.BtnFrame>
                <Signin.Btn type='submit'>Đăng nhập</Signin.Btn>
            </Signin.BtnFrame>
        </Signin>
    )
}