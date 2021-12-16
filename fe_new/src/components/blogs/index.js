import "./styles/blog.css"

export default function Blogs({ blogs, getBlog }) {
    var items = ""
    try {
        items = JSON.parse(blogs)
    } catch (error) { }

    return (
        <div className="Blog__Container">
            <div className="Blog__PageName">blog</div>
            <p className="Blog__TextUppercase">blog mới nhất</p>
            <div className="Blog__Frame">
                {(items !== "") ? (
                    <>
                        {
                            items.map((item, index) => (
                                <>
                                    <div className="Blog__Item" onClick={() => {
                                        getBlog(item)
                                    }} key={index}>
                                        <img className="Blog__Cover" alt="Blog Cover" src={item.author.avatar} />
                                        <div className="Blog__Info">
                                            <p className="Blog__Author">{item.author.fullName}</p>
                                            <p className="Blog__Title">{item.title}</p>
                                        </div>
                                        <div className="Blog__Delete">delete</div>
                                    </div>
                                </>
                            ))
                        }
                    </>
                ) : (<></>)}
            </div>
        </div >
    )
}