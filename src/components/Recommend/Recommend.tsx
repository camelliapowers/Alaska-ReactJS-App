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
                <button type="clear">Yes</button>
                    <button type="submit">No</button>
            </div>
        );
    }
}