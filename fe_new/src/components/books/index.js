import "./styles/books.css"

export default function Books({ books }) {
    var items = ""
    try {
        items = JSON.parse(books)
    } catch (error) { }
    return (
        <div className="bookContainer">
            <div className="pageName">books</div>
            <p className="textUppercase">sách mới nhất</p>
            <div className="bookFrame">
                {(items !== "") ? (
                    <>
                        {items.map((item, index) => (
                            <div className="bookItem" key={index}>
                                <img className="bookCover" alt="Book Cover" src={item.image} />
                                <div className="bookInfo">
                                    <p className="bookAuthor">{item.author}</p>
                                    <a className="bookTitle" rel="noreferrer" target="_blank" href={item.link}>{item.title}</a>
                                    <p className="bookDate" >{item.yearOfPublication}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (<></>)}
            </div>
        </div >
    )
}