function calculate() {
  // receiving input
  const input = document.getElementById("date");
  const result=document.getElementById("result");
  const inputValue = input.value;

   // Validation: input empty?
  if (inputValue === "") {
    alert("Please Enter Your Birth Date");
    return;
  }
  // calculating birth date
  const birthDate = new Date(inputValue);
  const todayDate = new Date();

    // Validation: future date?
  if (birthDate > todayDate) {
    alert("Future date is not allowed!");
    return;
  }

  let year = todayDate.getFullYear() - birthDate.getFullYear();
  let month = todayDate.getMonth() - birthDate.getMonth();
  let day = todayDate.getDate() - birthDate.getDate();

  //   console.log(year, month, day); // 25 -4 1

  // fixing the month
  if (month < 0) {
    year--;
    month += 12; // 12-4 = 8
  }
  // fixing the day
  if (day < 0) {
    month--;
    const prevMonth=new Date(todayDate.getFullYear(),todayDate.getMonth(),0);
    // finding the day
    day = day + prevMonth.getDate();
  }
  result.innerHTML=`You are <span>${year}</span> years, <span>${month}</span> months and  <span>${day}</span> days old`
}

