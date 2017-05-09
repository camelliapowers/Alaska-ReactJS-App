import * as React from "react";

import "./Footer.scss";

export interface FooterProps { 
   
}

export class Footer extends React.Component<FooterProps, undefined> {
    render() {
        return ( 
            <div className="footer">
                 <div >
                        &#169;2018  Alaska Air Group, Inc. All Rights Reserved
                 </div>
            </div>
        );
    }
}