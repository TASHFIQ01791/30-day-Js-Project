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

// dark light
const icon = document.getElementById("icon");
icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "darkLight/sun.png";
  } else {
    icon.src = "darkLight/moon.png";
  }
});
