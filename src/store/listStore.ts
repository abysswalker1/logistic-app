import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  
  list = [];

  
}

export default new Store();