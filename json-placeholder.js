const apiBaseUrl = "https://jsonplaceholder.typicode.com/";


let searchBtn = document.getElementById("searchBtn");
let sourceType = document.getElementById("source");
let itemInput = document.getElementById("itemId");
let resultContainer = document.getElementById("result");

let getItemByID = async (source, id) => {
    let response = await fetch(`${apiBaseUrl}${source}/${id}`);
    return await response.json();
}

searchBtn.addEventListener("click", async () => {
    let source = sourceType.value;
    let json = await getItemByID(source, itemInput.value);
    switch (source) {
        case "users": resultContainer.innerHTML = createUserCard(json); break;
        case "posts": resultContainer.innerHTML = createPostCard(json); break;
        case "comments": resultContainer.innerHTML = createCommentCard(json); break;
        case "albums": resultContainer.innerHTML = createAlbumCard(json); break;
        case "photos": resultContainer.innerHTML = createPhotoCard(json); break;
        case "todos": resultContainer.innerHTML = createTodoCard(json); break;
    }
})


let createUserCard = (json) => {
    let { name, username, email, phone, website, address } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${username} - ${email}</h6>
      <p class="card-text">Phone : ${phone}</p>
      <p class="card-text">Website : ${website}</p>
      <p class="card-text">City : ${address.city}</p>
    </div>
  </div>`;
    return html;
}

let createPostCard = (json) => {
    let { title, body, id } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
      <p class="card-text">${body}</p>
    </div>
  </div>`;
    return html;
}

let createCommentCard = (json) => {
    let { name, email, body, postId } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${postId}. ${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
      <p class="card-text">${body}</p>
    </div>
  </div>`;
    return html;
}

let createAlbumCard = (json) => {
    let { id, title, userId } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">UserID: ${userId}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Title: ${title}</h6>
      <p class="card-text">ID: ${id}</p>
    </div>
  </div>`;
    return html;
}

let createPhotoCard = (json) => {
    let { title, thumbnailUrl } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <img class="card-img-top" src="${thumbnailUrl}" alt="Card image cap">
      <h5 class="card-title">${title}</h5>
    </div>
  </div>`;
    return html;
}

let createTodoCard = (json) => {
    let { userId, title, completed } = json;
    let html = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">UserID: ${userId}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Completed: ${completed}</h6>
    </div>
  </div>`;
    return html;
}