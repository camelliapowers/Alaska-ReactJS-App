import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";
import {observable} from "mobx";

import{Rating} from "../Rating/Rating";
import{Recommend} from "../Recommend/Recommend";
import "./Form.scss";
import "../Modal/Modal.scss";

export interface FormProps { 
   
}

@observer
export class Form extends React.Component<FormProps, undefined> {
    render() {
        return ( 
            <div className="form-container">
                <div className="section-title"><span>Give<br />Feedback</span></div>
                <h1>How are we doing?</h1>
                <div><p>Alaska FF Number <span>366</span></p></div>
                <div className="form">
                    <div className="rate-item">
                        <title>Check-in</title>
                        <Rating />
                    </div>
                    <div className="rate-item">
                        <title>Staff</title>
                        <Rating />
                    </div>
                 </div>
                 <div className="form">
                    <div className="rate-item">
                        <title>Gate facilities </title>
                        <Rating />
                    </div>
                    <div className="rate-item">
                        <title>Recommend Alaska?</title>
                        <Recommend />
                    </div>
                 </div>
                 <div className="comment">
                     <title>Comments</title>
                     <textarea className="comment-textarea" placeholder="Add your comments."></textarea>
                 </div>
                 <div className="submit-form">
                     <title></title>
                     <button className="general-button" type="clear">Clear</button>
                     <button className={`info-button ${this.isMouseOver ? "info-button-hover" : ""}`} 
                            onMouseOut={() => this.isMouseOver = false} 
                            onMouseOver={() => this.isMouseOver = true} 
                            onClick={this.handleSubmitClick}>Submit</button>
                 </div>
            </div>
        );
    }

@observable isMouseOver = false

handleSubmitClick = () => {
        UIStore.page = "contact";
    } 

}