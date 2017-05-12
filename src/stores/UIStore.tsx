
import {observable, computed} from "mobx";

type Page = "landing" | "rating" | "contact";
type Modal = "info" | "game";

class UIStoreSingleton {
    @observable page: Page = "landing"
    @observable modal: Modal = null

    @computed get onSubPage(){
       return this.page === "rating" || this.page === "contact";
    }

   
}

export const UIStore = new UIStoreSingleton();