import { AddBookContainer } from "../containers/addBook";
import { NavContainer } from "../containers/nav"
import { FooterContainer } from "../containers/footer"

export default function AddBook() {
    return (
        <>
            <NavContainer />
            <AddBookContainer />
            <FooterContainer />
        </>
    )
}