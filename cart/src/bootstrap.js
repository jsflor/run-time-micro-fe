import moment from 'moment';

function mount(el) {
  el.innerHTML = `
    <h2>Cart</h2>
    <span>Updated at ${moment().format('LL')}</span>
    <p>Your products goes here....</p>
  `;

  console.log('cart loaded!');
}

/**
 * Context/Situation #1
 * We are running this file in development in isolation
 * We are using our local index.html file
 * Which DEFNITELY has an element with an id of "cart-micro-fe"
 * We want to immediately render our app into that element
 */
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector("#cart-micro-fe");

  // Assuming our container doesnt have an element
  // with id "cart-micro-fe"....
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

/**
 * Context/Situation #2
 * We are running this file in development or production
 * through the CONTAINER app
 * NO GUARANTEE that an element with an id of "cart-micro-fe" exists
 * WE DO NOT WANT try to immediately render the app
 */
export { mount };