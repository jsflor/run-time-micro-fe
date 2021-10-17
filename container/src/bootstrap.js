import { mount as mountProducts } from 'products/ProductIndex';
import { mount as mountCart } from 'cart/CartIndex';

mountProducts(document.querySelector("#remote-products"));
mountCart(document.querySelector("#remote-cart"));

console.log('container loaded!')