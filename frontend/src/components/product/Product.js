import React from "react";
import Navbar from "../navbar/Navbar";

class Product extends React.Component {
    render() {
        return (
            <>
                <Navbar select={1} />
                <h1>This is list product</h1>
            </>
        );
    }
}

export default Product;
