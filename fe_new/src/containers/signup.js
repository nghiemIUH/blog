import { Signup } from "../components";

export function SignupContainer() {
    return (
        <Signup>
            <Signup.Title>Đăng kí tài khoản</Signup.Title>
            <Signup.Form>
                <Signup.TextArea>Họ & Tên:</Signup.TextArea>
                <Signup.Input placeholder='Họ & Tên' required />
                <Signup.TextArea>Địa chỉ email:</Signup.TextArea>
                <Signup.Input placeholder='Địa chỉ email' required />
                <Signup.TextArea>User Name:</Signup.TextArea>
                <Signup.Input placeholder='User Name' required />
                <Signup.TextArea>Password:</Signup.TextArea>
                <Signup.Input placeholder='Password' required />
                <Signup.TextArea>Confirm password:</Signup.TextArea>
                <Signup.Input placeholder='Confirm password' required />
            </Signup.Form>
            <Signup.BtnFrame>
                <Signup.Btn type='submit'>Đăng kí</Signup.Btn>
            </Signup.BtnFrame>
        </Signup>
    )
}