import { Background, Container } from './styles/home'

export default function Home({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Home.Frame = function HomeFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};