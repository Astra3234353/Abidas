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

console.log('Pages created by: AstraDev');