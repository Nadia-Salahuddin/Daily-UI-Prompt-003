var message = "You clicked the "

$("#nav-bar-dropdown").hide();

// button code
$("#about-button").click(function() {
    alert(message + "about button.");
});
$("#download-button").click(function() {
    alert(message + "download button.");
});
$("#pricing-button").click(function() {
    alert(message + "pricing button.");
});
$("#features-button").click(function() {
    alert(message + "features button.");
});
$("#contact-button").click(function() {
    alert(message + "contact button.");
});
$("#sign-in-button").click(function() {
    alert(message + "sign in button.");
});

$("#menu-button").click(function() {
    $("#nav-bar-dropdown").slideToggle();
});


$("#header-button").click(function() {
    alert(message + "get started today button.");
});

$("#beginner-plan").click(function() {
    alert("You chose the beginner plan.")
});
$("#master-plan").click(function() {
    alert("You chose the master plan.")
});
$("#premium-plan").click(function() {
    alert("You chose the premium plan.")
});