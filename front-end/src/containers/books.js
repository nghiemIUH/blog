import { Books } from "../components";
import { useState } from "react";
import { ip } from "../IP";

export function BooksContainer() {

    const [books, setBooks] = useState("");

    async function loadBooks() {
        try {
            let list = await fetch(ip + "/book", { method: 'GET' })
                .then(response => response.json())
                .catch();
            return list.slice(0, 20).reverse();
        } catch (error) {
            return [];
        }
    }

    loadBooks().then(i => {
        setBooks(JSON.stringify(i));
    })

    return (
        < Books books={books} />
    )
}