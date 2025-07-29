import { renderGridItems, addGridItemTest } from "../scripts/products/load-product.js";
import { products } from "../scripts/data/products.js";

describe('test suite: Load Products', () => {
  beforeEach(() => {
    document.querySelector('.js-test-container').innerHTML = `
      <div class="main__grid"></div>
    `;
  });

  it('displays all products into the grid', () => {
    renderGridItems();

    expect(
      document.querySelectorAll('.js-product-container').length
    ).toEqual(products.length);
  });

  it('displays n extra items into the grid', () => {
    addGridItemTest(10);
    console.log(document.querySelectorAll('.js-product-container').length);

    expect(
      document.querySelectorAll('.js-product-container').length
    ).toEqual(10);
  });

  it('displays all products + extra items into de grid', () => {
    renderGridItems();
    addGridItemTest(10);

    expect(
      document.querySelectorAll('.js-product-container').length
    ).toEqual(products.length + 10);
  })
});
