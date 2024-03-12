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
        const cardsDiv = document.querySelector(".cards");
        const card = document.createElement("DIV");
        const cardHeader = document.createElement("HEADER");
        const cardContent = document.createElement("DIV");
        const footer = document.createElement("FOOTER");
        const btnEdit = document.createElement("BUTTON");
        const btnErase = document.createElement("BUTTON");
        const { title, text, id } = note;
        let textLength = text;
        if (textLength.length > 40) {
          textLength = `${textLength.slice(0, 38)}...`;
        }
        moment.locale("es-mx");
        card.id = id;
        card.classList.add("mb-3");
        cardHeader.classList.add("card-header");
        cardHeader.innerHTML = `
          <p class="card-header-title p-3">${title}</p>
        `;
        cardContent.classList.add("card-content", "p-3");
        cardContent.innerHTML = `
          <div class="content">
            ${textLength}
            <br />
            <time class="is-size-7 has-text-grey is-family-code" datetime="${id}">${moment(id).format(
          "LLL"
        )}</time>
          </div>
        `;
        footer.classList.add("card-footer");
        btnEdit.classList.add(
          "card-footer-item",
          "button",
          "is-primary",
          "is-light"
        );
        btnEdit.id = "editNote";
        btnEdit.innerHTML = `
          <div class="icon-text">
            <span class="icon has-text-primary-dark">
              <i class="fa-regular fa-pen-to-square"></i>
            </span>
            <span>Editar</span>
          </div>
        `;
        btnErase.classList.add(
          "card-footer-item",
          "button",
          "is-danger",
          "is-light"
        );
        btnErase.id = "eraseNote";
        btnErase.innerHTML = `
          <div class="icon-text">
            <span class="icon has-text-danger">
              <i class="fa-solid fa-trash-can"></i>
            </span>
            <span>Borrar</span>
          </div>
        `;
        footer.appendChild(btnEdit);
        footer.appendChild(btnErase);
        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        card.appendChild(footer);
        cardsDiv.appendChild(card);

        btnEdit.onclick = () => {
          localStorage.setItem("editNote", JSON.stringify(note));
          eraseNote(id);
          location.href = "index.html";
        };
        btnErase.onclick = (e) => {
          eraseNote(id);
          e.currentTarget.parentElement.parentElement.remove(); // current target always refers to the element to which the event handler has been attached
        };
      });
    }
  }

  function eraseNote(id) {
    notes = notes.filter((note) => note.id !== id);
    updateStorage();
  }

  function updateStorage() {
    localStorage.setItem("notes", JSON.stringify(notes)); // Save in ls
  }
});
