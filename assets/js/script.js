//Gets the current date to display in the jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
  //listener for saveBtn
  $(".saveBtn").on("click", function () {
      // collects value from adjacent text field and hour the field is for
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // stores the text to local storage
      localStorage.setItem(time, text);
  })
 
  function timeTracker() {
      //get current number of hours
      var timeNow = moment().hour();

      // loops over each time block
      $(".time-block").each(function () {
          var blockTime = parseInt($(this).attr("id").split("hour")[1]);

          // checks whether each block is in the hour or the past and applies the appropriate background indicator
          if (blockTime < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

      // retrieves any previously stored data if it exists
      $("#hour8 .description").val(localStorage.getItem("hour8"));
      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));
  
      timeTracker();
  })