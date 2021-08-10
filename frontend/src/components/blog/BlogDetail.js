import React from "react";
import Navbar from "../navbar/Navbar";
import { withRouter } from "react-router-dom";
import "./BlogDetail.css";

class BlogDetail extends React.Component {
    title = this.props.match.params.title;

    render() {
        return (
            <>
                <Navbar select={0} />
                <div className="blog_detail">
                    <div className="blog_detail__title">{this.title}</div>
                    <div className="blog_content">
                        <div className="blog_content__left">
                            this is blog left
                        </div>

                        <div className="blog_content__right">
                            this is profile
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(BlogDetail);
