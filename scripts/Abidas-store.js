import { renderGridItems, addGridItemTest, randomRenderGridItems} from "./products/load-product.js";
import { getUrlParam } from "./data/URLparams.js";

function renderPage() {
  const search = getUrlParam('search');
  if (search === 'random') {
    randomRenderGridItems();
  } else {
    renderGridItems();
  }
}

renderPage();
addGridItemTest(11)

console.log('Have you lost something? ;0');
console.log('By: Astra.dev');