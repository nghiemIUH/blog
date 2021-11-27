import "./styles/books.css"

export default function Books({ books }) {
    return (
        <div className="bookContainer">
            <div className="pageName">books</div>
            <p className="textUppercase">sách mới nhất</p>
            <div className="bookFrame">
                {books.map((item, index) => (
                    <div className="bookItem" key={index}>
                        <img className="bookCover" alt="Book Cover" src={item.image} />
                        <div className="bookInfo">
                            <p className="bookAuthor">{item.author}</p>
                            <a className="bookTitle" href="http://localhost:3000/Books">{item.title}</a>
                            <p className="bookDate" >{item.yearOfPublication}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}