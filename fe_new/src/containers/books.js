import { Books } from "../components";
import img from '../logo.png'

export function BooksContainer() {
    return (
        <Books>
            <Books.Frame href='#'>
                <Books.Image src={img} alt='img' />
                <Books.Title>This is name of Books</Books.Title>
            </Books.Frame>
            <Books.Frame href='#'>
                <Books.Image src={img} alt='img' />
                <Books.Title>This is name of Books</Books.Title>
            </Books.Frame>
        </Books>
    )
}