import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";
import {observable} from "mobx";

import "./Contact.scss";
import "../Modal/Modal.scss";

export interface ContactProps { 
    
   
}

@observer
export class Contact extends React.Component<ContactProps, undefined> {
    render() {
        var b = "button-round";
        return ( 
            <div className="form-container">
                <div className="section-title"><span>Give<br />Feedback</span></div>
                <h1>Thank you for your feedback!</h1>
                <div><p>We’re happy that you had a good flight! <br /> 
                        We may want to contact you about your feedback, <br /> 
                        so please provide your information below:<br />
                        <br />
                        </p>
                </div>
                 <div className="contact">
                     <title>Name</title>
                     <input type="text" className="comment-text" placeholder="Name"></input>
                 </div>
                 <div className="contact">
                     <title>Email</title>
                     <input type="text" className="comment-text" placeholder="Email Address"></input>
                 </div>
                 <div className="contact">
                     <title>Phone</title>
                     <input type="text" className="comment-text" placeholder="Mobile/Home Phone"></input>
                 </div>
                 <div className="submit-contact-form">
                     <title></title>
                     <button className="general-button" onClick={this.handleBacktoHomeClick}>No, Thanks!</button>
                     <button className={`info-button ${this.isMouseOver ? "info-button-hover" : ""}`} 
                            onMouseOut={() => this.isMouseOver = false} 
                            onMouseOver={() => this.isMouseOver = true} type ="submit">Send</button>
                 </div>
            </div>
        );
    }
    @observable isMouseOver = false;

    handleBacktoHomeClick = () => {
        UIStore.page = "landing";
    }
}