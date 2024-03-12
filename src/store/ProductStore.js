import {makeAutoObservable} from "mobx";

export default class ProductStore {
  constructor() {
    this.product = [];
    this.cross = []
    this.cat = false
    makeAutoObservable(this);
  }



   setProducts(product) {
    this.product = product;
  }

  setCross(cross) {
    this.cross = cross;
  }

  test(bolean) {
    this.cat = bolean;
  }

  get products() {
    return this.product;
  }

}


