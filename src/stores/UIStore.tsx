
import {observable} from "mobx";


class UIStoreSingleton {

    @observable onSubPage = false;

}

export const UIStore = new UIStoreSingleton();