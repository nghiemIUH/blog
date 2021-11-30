import "./styles/blog.css"

export default function Blogs({ blogs, getBlog }) {
    var items = ""
    try {
        items = JSON.parse(blogs)
    } catch (error) { }

    return (
        <div className="blogContainer">
            <div className="blogPageName">blog</div>
            <p className="textUppercase">blog mới nhất</p>
            <div className="blogFrame">
                {(items !== "") ? (
                    <>
                        {
                            items.map((item, index) => (
                                <div className="blogItem" key={index}>
                                    <img className="blogCover" alt="Blog Cover" src={item.author.avatar} />
                                    <div className="blogInfo">
                                        <p className="blogAuthor">{item.author.fullName}</p>
                                        <p className="blogTitle" onClick={() => {
                                            getBlog(item)
                                        }}>{item.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                ) : (<></>)}
            </div>
        </div >
    )
}