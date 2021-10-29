import { Body, PageName, Container, Frame, SideBar, Items, Infor, A, UseAva, UseName, Title, Date, TextUpppercase } from "./styles/blogs"

export default function Blogs({ children, ...resProps }) {
    return <Body {...resProps}>{children}</Body>
}

Blogs.PageName = function BlogsPageName({ children, ...resProps }) {
    return <PageName {...resProps}>{children}</PageName>
}

Blogs.Container = function BlogsContainer({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Blogs.Frame = function BlogsFrame({ children, ...resProps }) {
    return <Frame {...resProps}>{children}</Frame>
}

Blogs.Items = function BlogItems({ children, ...resProps }) {
    return <Items {...resProps}>{children}</Items>
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

Blogs.Date = function BlogsDate({ children, ...resProps }) {
    return <Date {...resProps}>{children}</Date>
}

Blogs.SideBar = function BlogsSideBar({ children, ...resProps }) {
    return <SideBar {...resProps}>{children}</SideBar>
}

Blogs.TextUpppercase = function BlogsTextUpppercase({ children, ...resProps }) {
    return <TextUpppercase {...resProps}>{children}</TextUpppercase>
}