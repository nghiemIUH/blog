import React from "react";
import "./Navbar.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    menu = [
        {
            title: "Blog",
            url: "/blog",
        },
        {
            title: "Product",
            url: "/product",
        },
    ];

    state = {
        clicked: false,
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="navbar__items">
                <h1 className="navbar__logo">
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#fff" }}
                    >
                        My Blog <i className="fab fa-react"></i>
                    </Link>
                </h1>
                <div className="menu__icon" onClick={this.handleClick}>
                    <i
                        className={
                            this.state.clicked ? "fa fa-times" : "fa fa-bars"
                        }
                    ></i>
                </div>
                <ul
                    className={
                        this.state.clicked ? "nav__menu active" : "nav__menu"
                    }
                >
                    {this.menu.map((item, index) => {
                        return (
                            <li>
                                <Link
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    to={item.url}
                                    className={
                                        this.props.select === index
                                            ? "nav__links select"
                                            : "nav_links"
                                    }
                                >
                                    <span
                                        style={{ color: "#fff" }}
                                        className="title"
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link className="nav__links__mobile">Sign up</Link>
                    </li>
                </ul>
                <Button>Sign up</Button>
            </nav>
        );
    }
}

export default Navbar;
