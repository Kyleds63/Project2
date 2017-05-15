// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api", function(data) {

    $("#currentUser").append(data.email);
    $("#currentFirstName").append(data.firstname);
    $("#currentLastName").append(data.lastname);
    $("#currentEmail").append(data.email);
});

