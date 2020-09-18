localStorage.setItem("name", "Patrick");
//
let hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let fullDayBlock = $("full-day-block");

// TODO: Create time blocks using jQuery with a for loop
for (let i = 0; i < hour.length; i++) {
  let newBlock = $("<div>");
  newBlock.addClass("time-block"); //add in bootstrap classes here?
  newBlock.attr("data-time", hour[i]);
  newBlock.text(hour[i]);
  fullDayBlock.append(newBlock);
  console.log(newBlock);
}

//- one row with time, text area and button using jq
// {<div class="row  time-block">
// <div class="col-md-2 hour">
//   9 AM
// </div>
// <textarea class="col-md-8 past">

// </textarea>
// <button class="col-md-2 saveBtn ">
//   Save
// </button>
// </div> }
// TODO: Using moment.js show the time on th top of the calendar
// TODO: using moment.js change the color of the calendar depending on the time of day
// TODO: Create click event listener for my save buttons
// TODO: Save text from each time block to local storage
//      TODO: Grab text from text area and localStorage.setItem
//      TODO: Retrieve data and show on page with localStorage.getItem
