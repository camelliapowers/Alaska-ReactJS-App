import * as React from "react";

import {Content} from "./Content/Content"
import {Footer} from "./Footer/Footer"
import {Header} from "./Header/Header"
import "../style.scss"

export class Root extends React.Component<{}, void> {
    render() {
        return ( 
            <div className="container">
                <Content />
                <Footer />   
            </div>
        );
    }
}