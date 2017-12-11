<<<<<<< HEAD
$(document).ready(function() {
$(".mbxs").click(function() {
     $('html, body').animate({
         scrollTop: $(".reading-box").offset().top
     }, 1500);
 });
});
=======
var name_of_user;

function validateForm() {

    var x = document.forms["myForm"]["firstname"].value;
	var y = document.forms["myForm"]["email"].value;
  var f = document.forms["myForm"]["address"].value;
    var z = document.getElementById("numb").value;
  console.log('checking.....');
	if (x == null || x == "") {
        alert("First Name must be filled out");
        //return false;
    }
	if (y == null || y == "") {
        alert("Email Cannot be Empty");
        //return false;
    }

    if (f == null || f == "") {
          alert("Physical address is mandatory");
          //return false;
    }
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(z) || z < 1 || z> 10000000000) {
        alert("Number is not in Correct Format and Enter not more than 10 digits");
    }
     else {
	alert("Form Submitted");
        }

}
>>>>>>> ip5
