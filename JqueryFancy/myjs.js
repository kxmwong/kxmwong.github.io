$(document).ready(function(){

  $("#vid").hide();

  $(".button").click(function(){
      console.log("show video");
      $("#vid").css("display","block");
      $(".button").fadeOut(3000);


      $(".overLay").css("height","100vh");
  });

$(".overLay").click(function() {
  $(".overLay").css("height","0vh");
});

});

console.log("hello script started");
