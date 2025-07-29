import { renderProductElement } from "./search/searchEngine.js";
import { getUrlParam } from "./data/URLparams.js";
import { renderHeaderProducts } from './products/update-header-products.js'

renderHeaderProducts();

renderProductElement(getUrlParam('productId'));

