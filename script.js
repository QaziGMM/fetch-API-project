async function displayData() {
  const apiurl = `https://fakestoreapi.com/products`;
  const res = await fetch(apiurl);
  const products = await res.json();

  for (const product of products) {
    console.log(product);
    const parentBlock = document.querySelector("#parent");

    const parent = document.createElement("div");

    // Image Container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img");

    const image = document.createElement("img");
    image.src = product.image;
    image.setAttribute("id", "product-image");

    imageContainer.appendChild(image);

    parent.appendChild(imageContainer);
    // // Content
    const idcontainer = document.createElement("h1");
    idcontainer.setAttribute("id", "id");
    idcontainer.textContent = product.title;

    const prisecontainer = document.createElement("p");
    prisecontainer.setAttribute("class", "price");
    prisecontainer.textContent = product.price;

    const discontainer = document.createElement("p");
    discontainer.setAttribute("class", "discription");
    discontainer.textContent = product.description;

    parent.appendChild(idcontainer);
    parent.appendChild(prisecontainer);
    parent.appendChild(discontainer);

    console.log(imageContainer);

    parentBlock.appendChild(parent);

    console.log("appended");
  }
}

displayData();
