import { Body, PageName, Container, Frame, SideBar, Items, Infor, A, UseAva, UseName, Title, Date, TextUpppercase } from "./styles/books"

export default function Books({ children, ...resProps }) {
    return <Body {...resProps}>{children}</Body>
}

Books.PageName = function BooksPageName({ children, ...resProps }) {
    return <PageName {...resProps}>{children}</PageName>
}

Books.Container = function BooksContainer({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Books.Frame = function BooksFrame({ children, ...resProps }) {
    return <Frame {...resProps}>{children}</Frame>
}

Books.Items = function BlogItems({ children, ...resProps }) {
    return <Items {...resProps}>{children}</Items>
}

Books.Infor = function BooksInfor({ children, ...resProps }) {
    return <Infor {...resProps}>{children}</Infor>
}

Books.A = function BooksA({ children, ...resProps }) {
    return <A {...resProps}>{children}</A>
}

Books.UseAva = function BooksUseAva({ ...resProps }) {
    return <UseAva {...resProps} />
}

Books.UseName = function BooksUseName({ children, ...resProps }) {
    return <UseName {...resProps}>{children}</UseName>
}

Books.Title = function BooksTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Books.Date = function BooksDate({ children, ...resProps }) {
    return <Date {...resProps}>{children}</Date>
}

Books.SideBar = function BooksSideBar({ children, ...resProps }) {
    return <SideBar {...resProps}>{children}</SideBar>
}

Books.TextUpppercase = function BooksTextUpppercase({ children, ...resProps }) {
    return <TextUpppercase {...resProps}>{children}</TextUpppercase>
}