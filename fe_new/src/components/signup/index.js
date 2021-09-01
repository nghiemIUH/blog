import { Container, Title, Form, TextArea, Input, BtnFrame, Btn } from "./styles/signup";

export default function Signup({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Signup.Title = function SignupTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Signup.Form = function SignupForm({ children, ...resProps }) {
    return <Form {...resProps}>{children}</Form>
}

Signup.TextArea = function SignupTextArea({ children, ...resProps }) {
    return <TextArea {...resProps}>{children}</TextArea>
}

Signup.Input = function SignupInput({ ...resProps }) {
    return <Input {...resProps} />
}

Signup.BtnFrame = function SignupBtnFrame({ children, ...resProps }) {
    return <BtnFrame {...resProps}>{children}</BtnFrame>
}

Signup.Btn = function SignupBtn({ children, ...resProps }) {
    return <Btn {...resProps}>{children}</Btn>
}