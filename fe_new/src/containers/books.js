import Books from "../components/books";
import img from "../logo.png";
import { useState } from "react";

export function BooksContainer() {

    function LoadBook() {
        console.log("loadbook")
    }

    return (
        < Books >
            {LoadBook()}
            <Books.PageName>books</Books.PageName>
            <Books.Container>
                <Books.Frame>
                    <Books.TextUpppercase>sách mới nhất</Books.TextUpppercase>
                    <Books.Items>
                        <Books.A href='#'>
                            <Books.UseAva src={img} />
                        </Books.A>
                        <Books.Infor>
                            <Books.UseName href='#'>This Is Name Account</Books.UseName>
                            <Books.Title href='#'>this is name book</Books.Title>
                            <Books.Date>this is date</Books.Date>
                        </Books.Infor>
                    </Books.Items>
                    <Books.Items>
                        <Books.A href='#'>
                            <Books.UseAva src={img} />
                        </Books.A>
                        <Books.Infor>
                            <Books.UseName href='#'>This Is Name Account</Books.UseName>
                            <Books.Title href='#'>this is name book</Books.Title>
                            <Books.Date>this is date</Books.Date>
                        </Books.Infor>
                    </Books.Items>
                </Books.Frame>
                <Books.SideBar>
                    <Books.TextUpppercase>câu hỏi mới nhất</Books.TextUpppercase>
                    <Books.Items>
                        <Books.Infor>
                            <Books.UseName href='#'>This Is Name Account</Books.UseName>
                            <Books.Title>this is ask</Books.Title>
                            <Books.Date>this is date</Books.Date>
                        </Books.Infor>
                    </Books.Items>
                    <Books.Items>
                        <Books.Infor>
                            <Books.UseName href='#'>This Is Name Account</Books.UseName>
                            <Books.Title>this is ask</Books.Title>
                            <Books.Date>this is date</Books.Date>
                        </Books.Infor>
                    </Books.Items>
                </Books.SideBar>
            </Books.Container>
        </Books >
    )
}