import * as React from "react";
import {UIStore} from "../stores/UIStore";
import {observer} from "mobx-react";

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
                {UIStore.modal === "info" && <Modal>Flight Info is under construction! <br />Please come back later. </Modal> }
                {UIStore.modal === "game" && <Modal>Trivia Game is under construction! <br />Please come back later.</Modal> }
            </div>
        );
    }
}