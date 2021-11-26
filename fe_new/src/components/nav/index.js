import { Link as ReacRouterLink } from 'react-router-dom'
import { Container, ButtonLink, Menu, Logo, Ava, Text, Button } from './styles/nav';

export default function Nav({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};

Nav.Menu = function NavMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>
};

Nav.ButtonLink = function NavButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Nav.Logo = function NavLogo({ to, ...restProps }) {
    return (
        <ReacRouterLink to={to}>
            <Logo {...restProps} />
        </ReacRouterLink>
    )
};

Nav.Ava = function NavAva({ to, ...restProps }) {
    return (
        <ReacRouterLink to={to}>
            <Ava {...restProps} />
        </ReacRouterLink>
    )
};

Nav.Button = function NavButton({ children, ...restProps }) {
    return <Button{...restProps}>{children}</Button>;
};

Nav.Text = function NavText({ children, ...restProps }) {
    return <Text{...restProps}>{children}</Text>
}