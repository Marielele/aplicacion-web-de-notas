document.addEventListener("DOMContentLoaded", function () {
  // variables
  const textArea = document.querySelector("textarea");
  const form = document.querySelector("#form");
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
    loadNotes();
  }

  function addNote(e) {
    e.preventDefault();
    const title = document.querySelector("#title");
    if (textArea.value.trim() === "" || title.value.trim() === "") {
      return;
    }
    const noteObj = {
      id: Date.now(),
      title: title.value,
      text: textArea.value,
    };
    notes = [...notes, noteObj];
    localStorage.setItem("notes", JSON.stringify(notes));
    form.reset();
    console.log(notes)
  }

  function loadNotes() {
    if (storage) {
      notes = JSON.parse(storage);
    }
  }
});
