//DECLARE current time
var currentTime = moment().format("HH:mm:ss");
console.log(currentTime);

//DECLARE current hour
var currentHour = moment().hour()
console.log(currentHour);
  
//DECLARE current day html event
var currentDay = moment().format('dddd, MMM Do YYYY');
console.log(currentDay);
$("#currentDay").html(currentDay);

//DECLARE time entries container HTML element
var containerEl = $(".container");
console.log(containerEl);

//render a block for each hour of the day
for(var i=8; i<=17; i++) {

    var key = "hour-" + i;
    var data = "";
    //attempt to get the saved data for the hour of the loop


    //compare i to current hour to determine if this hour is in the past present or future
    
    
    var template = 
    `      
    <div class="row time-block">
        <div class="col-md-1 hour">
            ${i}
        </div>
        <div class="col-md-1">
          <textarea class="col-md-10 description">${data}</textarea>
        </div>
        <div>
          <button class="btn saveBtn fas fa-save" data-hour=${i}></button>
        </div>
    </div>
    `;
  
  //append the html to the container object
  containerEl.append(template);
}

//setting up a "click" event listener on the container
containerEl.on("click", "[data-hour]", function (e) {

  e.target.matches("button");
    
  //fetch the current hour from the clicked button's (event.target) "data-hour" attribute

  //use the hour to create the key for local storage

  //from the clicked button, traverse the Dom to the nearby <textarea> to fetch its value

  //use the key and the value to save into local storage
    

});

    //save an hour to local storage
