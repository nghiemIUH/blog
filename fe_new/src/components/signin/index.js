import { Container, Title, Form, TextArea, Input } from "./styles/signin";

export default function Signin({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Signin.Title = function SigninTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Signin.Form = function SigninForm({ children, ...resProps }) {
    return <Form {...resProps}>{children}</Form>
}

Signin.TextArea = function SigninTextArea({ children, ...resProps }) {
    return <TextArea {...resProps}>{children}</TextArea>
}

Signin.Input = function SigninInput({ ...resProps }) {
    return <Input {...resProps} />
}