import { Container, Head, Frame } from './styles/home'

export default function Home({ children, ...restProps }) {
    return <Container{...restProps}>{children}</Container>
}

Home.Head = function HomeHead({ bg = true, children, ...restProps }) {
    return bg ? <Head {...restProps}>{children}</Head> : children;
};

Home.Frame = function HomeFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};