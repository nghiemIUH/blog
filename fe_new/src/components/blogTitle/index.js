import "./styles/blogTitle.css";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function BlogTitle({ blog, goBack }) {
    return (
        <div className="blogTitle__Container">
            <div className="blogTitle__Head">
                <button className='blogTitle_Button' onClick={() => {
                    goBack();
                }}><BsArrowLeftCircle className="blogTitle__Icon" />Go back</button>
                <div className="blogTitle__PageName">{blog.title}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}