/*
*Author: Cassidy Crawford
*Created: 25 May 2022
*License: Public Domain
*/

var endpoint = "https://yesno.wtf/api";

function addText(text) {
$("#output").html(text);
}

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })

  .done(function(data){
  	console.log("Worked!");
    str = ""
    str += "<img src=" + data.image + ">"
    str += "<p>" + data.answer + "<p>";
  	addText(str);
  })
  .fail(function(request, error){
  	$("#output").html("error");
  })
}

$("#activate").click(getAjax);
