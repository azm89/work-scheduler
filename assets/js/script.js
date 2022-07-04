let container = $("#container");
//DECLARE current time
let currentTime = moment().format();
console.log(currentTime);

//DECLARE current hour
let currentHour = moment().hour()
console.log(currentHour);
  
//DECLARE current day html event
let 

//DECLARE time entries container HTML element
var containerEl; 

//render a block for each hour of the day
for(var i=9; i<=17; i++) {

    var key = "hour-" + i;
    var data = "";
    //attempt to get the saved data for the hour of the loop

    //compare i to current hour to determine if this hour is in the past present or future
    
    var template = 
    `      
    <div class="row">
        <div>
            ${i}AM
        </div>
        <div>
          <textarea>${data}</textarea>
        </div>
        <div>
          <button data-hour=${i}></button>
        </div>
    </div>
    `;
  
  //append the html to the container object
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
