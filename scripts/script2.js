document.addEventListener("DOMContentLoaded", () => {
  const storage = localStorage.getItem("notes");
  let notes = [];

  loadNotes();

  function loadNotes() {
    if (storage) {
      notes = JSON.parse(storage);
      createCards();
    }
  }

  function createCards() {
    if (notes.length > 0) {
      notes.forEach((note) => {
        const card = document.createElement("DIV");
        const cardsDiv = document.querySelector(".cards");
        const { title, text } = note;
        card.innerHTML = `
            <header class="card-header">
                <p class="card-header-title">${title}</p>
            </header>
            <div class="card-content">
                <div class="content">
                    ${text}
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item has-text-primary-dark" id="editNote">
                  <div class="icon-text">
                    <span class="icon has-text-primary-dark">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </span>
                    <span>Editar</span>
                  </div>
                </a>
                <a href="#" class="card-footer-item has-text-danger">
                  <div class="icon-text">
                    <span class="icon has-text-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </span>
                    <span>Borrar</span>
                  </div>
                </a>
            </footer>
            `;
        cardsDiv.appendChild(card);
      });
    }
  }
});
