$(function(){
  $('a').click(function(){
    var href= $(this).attr('href');
    $(this).attr('href',"#");
    popitup(href);
   });
});

function popitup(url) {
    newwindow=window.open(url,'name','height=500,width=500');
    if (window.focus) {newwindow.focus()}
    return false;
}