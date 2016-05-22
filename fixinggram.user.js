// ==UserScript==
// @name        FixingGram
// @namespace   ziptofaf
// @description Zbior skryptow które doprowadzaja gram.pl do uzyteczności
// @include     http://forum.gram.pl/*
// @version     1
// @grant    GM_addStyle
// @grant    GM_getResourceText
// @grant    GM_xmlhttpRequest
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require https://jquery-xml2json-plugin.googlecode.com/svn/trunk/jquery.xml2json.js
// @downloadURL https://raw.githubusercontent.com/ziptofaf/fixinggram/master/fixinggram.user.js
// ==/UserScript==
$(document).ready(function () {
  GM_addStyle(jqUI_CssSrc);
  $('.bold').text('B');
  $('.italic').text('I');
  $('.underline').text('U');
  $('.cbtn').click(function () {
    var dt = new Date();
    var time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
    $('#ftresc').text('\nPost napisany o godzinie ' + time);
  });
  $('.timeago').each(function (index) {
    var dataDodania = $(this).attr('title');
    $(this).text(dataDodania);
  });
  $('.categoryName').click(function () {
    $(this).next().children().toggle();
  });


  $('.forumThreadList').prepend('<header class="categoryName ajaxor"><h3 class="title">Kliknij aby wyświetlić newsy</h3></header>');
  var requestSent = false;
  $('.ajaxor').click(function () {
    if (requestSent == false) {
      $(".ajaxor").after('<ul id=\"newsy\" class=\"threads ajaxnews\"></ul>')
      GM_xmlhttpRequest({
        method: 'GET',
        url: 'http://static0.gram.pl/rss/newsy.xml',
        onload: function (response) {

          var rawText = response.responseText;
          //alert (rawText);
          var rss = $.xml2json(rawText); // uwazam XML za zlo i zawsze go zwalczam!
          for (i=0; i<6; i++) {
          $('.ajaxnews').append("<li class =\"thread\"><div class=\"metadata\"><h3 class=\"threadTitle\"><a href="+ ($(rss.channel.item)[i].link) + " title=\"Przejdź do newsa\">" + ($(rss.channel.item)[i].title) + "</a></h3></div></li>");
          }
          requestSent=true;
        }
      });
    }
  });
  $(".ajaxor").css('cursor', 'pointer');
});
