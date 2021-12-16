import "./styles/blog.css"
import { MdDeleteForever } from "react-icons/md";

export default function Blogs({ blogs, getBlog }) {
    var items = ""
    try {
        items = JSON.parse(blogs)
    } catch (error) { }

    function Delete(item) {
        if (window.confirm("ok")) {
        }
    };

    return (
        <div className="Blog__Container">
            <div className="Blog__PageName">blog</div>
            <p className="Blog__TextUppercase">blog mới nhất</p>
            <div className="Blog__Frame">
                {(items !== "") ? (<>
                    {
                        items.map((item, index) => (
                            <div className="Blog__Item" key={index}>
                                <div className="Blog__Content" onClick={() => {
                                    getBlog(item)
                                }}>
                                    <img className="Blog__Cover" alt="Blog Cover" src={item.author.avatar} />
                                    <div className="Blog__Info">
                                        <p className="Blog__Author">{item.author.fullName}</p>
                                        <p className="Blog__Title">{item.title}</p>
                                    </div>
                                </div>
                                <div className="Blog__Delete" onClick={() => { Delete(item) }}><MdDeleteForever /></div>
                            </div>
                        ))
                    }
                </>) : (<></>)}
            </div>
        </div >
    )
}