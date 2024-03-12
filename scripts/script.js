document.addEventListener("DOMContentLoaded", function () {
  // variables
  const textArea = document.querySelector("textarea");
  const title = document.querySelector("#title");
  const form = document.querySelector("#form");
  const label = document.querySelector("div.field label");
  const storage = localStorage.getItem("notes");
  let notes = [];

  start();

  // eventos
  form.addEventListener("submit", addNote);

  // funciones
  function start() {
    const mqMedium = window.matchMedia("(min-height: 800px)");
    if (mqMedium.matches) {
      textArea.rows = 18;
    }
    if (localStorage.getItem("editNote")) {
      const edit = JSON.parse(localStorage.getItem("editNote"));
      label.innerHTML = "Editar nota:";
      title.value = edit.title;
      textArea.value = edit.text;
    }
    loadNotes();
  }

  function addNote(e) {
    e.preventDefault();
    if (textArea.value.trim() === "" || title.value.trim() === "") {
      return;
    }
    if (label.innerHTML == "Editar nota:") {
      localStorage.removeItem("editNote");
      label.innerHTML = "Nueva nota:"
    }
    const noteObj = {
      id: Date.now(),
      title: title.value,
      text: textArea.value,
    };
    notes = [...notes, noteObj];
    localStorage.setItem("notes", JSON.stringify(notes));
    form.reset();
    console.log(notes);
  }

  function loadNotes() {
    if (storage) {
      notes = JSON.parse(storage);
    }
  }
});
