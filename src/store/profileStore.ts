import { makeAutoObservable } from "mobx";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  
  public isAdminMode = false;
  public itemIdToChange: null | string = null;

  toggleAdminMode = (value: boolean) => {
    if (!value) {
      this.itemIdToChange = null;
    }
    this.isAdminMode = value;
  }

  setItemIdToChange = (id: string | null) => {
    this.itemIdToChange = id;
  }
}

export default new ProfileStore();