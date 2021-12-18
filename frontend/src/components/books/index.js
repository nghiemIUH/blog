import "./styles/books.css";
import { MdDeleteForever } from "react-icons/md";

export default function Books({ books }) {
    var items = ""
    try {
        items = JSON.parse(books)
    } catch (error) { }
    return (
        <div className="Book__Container">
            <div className="Book__PageName">books</div>
            <p className="Book__TextUppercase">sách mới nhất</p>
            <div className="Book__Frame">
                {(items !== "") ? (
                    <>
                        {items.map((item, index) => (
                            < div className="Book__Item" key={index}>
                                <div className="Book__Content" onClick={() => {
                                    window.open(item.link, "_blank");
                                }}>
                                    <img className="Book__Cover" alt="Book Cover" src={item.image} />
                                    <div className="Book__Info">
                                        <p className="Book__Author">{item.author}</p>
                                        <p className="Book__Title">{item.title}</p>
                                        <p className="Book__Date" >{item.yearOfPublication}</p>
                                    </div>
                                </div>
                                <div className="Book__Delete"><MdDeleteForever /></div>
                            </div>
                        ))}
                    </>
                ) : (<></>)}
            </div>
        </div >
    )
}