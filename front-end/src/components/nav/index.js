import { Link as ReacRouterLink } from 'react-router-dom'
import { Container, ButtonLink, Menu, Logo, User, Ava, Menu2, Text, Button } from './styles/nav';

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

Nav.User = function NavUser({ children, ...restProps }) {
    return <User {...restProps}>{children}</User>
};

Nav.Ava = function NavAva({ ...restProps }) {
    return <Ava {...restProps} />
};

Nav.Menu2 = function NavMenu2({ children, ...restProps }) {
    return <Menu2 {...restProps}>{children}</Menu2>
}

Nav.Menu2Item = function NavMenu2Item({ children, ...restProps }) {
    return <ReacRouterLink {...restProps}>{children}</ReacRouterLink>
}

Nav.Button = function NavButton({ children, ...restProps }) {
    return <Button{...restProps}>{children}</Button>;
};

Nav.Text = function NavText({ children, ...restProps }) {
    return <Text{...restProps}>{children}</Text>
}