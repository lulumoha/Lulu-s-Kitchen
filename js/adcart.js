
var prices = $(".prices").attr("data_value");

var i =0;
function adcart () {
i++;
  document.getElementById("price").innerHTML="Total price Ksh." +i*prices;
}

$("button").click(function(){
  document.getElementById("select").innerHTML="Selected" +" " +i;
  });
