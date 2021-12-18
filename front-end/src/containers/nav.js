import { Nav } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.png'
import Cookies from "js-cookie";

export function NavContainer() {
    var name = ""
    try {
        name = JSON.parse(Cookies.get("user")).fullName;
        // console.log(Cookies.get("token"))
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
                    <Nav.User>
                        <Nav.Ava alt="user" src={localStorage.getItem("avatar")} />
                        <Nav.Menu2>
                            <Nav.Menu2Item to={""}>User</Nav.Menu2Item>
                            <Nav.Menu2Item to={ROUTES.EDITOR}>Add Blog</Nav.Menu2Item>
                            {(JSON.parse(Cookies.get("user")).isAdmin === true) ? (
                                <>
                                    <Nav.Menu2Item to={ROUTES.ADDBOOK}>Add Book</Nav.Menu2Item>
                                </>
                            ) : (<></>)}
                            <Nav.Menu2Item onClick={() => {
                                localStorage.removeItem("avatar");
                                Cookies.remove("token");
                                Cookies.remove("user");
                            }} to={ROUTES.SIGN_IN}  >Logout</Nav.Menu2Item>
                        </Nav.Menu2>
                    </Nav.User>
                </>)}
            </Nav.Menu>
        </Nav>
    )
}