import "./styles/blog.css"

export default function Blogs({ blogs }) {
    var items = ""
    try {
        items = JSON.parse(blogs)
    } catch (error) { }

    return (
        <div className="blogContainer">
            <div className="pageName">blog</div>
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
                                        <a className="blogTitle" rel="noreferrer" target="_blank" href={item.link}>{item.title}</a>
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