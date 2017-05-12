import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";
import {observable} from "mobx";

import "./Modal.scss";

export interface ModalProps { 
   
}

@observer
export class Modal extends React.Component<ModalProps, undefined> {
    render() {
        return ( 
            <div className="modal_bg">
                <div className="modal-container">
                    <div className="x-close-button" onClick={this.handleCloseModalClick}></div>
                    <div className="modal-content">
                        <div className="warning-icon"></div>
                        <p>{this.props.children}</p> 
                    </div>
                    <button className={`info-button ${this.isMouseOver ? "info-button-hover" : ""}`} 
                            onMouseOut={() => this.isMouseOver = false} 
                            onMouseOver={() => this.isMouseOver = true} 
                            onClick={this.handleCloseModalClick}
                            >
                            OK
                    </button>
            </div>
            </div>
        );
    }

    @observable isMouseOver = false

    handleCloseModalClick = () => {
            UIStore.modal = null;
    }
}