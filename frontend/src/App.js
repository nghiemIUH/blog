import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Product from "./components/product/Product";
import BlogDetail from "./components/blog/BlogDetail";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/LogIn";
import Editor from "./components/blog/Editor";




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
                <Route exact path="/blog/detail/:title">
                    <BlogDetail />
                </Route>
                <Route exact path="/sign-up">
                    <SignUp />
                </Route>
                <Route exact path="/log-in">
                    <Login />
                </Route>
                <Route exact path="/editor">
                    <Editor />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
