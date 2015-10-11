// ==UserScript==
// @name        FixingGram
// @namespace   ziptofaf
// @description Zbiór skryptów które doprowadzaj¹ gram.pl do u¿ytecznoœci
// @include     http://forum.gram.pl/*
// @version     1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js
// ==/UserScript==
$(document).ready(function() {
$(".threadInfo").hide();
$(".content").css("color", "white");
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
$(".forumThreadList").css("background-color", "#4C4646");
$("a:link").css("color", "#B6B6B4")
$("#main").css("background-color", "#404040")
$(".categoryName").css("background-color", "#404040")
$(".excerpt").css("color", "#B6B6B4")
$("<div class=\"navbuttons\"><span class=\"cbtn cbdp\" title=\"dodaj post\"><a onclick=\"addPost()\">Dodaj post</a></span></div>").insertBefore($(".pagination"));
$(".breadcrumb").clone().insertBefore($(".pagination"));
$(".threadTitle").css("font-size", "15px");
  
$(".categoryName").click(function () {
  $(this).next().children().toggle();
});
  
});
