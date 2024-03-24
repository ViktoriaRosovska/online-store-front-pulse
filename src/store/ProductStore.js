import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this.product = [];
    this.filterMan = [];
    this.filterItem = [];
    this.cross = [];
    this.cat = false;
    makeAutoObservable(this);
  }

  filterItem(item) {
    this.filterItem = item;
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

  filterMans(item) {
    this.filterMan.push(item);
  }

  get filters() {
    return this.filterItem;
  }

  get products() {
    return this.product;
  }
}
