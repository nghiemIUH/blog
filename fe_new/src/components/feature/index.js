import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
};

Feature.Title = function FeatureTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
};

Feature.SubTitle = function FeatureSubTitle({ children, ...resProps }) {
    return <SubTitle {...resProps}>{children}</SubTitle>
};