import {makeAutoObservable} from "mobx";

export default class ProductStore {
  constructor() {
    this.product = [];
    this.filterMan = []
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

 filterMans( item) {
    this.filterMan.push( item );
 }


  get products() {
    return this.product;
  }

}


