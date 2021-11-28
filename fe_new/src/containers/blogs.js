import Blogs from "../components/blogs";
import { useState } from "react";

export function BlogsContainer() {

    const [blogs, setBlogs] = useState("");

    async function loadBlog() {
        let list = await fetch("http://localhost:5000/blog", { method: 'GET' })
            .then(response => response.json())
            .catch();
        return list;
    }
    loadBlog().then(i => {
        setBlogs(JSON.stringify(i));
    });
    return (
        <Blogs blogs={blogs} />
    )
}