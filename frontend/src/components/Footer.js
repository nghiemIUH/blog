import React from "react";
import './Footer.css'
class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <h1 class="footer__title">Let me know what's on your mind</h1>
                    <form method="post">
                        <div class="input__wrapper _w25">
                            <input id="firstName" type="text" />
                            <label>
                                First Name
                                <label className="label_alert" for="firstName" >*</label>
                            </label>
                        </div>
                        <div class="input__wrapper _w25">
                            <input id="lastName" type="text" />
                            <label>
                                Last Name
                                <label className="label_alert" for="firstName" >*</label>
                            </label>
                        </div>
                        <div class="input__wrapper _w60">
                            <input id="email" type="email" />
                            <label>
                                Email
                                <label className="label_alert" for="firstName" >*</label>
                            </label>
                        </div>
                        <div class="input__wrapper _w60 has-textarea">
                            <textarea id="message"></textarea>
                            <label>
                                Message...
                                <label className="label_alert" for="firstName" >*</label>
                            </label>
                        </div>
                        <div class="input__wrapper _w60 has-submit">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
export default Footer;
