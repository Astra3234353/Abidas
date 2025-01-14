import { renderGridItems, addGridItemTest, randomRenderGridItems} from "./products/load-product.js";
import { getUrlParam } from "./data/URLparams.js";

function renderPage() {
  const search = getUrlParam('search');
  if (search === 'random') {
    randomRenderGridItems();
    renderSearchInfo(search)
  } else if (search === 'hombre') {
    renderGridItems();
    renderSearchInfo(search)
  } else if (search === 'mujer') {
    renderGridItems();
    renderSearchInfo(search)
  } else {
    renderGridItems();
  }
}

renderPage();
addGridItemTest(11)

console.log('Pages created by: AstraDev');

function renderSearchInfo(searchInfo) {
  document.querySelector('.search-result-info')
    .innerHTML= `Calzado · ${searchInfo} · Todo`
}