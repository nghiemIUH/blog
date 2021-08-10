import React from "react";
import Navbar from "../navbar/Navbar";
import "./Blog.css";
import { Link } from "react-router-dom";

class Blog extends React.Component {
    blogs = [
        {
            img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
        {
            img: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci quas modi fugit autem recusandae quidem.",
            date: "12/12/2012",
        },
    ];

    render() {
        return (
            <>
                <Navbar select={0} />
                <div className="list__blog">
                    {this.blogs.map((item, index) => {
                        return (
                            <div className="blog">
                                <img src={item.img} width="250" alt="" />
                                <div className="blog__title">{item.title}</div>
                                <span className="blog__date">
                                    <i class="far fa-calendar-alt"></i>{" "}
                                    {item.date}
                                </span>
                                <Link to={`/blog/${item.title}`}>
                                    <button className="view__more">
                                        Xem thêm
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
export default Blog;
