import moment from 'moment';

function mount(el) {
  let node = `
    <h2>Products List</h2>
    <span>Updated at ${moment().format('LL')}</span>
  `;

  for (let i = 0;i < 10;i++) {
    node += `<div>Product #${i}</div>`;
  }

  el.innerHTML = node;
  console.log('products loaded!');
}

/**
 * Context/Situation #1
 * We are running this file in development in isolation
 * We are using our local index.html file
 * Which DEFNITELY has an element with an id of "products-micro-fe"
 * We want to immediately render our app into that element
 */
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector("#products-micro-fe");

  // Assuming our container doesnt have an element
  // with id "products-micro-fe"....
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

/**
 * Context/Situation #2
 * We are running this file in development or production
 * through the CONTAINER app
 * NO GUARANTEE that an element with an id of "products-micro-fe" exists
 * WE DO NOT WANT try to immediately render the app
 */
export { mount };