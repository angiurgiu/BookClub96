$(document).ready(function() {

    console.log("Pluralsight");

    var rateButton = $("#rateButton");
    rateButton.on("click",
        function() {
            console.log("Rating Book");
        });

    var bookInfo = $(".book-props li");
    bookInfo.on("click",
        function() {
            console.log("You clicked on " + $(this).text());
        });

    var loginToggle = $("#loginToggle");
    var popupForm = $(".popupForm");

    loginToggle.on("click", function() {
        popupForm.toggle(500);
    });
});