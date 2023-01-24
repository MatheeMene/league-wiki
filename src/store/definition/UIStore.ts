import { makeObservable, observable, action } from 'mobx';

class UIStore {
    hideButtonBelowModal = false;

    constructor() {
        makeObservable(this, {
            hideButtonBelowModal: observable,
            setHideButtonBelowModal: action,
        });
    }

    setHideButtonBelowModal = (payload: boolean) => (this.hideButtonBelowModal = payload);
}

export default UIStore;
