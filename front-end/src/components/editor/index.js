import React from "react";
import { ip } from '../../IP';
import "./styles/editor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";
import Cookies from "js-cookie";
Quill.register("modules/imageResize", ImageResize);

const axios = require("axios");

export default class Editor extends React.Component {
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
            "x-access-token": Cookies.get("token"),
        };
        axios({
            method: "post",
            url: ip + "/blog/add-blog",
            data: data,
            headers: header,
        }).then((response) => {
            if (response.statusText === "OK") {
                alert("Đăng blog thành công");
                window.location.reload(true);
            } else {
                alert("Lỗi đăng blog");
            }
        });
    };

    render() {
        return (
            <div className="Editor__Container">
                <div className="Editor__PageName">add blog</div>
                <input className="Editor__Title" placeholder="Tiêu đề ..." required onChange={this.titleChange} />
                <ReactQuill
                    style={{ width: "100%" }}
                    theme="snow"
                    modules={this.modules}
                    formats={this.formats}
                    onChange={this.contentChange}
                    placeholder="Nội dung..."
                />
                <button className="Editor__BtnPost"
                    disabled={this.state.content === undefined || this.state.content === "<p><br></p>"
                        || this.state.title === undefined || this.state.title === "<p><br></p>"
                    } onClick={this.handleSubmit}>
                    Đăng bài
                </button>
            </div >
        );
    }
}
