//wait for the DOM elements to load before executing
$(document).ready(function() {
    $('#submit-btn').click(function (event) {
        //prevent the submit button from refreshing the page
        event.preventDefault();
        //get the value of the #city-type input and correct for capitalization
        var city = $("#city-type").val().toLowerCase();
        // if the user inputs New York City / NYC / New York change the body class to 'nyc'
        if ((city == "nyc") || (city == "new york city") || (city == "new york")) {
            $("body").attr("class", "nyc");
            // if the user inputs SF/San Francisco/Bay Area change the body class to 'sf'
        } else if ((city == "sf") || (city == "san francisco")	|| (city == "san-francisco")) {
            $("body").attr("class", "sf");
            // if the user inputs Austin/ATX change the body class to 'austin'
        } else if ((city == "austin") || (city == "atx")) {
            $("body").attr("class", "austin");
            // if the user inputs Los Angeles/LA/LAX change the body class to 'la'
        } else if ((city == "la") || (city == "los angeles")	|| (city == "lax")) {
            $("body").attr("class", "la");
            // if the user inputs Sydney/SYD change the body class to 'sydney'
        } else if ((city == "sydney") || (city == "syd")) {
            $("body").attr("class", "sydney");
        };
    })
})
