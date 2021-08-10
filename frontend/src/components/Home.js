import React from "react";
import Navbar from "./navbar/Navbar";
import "./Home.css";
class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar select={3} className="nav" />
                <div className="home">
                    <div className="header__title">
                        <span className="header2">My Blog</span>
                    </div>
                    <div className="background">
                        <div className="bg"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
