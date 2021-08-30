import Blogs from "../components/blogs";
import img from "../logo.png"

export function BlogsContainer() {
    return (
        <Blogs>
            <Blogs.Frame>
                <Blogs.TextUpppercase>blog mới nhất</Blogs.TextUpppercase>
                <Blogs.Items>
                    <Blogs.A href='#'>
                        <Blogs.UseAva src={img} />
                    </Blogs.A>
                    <Blogs.Infor>
                        <Blogs.UseName href='#'>This Is Name Account</Blogs.UseName>
                        <Blogs.Title href='#'>this is name blog</Blogs.Title>
                        <Blogs.Date>this is date</Blogs.Date>
                    </Blogs.Infor>
                </Blogs.Items>
                <Blogs.Items>
                    <Blogs.A href='#'>
                        <Blogs.UseAva src={img} />
                    </Blogs.A>
                    <Blogs.Infor>
                        <Blogs.UseName href='#'>This Is Name Account</Blogs.UseName>
                        <Blogs.Title href='#'>this is name blog</Blogs.Title>
                        <Blogs.Date>this is date</Blogs.Date>
                    </Blogs.Infor>
                </Blogs.Items>
            </Blogs.Frame>
            <Blogs.SideBar>
                <Blogs.TextUpppercase>câu hỏi mới nhất</Blogs.TextUpppercase>
                <Blogs.Items>
                    <Blogs.Infor>
                        <Blogs.UseName href='#'>This Is Name Account</Blogs.UseName>
                        <Blogs.Title>this is ask</Blogs.Title>
                        <Blogs.Date>this is date</Blogs.Date>
                    </Blogs.Infor>
                </Blogs.Items>
                <Blogs.Items>
                    <Blogs.Infor>
                        <Blogs.UseName href='#'>This Is Name Account</Blogs.UseName>
                        <Blogs.Title>this is ask</Blogs.Title>
                        <Blogs.Date>this is date</Blogs.Date>
                    </Blogs.Infor>
                </Blogs.Items>
            </Blogs.SideBar>
        </Blogs >
    )
}