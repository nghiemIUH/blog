import { BlogTitle } from '../components';
import Blogs from "../components/blogs";
import { useState } from "react";

export function BlogsContainer() {

    const [blogs, setBlogs] = useState("");
    const [blog, setBlog] = useState("");

    async function loadBlog() {
        try {
            let list = await fetch("http://localhost:5000/blog", { method: 'GET' })
                .then(response => response.json())
                .catch();
            return list;
        } catch (error) {
            return []
        }

    }

    loadBlog().then(i => {
        setBlogs(JSON.stringify(i));
    });

    const getBlog = (blog) => {
        setBlog(blog);
    }

    const goBack = () => {
        setBlog("")
    }

    return (
        (blog === "") ? (<Blogs blogs={blogs} getBlog={getBlog} />) : (< BlogTitle blog={blog} goBack={goBack} />)
    )
}