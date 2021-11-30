import "./styles/blogTitle.css"

export default function BlogTitle({ blog, goBack }) {
    return (
        <div className="blogTitleContainer">
            <div className="blogTitleHead">
                <button onClick={() => {
                    goBack();
                }}>go back</button>
                <div className="blogTitlePageName">{blog.title}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}