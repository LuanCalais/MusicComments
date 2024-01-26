import "./socket-comment-index.js"

const genders = document.getElementById('gender-list')

function insertNewDocument(name) {
    genders.innerHTML += `
    <a href="comment.html?name=${name}" class="list-group-item list-group-item-action">
       ${name}
    </a>
    `
}

export { insertNewDocument }
