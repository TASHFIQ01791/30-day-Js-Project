function setColumnWidth(percentage) {
  document.querySelectorAll(".row > .column").forEach((col) => {
    col.style.width = percentage;
  });
}

function full() {
  setColumnWidth("50%");
}

function twoColumn() {
  setColumnWidth("45%");
}

function fourColumn() {
  setColumnWidth("25%");
}
