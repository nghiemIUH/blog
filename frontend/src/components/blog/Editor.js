import React from "react";
import "./Editor.css";
import Navbar from "../navbar/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";
Quill.register("modules/imageResize", ImageResize);

const axios = require("axios");

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
        };
        this.modules = {
            imageResize: {
                parchment: Quill.import("parchment"),
                modules: ["Resize", "DisplaySize"],
            },
            toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["clean"],
            ],
        };

        this.formats = [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
        ];
        this.state = {
            comments: "",
        };
    }
    contentChange = (content) => {
        this.setState({
            content: content,
        });
    };

    titleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    handleSubmit = (e) => {
        const data = {
            title: this.state.title,
            content: this.state.content,
        };
        const header = {
            "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxOGU1MzQwZjRlYzM1M2RlNzdkMGFlZiIsInVzZXJuYW1lIjoibmdoaWVtIiwiZW1haWwiOiJ2YW5uZ2hpZW04NDhAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlzVXNlciI6dHJ1ZSwiaXNTdGFmZiI6ZmFsc2V9LCJpYXQiOjE2MzY3MjQ2ODYsImV4cCI6MTYzNjcyNjQ4Nn0.SPwSfZB3oxubYSq-LhZysjF-HiDSBZLZic3IYBImcvw",
        };
        axios({
            method: "post",
            url: "http://127.0.0.1:5000/blog/add-blog",
            data: data,
            headers: header,
        }).then((response) => {
            console.log(response);
        });
    };
    render() {
        return (
            <>
                <Navbar />
                <input
                    placeholder="Tiêu đề...."
                    style={{
                        margin: 20,
                        height: 40,
                        width: "97%",
                        fontSize: "1.5rem",
                        padding: 10,
                        border: "1px solid lightgray",
                    }}
                    onChange={this.titleChange}
                />
                <ReactQuill
                    style={{ padding: 20 }}
                    theme="snow"
                    modules={this.modules}
                    formats={this.formats}
                    onChange={this.contentChange}
                    placeholder="Nội dung..."
                />
                <button
                    onClick={this.handleSubmit}
                    style={{
                        margin: 20,
                        padding: 10,
                        backgroundColor: "#3acbf7",
                        color: "#fff",
                        borderRadius: 5,
                        border: "none",
                        fontWeight: "bold",
                    }}
                >
                    Đăng bài
                </button>
            </>
        );
    }
}

export default Editor;
