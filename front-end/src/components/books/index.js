import "./styles/books.css";
import { MdDeleteForever } from "react-icons/md";
import Cookies from "js-cookie";

export default function Books({ books }) {
    var items = "";
    var isAdmin = false;
    try {
        items = JSON.parse(books)
    } catch (error) { }
    try {
        isAdmin = JSON.parse(Cookies.get("user")).isAdmin;
    } catch { }

    async function Delete(item) {
        if (window.confirm("Xóa sách " + item.title + "?")) {
            const request = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "x-access-token": Cookies.get("token")
                },
                body: JSON.stringify({
                    "id": item.id
                })
            }
            try {
                await fetch("http://localhost:5000/book/delete", request)
                    .then(response => response.json())
                    .then(i => {
                        if (i.message === "ok") {
                            alert("Xóa sách thành công");
                            window.location.reload(true);
                        }
                    }).catch();
            } catch (error) { }
        }
    }

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
                                {(isAdmin === true) ? (
                                    <>
                                        {(item.deleted === true) ? (<></>) : (
                                            <div className="Book__Delete" onClick={() => { Delete(item) }}><MdDeleteForever />
                                                <p className="Book__Delete_Text">Delete</p>
                                            </div>
                                        )}
                                    </>
                                ) : (<></>)}
                            </div>
                        ))}
                    </>
                ) : (<></>)}
            </div>
        </div >
    )
}