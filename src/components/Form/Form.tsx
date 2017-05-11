import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";

import{Rating} from "../Rating/Rating";
import{Recommend} from "../Recommend/Recommend";
import "./Form.scss";

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
                        <p>Check-in</p>
                        <Rating />
                    </div>
                    <div className="rate-item">
                        <p>Staff</p>
                        <Rating />
                    </div>
                 </div>
                 <div className="form">
                    <div className="rate-item">
                        <p>Gate facilities </p>
                        <Rating />
                    </div>
                    <div className="rate-item">
                        <p>Recommend Alaska?</p>
                        <Recommend />
                    </div>
                 </div>
                 <div className="comment">
                     <p>Comments</p>
                     <textarea className="comment-textarea" placeholder="Add your comments."></textarea>
                     
                 </div>
                 <div className="submit-form">
                     <button type="clear">Clear</button>
                    <button type="submit">Submit</button>
                 </div>
            </div>
        );
    }
}