let currentDay = $("#currentDay");
let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let dayBlockContainer = $("#day-block-container");
let currentHour = moment().hour();

// Using moment.js show the date and time at the top of the page
currentDay.text(currentDate);

// Create time blocks using jQuery with a for loop
for (let i = 9; i <= 17; i++) {
  let hourStr = (i % 12 || 12) + (i < 12 ? "AM" : "PM");
  let newBlock = $('<div class="row time-block">');
  let hourDiv = $('<div class="col-md-2 hour">');
  hourDiv.text(hourStr);

  // Create text areas that respond to current time by changing color
  let textArea = $('<textarea class="col-md-8">');
  if (i < currentHour) {
    textArea.addClass("past");
  } else if (i > currentHour) {
    textArea.addClass("future");
  } else {
    textArea.addClass("present");
  }

  // Retrieve information from local storage and display in text area
  textArea.val(localStorage.getItem(hourStr));

  // Create save button and click event that saves value of text area to local storage
  let saveBtn = $(
    `<button class="col-md-2 saveBtn">
      <i class="far fa-save"></i>
    </button>`
  );
  saveBtn.on("click", function (event) {
    localStorage.setItem(hourStr, textArea.val());
  });
  newBlock.append(hourDiv, textArea, saveBtn);
  dayBlockContainer.append(newBlock);
}
