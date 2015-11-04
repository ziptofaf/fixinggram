// ==UserScript==
// @name        FixingGramSajt
// @namespace   ziptofaf2
// @description Zbior skryptow które doprowadzaja gramsajty do uzyteczności
// @downloadURL https://raw.githubusercontent.com/ziptofaf/fixinggram/master/fixinggramsajt.user.js
// @include     http://ja.gram.pl/*
// @grant    GM_addStyle
// @grant    GM_getResourceText
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @version     1
// ==/UserScript==
$(document).ready(function() {
  $(".av .ico").attr("width", "32px");
  $(".av img").attr("width", "32px");
});
