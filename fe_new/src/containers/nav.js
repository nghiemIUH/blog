import { Nav } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.png'
import Cookies from "js-cookie";

export function NavContainer() {
    var name = ""
    try {
        name = JSON.parse(Cookies.get("user")).fullName;
    } catch (error) { }

    return (
        <Nav>
            <Nav.Logo to={ROUTES.HOME} alt='AI Lab' src={logo} />
            {(name !== "") ? (<Nav.Text>{name}'s Blog</Nav.Text>) : (<></>)}
            <Nav.Menu>
                <Nav.ButtonLink to={ROUTES.HOME}>Home</Nav.ButtonLink>
                <Nav.ButtonLink to={ROUTES.BLOGS}>Blogs</Nav.ButtonLink>
                <Nav.ButtonLink to={ROUTES.BOOKS}>Books</Nav.ButtonLink>
                {(name === "") ? (<>
                    <Nav.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Nav.ButtonLink>
                    <Nav.ButtonLink to={ROUTES.SIGN_UP}>Sign Up</Nav.ButtonLink>
                </>
                ) : (<>
                    <Nav.Button onClick={() => {
                        localStorage.removeItem("avatar");
                        Cookies.remove("token");
                        Cookies.remove("user")
                        window.location.href = ROUTES.SIGN_IN;
                    }}>Logout</Nav.Button>
                    <Nav.Ava to="" alt="user" src={localStorage.getItem("avatar")} />
                </>)}
            </Nav.Menu>
        </Nav>
    )
}