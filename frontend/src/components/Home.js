import React from "react";
import Navbar from "./navbar/Navbar";
import bg from "../img/bg.jpeg";
import "./Home.css";
class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar select={3} className="nav" />
                <div className="home">
                    <div className="header__title">
                        <span className="header1">This is home </span>
                        <span className="header2">This is my Blog</span>
                    </div>
                    <div className="background">
                        {/* <img src={bg} alt="" />
                         */}
                        <div className="bg"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
