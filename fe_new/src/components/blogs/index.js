import { Container, Frame, Infor, A, UseAva, UseName, Title, Date } from "./styles/blogs"

export default function Blogs({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Blogs.Frame = function BlogsFrame({ children, ...resProps }) {
    return <Frame {...resProps}>{children}</Frame>
}

Blogs.Infor = function BlogsInfor({ children, ...resProps }) {
    return <Infor {...resProps}>{children}</Infor>
}

Blogs.A = function BlogsA({ children, ...resProps }) {
    return <A {...resProps}>{children}</A>
}

Blogs.UseAva = function BlogsUseAva({ ...resProps }) {
    return <UseAva {...resProps} />
}

Blogs.UseName = function BlogsUseName({ children, ...resProps }) {
    return <UseName {...resProps}>{children}</UseName>
}

Blogs.Title = function BlogsTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Blogs.Date = function BlogDate({ children, ...resProps }) {
    return <Date {...resProps}>{children}</Date>
}