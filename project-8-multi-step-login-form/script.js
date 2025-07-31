// form
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
// next
let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
// back
let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");

// progress bar
let progress = document.querySelector(".progress-line");
let steps = document.querySelectorAll(".step");

// submit
let submit = document.getElementById("submit");

// Active step and progress color set

const setActiveStep = (index) => {
  if (index == 0) {
    steps[0].classList.add("active");
    steps[1].classList.remove("active");
    steps[2].classList.remove("active");
  } else if (index == 1) {
    steps[0].classList.add("active");
    steps[1].classList.add("active");
    steps[2].classList.remove("active");
  } else if (index == 2) {
    steps[0].classList.add("active");
    steps[1].classList.add("active");
    steps[2].classList.add("active");
  }
};

/*
// methhod 2 for activity step
const setActiveStep = (index) => {
  steps.forEach((step, i) => {
    if (i <= index) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
};
*/

// Step 1 → 2
next1.onclick = (e) => {
  e.preventDefault();
  if (form1.checkValidity()) {
    form1.style.left = "-450px";
    form2.style.left = "30px";
    progress.style.width = "66.66%";
    setActiveStep(1);
  } else {
    form1.reportValidity();
  }
};
// Step 2 → 1
back1.onclick = (e) => {
  e.preventDefault();
  form1.style.left = "30px";
  form2.style.left = "-450px";
  progress.style.width = "33.33%";
  setActiveStep(0);
};
// Step 2 → 3
next2.onclick = (e) => {
  e.preventDefault();
  if (form2.checkValidity()) {
    form2.style.left = "-450px";
    form3.style.left = "30px";
    progress.style.width = "100%";
    setActiveStep(2);
  } else {
    form2.reportValidity();
  }
};
// Step 3 → 2
back2.onclick = (e) => {
  e.preventDefault();
  form2.style.left = "30px";
  form3.style.left = "-450px";
  progress.style.width = "66.66%";
  setActiveStep(1);
};

// submit
submit.onclick = (e) => {
  e.preventDefault();
  if (form3.checkValidity()) {
    alert("Form Submit Successfully");
    form1.reset();
    form2.reset();
    form3.reset();
    form1.style.left = "30px";
    form2.style.left = "450px";
    form3.style.left = "-450px";
    progress.style.width = "33.33%";
  } else {
    form3.reportValidity();
  }
};
