import Books from "../components/books";

export function BooksContainer() {
    async function loadBooks() {
        // try {
        //     localStorage.removeItem("books");
        // } catch { }
        await fetch("http://localhost:5000/book", { method: 'GET' })
            .then(response => response.json())
            .then(i => {
                localStorage.setItem("books", JSON.stringify(i));
            });
    }
    loadBooks();
    return (
        < Books books={JSON.parse(localStorage.getItem("books"))} />
    )
}