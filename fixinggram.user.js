// ==UserScript==
// @name        FixingGram
// @namespace   ziptofaf
// @description Zbior skryptow które doprowadzaja gram.pl do uzyteczności
// @include     http://forum.gram.pl/*
// @version     1
// @grant    GM_addStyle
// @grant    GM_getResourceText
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @resource betterCSS better.css
// @downloadURL https://raw.githubusercontent.com/ziptofaf/fixinggram/master/fixinggram.user.js
// ==/UserScript==
$(document).ready(function() {

var jqUI_CssSrc = GM_getResourceText ("betterCSS");
var clicks=0;
GM_addStyle (jqUI_CssSrc);

$(".bold").text("B");
$(".italic").text("I");
$(".underline").text("U");

  $(".cbtn").click(function () {
   var dt = new Date();
   var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
   $("#ftresc").text("\nPost napisany o godzinie " + time);
  });

$(".timeago").each(function (index) {
  var dataDodania = $(this).attr("title");
  $(this).text(dataDodania);
});

$(".categoryName").click(function () {
  $(this).next().children().toggle();
});

$(".post").each(function (index) {
url = $(this).find(".postNumber").attr("href");
button = "<li><a class=\"action \" title = \"Wyświetl ten post\" href=" + url + "></li>";
$(this).find(".postActions").prepend(button);
});

$(".cbdp").click(function () {
  $(".cbdp").toggle();
});

$(".closeButton").click(function () {
  clicks+=1;
  if (clicks==2){
   $(".cbdp").toggle();
   clicks=0;
  }
});

});
