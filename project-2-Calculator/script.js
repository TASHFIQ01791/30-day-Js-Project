const display = document.getElementById("display");
// press button
function press(val) {
  if (display.value === "Syntax Error") {
    clearDisplay();
  }
  display.value += val;
}

// clear display + color
function clearDisplay() {
  display.value = "";
  display.style.color = "#164747"; // reset color
}

// Delete last character
function deleteChar() {
  if (display.value === "Syntax Error") {
    clearDisplay();
    return;
  }
  display.value = display.value.slice(0, -1);
}
// calculation
function calculation() {
  if (display.value.trim() === "") {
    // If empty, just clear or do nothing
    clearDisplay();
    return;
  }
  
  try {
    display.value = eval(display.value);
    display.style.color = "#164747";
  } catch {
    display.value = "Syntax Error";
    display.style.color = "white";
  }
}

// ✅ Keyboard support

document.addEventListener("keydown", function (e) {
  const key = e.key;
  // Press Enter = calculation
  if (key === "Enter") {
    e.preventDefault();
    calculation();
  }
  // Press Backspace = delete last char
  else if (key === "Backspace") {
    e.preventDefault();
    deleteChar();
  }
  // Press Escape = clear display
  else if (key === "Escape") {
    clearDisplay();
  }
  // Allow digits, operators, decimal, %
  else if (/^[0-9+\-*/%.]$/.test(key)) {
    press(key);
  }
});
