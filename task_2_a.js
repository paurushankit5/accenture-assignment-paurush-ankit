$(function(){
  $('a').click(function(){
    alert($(this).attr('href'));
    // or alert($(this).hash();
  });
});