// ==UserScript==
// @name        FixingGram
// @namespace   ziptofaf
// @description Zbior skryptow które doprowadzaja gram.pl do uzyteczności
// @include     http://forum.gram.pl/*
// @version     1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @downloadURL https://raw.githubusercontent.com/ziptofaf/fixinggram/master/fixinggram.user.js
// ==/UserScript==
$(document).ready(function() {
$(".threadInfo").hide();
$(".content").css("color", "white");
$(".post").css("background-color", "#404040");

$("p").css("color", "white");
$(".profileLink").css("max-width", "75px");
$(".profileLink").css("max-height", "75px");
$(".spoiler").css("color", "#404040");
$(".thread").css("min-height", "0rem");
$(".thread").css("padding", "0rem 1rem");
$(".postContent").css("min-height", "0rem");
$(".postUser").css("min-height", "0rem");
$(".postActions").css("min-height", "0rem");
$("body").css("background-image", "none");
$("body").css("background-color", "#202020");
$(".forumThreadList").css("background-color", "#484848");
$("b").css("color", "white");
$("i").css("color", "white");
$("u").css("color", "white");
$(".bold").text("B");
$(".italic").text("I");
$(".underline").text("U");
$(".spoiler").text("S");
$("#main").css("background-color", "#404040");
$(".categoryName").css("background-color", "#404040");
$(".excerpt").css("color", "#B6B6B4");
$(".breadcrumb").clone().insertBefore($(".pagination"));
$(".threadTitle").css("font-size", "15.1px");

  $(".cbtn").click(function () {
   var dt = new Date();
   var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
   $("#ftresc").text("\nPost napisany o godzinie " + time);
  });

$(".categoryName").click(function () {
  $(this).next().children().toggle();
});

});
