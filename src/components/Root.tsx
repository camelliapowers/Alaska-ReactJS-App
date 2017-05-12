import * as React from "react";
import {UIStore} from "../stores/UIStore";
import {observer} from "mobx-react";
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import {Content} from "./Content/Content"
import {Footer} from "./Footer/Footer"
import {Header} from "./Header/Header"
import {Modal} from "./Modal/Modal";
import "../style.scss"

@observer
export class Root extends React.Component<{}, void> {
    render() {
        return ( 
            <div className="container">
                <Content />
                <Footer />  
                <CSSTransitionGroup 
                transitionName="modal"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
                component="div" style={{position:"fixed"}}>
                {UIStore.modal === "info" && <Modal key="info-modal">Flight Info is under construction! <br />Please come back later. </Modal> }
                {UIStore.modal === "game" && <Modal key="game-modal">Trivia Game is under construction! <br />Please come back later.</Modal> }
                </CSSTransitionGroup>
            </div>
        );
    }
}