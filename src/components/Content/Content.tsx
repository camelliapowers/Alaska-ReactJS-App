import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";

import{Landing} from "../Landing/Landing"
import{Footer} from "../Footer/Footer";
import{Form} from "../Form/Form"
import "./Content.scss";

export interface ContentProps { 
   
}

@observer
export class Content extends React.Component<ContentProps, undefined> {
    render() {
        return ( 
            <div className="landing-container"> 
                    {UIStore.onSubPage ? <Form/> : <Landing/>} 
            </div>
        );
    }
}