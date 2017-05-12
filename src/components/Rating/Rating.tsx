import * as React from "react";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";
import * as Slider from 'rc-slider';


import "rc-slider/assets/index.css";
import "./Rating.scss";

export interface RatingProps { 
   
}

// class Handle extends React.Component<Slider.HandleProps, undefined> {
//     render() {
//         return
//     }

// }

@observer
export class Rating extends React.Component<RatingProps, undefined> {
    

    render() {
        return ( 
            <div className="rating-contanainer">
                <div className="slider-contaner"> <Slider min={1} max={5} defaultValue={3}  /></div>
                 <ul className="rating-number">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                   </ul>  
            </div>
            
        );
    }
}