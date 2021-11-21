import { Link as ReacRouterLink } from 'react-router-dom'
import { Container, ButtonLink, Menu, Logo, Text } from './styles/nav';

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

Nav.Text = function NavText({ children, ...restProps }) {
    return <Text{...restProps}>{children}</Text>
}