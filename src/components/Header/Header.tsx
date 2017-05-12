import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";

import "./Header.scss";

export interface HeaderProps { 
   
}

@observer
export class Header extends React.Component<HeaderProps, undefined> {
    render() {
        /*if (UIStore.onSubPage) {
            return (
                <div className={`header ${UIStore.onSubPage ? "high-logo" : "low-logo"}`}>
                    {<HomeButton />}
                </div>
            );
        } else {
            return (
                <div className={`header ${UIStore.onSubPage ? "high-logo" : "low-logo"}`}>
                </div>
            );
        }*/
        return ( 
            <div className={`header ${UIStore.onSubPage ? "high-logo" : "low-logo"}`}>
               {UIStore.onSubPage && <div className="back-to-home" onClick={this.handleBacktoHomeClick}></div>}
            </div>
        );
    }

    handleBacktoHomeClick = () => {
        UIStore.page = "landing";
    }
}