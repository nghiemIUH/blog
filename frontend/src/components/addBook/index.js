import './styles/addBook.css';
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import Cookies from 'js-cookie';

export default function AddBook() {

    const [details, setDetails] = useState({ name: "", author: "", yearOfPublication: "", description: "", link: "", cover: "" });

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(file, 300, 300, "JPEG", 100, 0, (uri) => { resolve(uri); }, "base64");
        });

    const toBase64 = async e => {
        try {
            const image = await resizeFile(e.target.files[0]);
            setDetails({ ...details, cover: image });
        } catch (error) { }
    };

    const submitHandle = async e => {
        e.preventDefault();
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-access-token": Cookies.get("token")
            },
            body: JSON.stringify({
                "title": details.name,
                "author": details.author,
                "yearOfPublication": details.yearOfPublication,
                "description": details.description,
                "link": details.link,
                "image": details.cover
            })
        }
        try {
            await fetch("http://localhost:5000/book/add-book", request)
                .then(response => response.json())
                .then(i => {
                    console.log(i.message)
                    if (i.message === "success") {
                        alert("Thêm sách thành công");
                        window.location.reload(true);
                    } else {
                        alert("Lỗi thêm sách");
                    }
                }).catch();
        } catch (error) { }
    }


    return (
        <div className="AddBook__Container">
            <div className="AddBook__PageName">add book</div>
            <form className="AddBook__Frame" onSubmit={submitHandle}>
                <div className="AddBook__Content">
                    <label className="AddBook__Label_in" htmlFor="bookName">Tên sách: </label>
                    <input className="AddBook__Inp" type="text" name="bookName" id="bookName" required placeholder="Tên sách"
                        onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />

                    <label className="AddBook__Label_in" htmlFor="author">Tác giả: </label>
                    <input className="AddBook__Inp" type="text" name="author" id="author" required placeholder="Tác giả"
                        onChange={e => setDetails({ ...details, author: e.target.value })} value={details.author} />

                    <label className="AddBook__Label_in" htmlFor="yearOfPublication">Năm xuất bản: </label>
                    <input className="AddBook__Inp" type="text" name="yearOfPublication" id="yearOfPublication" required placeholder="Năm xuất bản"
                        onChange={e => setDetails({ ...details, yearOfPublication: e.target.value })} value={details.yearOfPublication} />

                    <label className="AddBook__Label_in" htmlFor="description">Thể loại: </label>
                    <input className="AddBook__Inp" type="text" name="description" id="description" required placeholder="Thể loại"
                        onChange={e => setDetails({ ...details, description: e.target.value })} value={details.description} />

                    <label className="AddBook__Label_in" htmlFor="link">Link tải: </label>
                    <input className="AddBook__Inp" type="text" name="link" id="link" required placeholder="Link tải"
                        onChange={e => setDetails({ ...details, link: e.target.value })} value={details.link} />

                    <label className="AddBook__Label_in" htmlFor="bookCover">Ảnh bìa sách: </label>
                    <input className="AddBook__Inp" type="file" name="bookCover" id="bookCover" onChange={toBase64} />
                </div>
                <p className="addBook_Err"></p>
                {(details.name === "" || details.author === "" || details.yearOfPublication === "" || details.description === "" || details.link === "" || details.cover === "") ? (<></>) : (<>
                    <div className="AddBook__Btn-frame">
                        <input className="AddBook__Btn" type="submit" value="Thêm sách" />
                    </div>
                </>)}

            </ form>
        </div>
    )
}