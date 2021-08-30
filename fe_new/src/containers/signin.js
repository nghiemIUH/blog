import { Signin } from "../components";

export function SigninContainer() {
    return (
        <Signin>
            <Signin.Title>Signin</Signin.Title>
            <Signin.Form>
                <Signin.TextArea>User Name:</Signin.TextArea>
                <Signin.Input placeholder='User Name' />
                <Signin.TextArea>Password:</Signin.TextArea>
                <Signin.Input placeholder='Password' />
            </Signin.Form>
        </Signin>
    )
}