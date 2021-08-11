import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    render() {
        return (
            <div className="profile mb-tbl-hidden">
                <h2 className="profile__title">About me</h2>
                <div className="profile_img"></div>
                <h3 id="blogger__name">Thầy giáo Ba</h3>
                <span id="blogger__about">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                </span>
                <a className="blogger__more" href="#">
                    Xem thêm
                </a>
            </div>
        );
    }
}

export default Profile;
