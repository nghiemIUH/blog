import { Nav } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.png'

export function NavContainer() {
    return (
        <Nav>
            <Nav.Logo to={ROUTES.HOME} alt='AI Lab' src={logo} />
            <Nav.Menu>
                <Nav.ButtonLink to={ROUTES.HOME}>Home</Nav.ButtonLink>
                <Nav.ButtonLink to={ROUTES.BLOGS}>Blogs</Nav.ButtonLink>
                <Nav.ButtonLink to={ROUTES.BOOKS}>Books</Nav.ButtonLink>
                <Nav.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Nav.ButtonLink>
            </Nav.Menu>
        </Nav>
    )
}