import { Container, Title, Form, TextArea, Input, Text, BtnFrame, Btn } from "./styles/signin";

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

Signin.Text = function SigninText({ children, ...resProps }) {
    return <Text {...resProps}>{children}</Text>
}

Signin.Input = function SigninInput({ ...resProps }) {
    return <Input {...resProps} />
}

Signin.BtnFrame = function SigninBtnFrame({ children, ...resProps }) {
    return <BtnFrame {...resProps}>{children}</BtnFrame>
}

Signin.Btn = function SigninBtn({ children, ...resProps }) {
    return <Btn {...resProps}>{children}</Btn>
}