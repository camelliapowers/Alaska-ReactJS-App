import * as React from "react";

export interface ContentProps { 
   
}

export class Content extends React.Component<ContentProps, undefined> {
    render() {
        return ( 
            <div>
                 <div className="header"><h1>Alaska Survey App is coming soon!</h1></div>
            </div>
        );
    }
}