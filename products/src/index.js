let node = `<h2>Products List</h2>`;

for (let i = 0;i < 10;i++) {
  node += `<div>Product #${i}</div>`;
}

document.querySelector("#products-micro-fe").innerHTML = node;
console.log('products loaded!');