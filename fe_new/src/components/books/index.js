import { Container, Frame, Image, Title } from "./styles/books"

export default function Books({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Books.Frame = function BooksFrame({ children, ...resProps }) {
    return <Frame {...resProps}>{children}</Frame>
}

Books.Image = function BooksImage({ ...resProps }) {
    return <Image {...resProps} />
}

Books.Title = function BooksTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}