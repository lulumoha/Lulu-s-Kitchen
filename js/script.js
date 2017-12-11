$(document).ready(function() {
$(".mbxs").click(function() {
     $('html, body').animate({
         scrollTop: $(".reading-box").offset().top
     }, 1500);
 });
});
