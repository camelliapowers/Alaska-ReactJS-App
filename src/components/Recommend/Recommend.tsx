import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";

import "./Recommend.scss";

export interface RecommendProps { 
   
}

@observer
export class Recommend extends React.Component<RecommendProps, undefined> {
    

    render() {
        return ( 
            <div className="recommend-select">
                <div className="yes">
                    <div className="thumbs-up"><p>Yes</p></div>
                </div>
                <div className="no">
                    <div className="thumbs-down"><p>No</p></div>
                </div>
            </div>
        );
    }
}