import Blogs from "../components/blogs";
import img from "../logo.png"

export function BlogsContainer() {
    return (
        <Blogs>
            <Blogs.Frame>
                <Blogs.A href='#'>
                    <Blogs.UseAva src={img} />
                </Blogs.A>
                <Blogs.Infor>
                    <Blogs.UseName href='#'>This Is Name Account</Blogs.UseName>
                    <Blogs.Title href='#'>this is name blog</Blogs.Title>
                    <Blogs.Date>this is date</Blogs.Date>
                </Blogs.Infor>
            </Blogs.Frame>
            <Blogs.Frame>
                <Blogs.A href='#'>
                    <Blogs.UseAva src={img} />
                </Blogs.A>
                <Blogs.Infor>
                    <Blogs.UseName href='#'>This Is Name Account</Blogs.UseName>
                    <Blogs.Title href='#'>this is name blog</Blogs.Title>
                    <Blogs.Date>this is date</Blogs.Date>
                </Blogs.Infor>
            </Blogs.Frame>
        </Blogs>
    )
}