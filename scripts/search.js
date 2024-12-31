import { products } from "./data/products.js";
import { renderProductElement } from "./search/searchEngine.js";
import { getUrlParam } from "./data/URLparams.js";
import { addGalleryEvent } from "./search/slider.js";

renderProductElement(getUrlParam('productId'));
addGalleryEvent();