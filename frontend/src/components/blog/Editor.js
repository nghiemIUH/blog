import React from "react";
import "./Editor.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import plugins from "suneditor/src/plugins";
import Navbar from "../navbar/Navbar";

class Editor extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="editor">
                    <SunEditor
                        width="80%"
                        setAllPlugins={false}
                        setAllPlugins={true}
                        setOptions={{
                            plugins: plugins,
                            height: 200,
                            buttonList: [
                                [
                                    "undo",
                                    "redo",
                                    "font",
                                    "fontSize",
                                    "formatBlock",
                                    "paragraphStyle",
                                    "blockquote",
                                    "bold",
                                    "underline",
                                    "italic",
                                    "strike",
                                    "subscript",
                                    "superscript",
                                    "fontColor",
                                    "hiliteColor",
                                    "textStyle",
                                    "removeFormat",
                                    "outdent",
                                    "indent",
                                    "align",
                                    "horizontalRule",
                                    "list",
                                    "lineHeight",
                                    "table",
                                    "link",
                                    "image",
                                    "video",
                                    "audio" /** 'math', */, // You must add the 'katex' library at options to use the 'math' plugin.
                                    /** 'imageGallery', */ // You must add the "imageGalleryUrl".
                                    "fullScreen",
                                    "showBlocks",
                                    "codeView",
                                    "preview",
                                    "print",
                                    "save",
                                    "template",
                                ],
                            ],
                        }}
                    />
                </div>
            </>
        );
    }
}
export default Editor;
