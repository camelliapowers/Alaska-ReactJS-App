import * as React from "react";

import {Content} from "./Content"
import "../style.scss"

export class Root extends React.Component<{}, void> {
    render() {
        return ( 
            <div>
                <Content />
            </div>
        );
    }
}