import * as React from "react";

import "./Footer.scss";

export interface FooterProps { 
   
}

export class Footer extends React.Component<FooterProps, undefined> {
    render() {
        return ( 
            <div className="footer">
                 <p>
                        &#169;2017  Alaska Air Group, Inc. All Rights Reserved
                 </p>
            </div>
        );
    }
}