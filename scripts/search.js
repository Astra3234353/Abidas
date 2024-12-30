import { products } from "./data/products.js";
import { getUrlParam } from "./data/URLparams.js";

const product = getUrlParam('productId');

function renderProductElement() {
  console.log('rendered')
};
