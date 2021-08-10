import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Product from "./components/product/Product";
import Navbar from "./components/navbar/Navbar";
import BlogDetail from "./components/blog/BlogDetail";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/product">
                    <Product />
                </Route>
                <Route exact path="/blog/:title">
                    <BlogDetail />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
