import { BlogTitle, Blogs } from '../components';
import { useState } from "react";
import { ip } from "../IP";

export function BlogsContainer() {

    const [blogs, setBlogs] = useState("");
    const [blog, setBlog] = useState("");

    async function loadBlog() {
        try {
            let list = await fetch(ip + "/blog", { method: 'GET' })
                .then(response => response.json())
                .catch();
            return list.slice(0, 20).reverse();
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