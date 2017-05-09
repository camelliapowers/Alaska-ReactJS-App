import * as React from "react";

import "./Landing.scss";

export interface RoundProps { 
    name:string;
    onClick?: () => any;
}

export class RoundButton extends React.Component<RoundProps, undefined> {
    render() {
        var b = "button-round";
        return ( 
            <li className={`button-round button-${this.props.name}`} onClick={this.props.onClick}><a>{this.props.children}</a></li>
        );
    }
}