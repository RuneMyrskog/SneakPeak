import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: {[key: string]: ShoppingCartItem}) {
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            let x = new ShoppingCartItem();
            Object.assign(x, item);
            x.key = productId;
            this.items.push(x);
        }
    }

    get totalPrice(){
        let sum = 0;
        for (let item of this.items) {
            sum += item.totalPrice
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }

}