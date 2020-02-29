$(document).ready(function(){

  var allPs = $("p");
  console.log(allPs);

  var classp = $(".paragraph1");
  console.log(classp);

  var idp = $("#ptag");
  console.log(idp);

  idp.html("this is another text that was dynamically generated");
  allPs.html("Hi this is my new text");

  var div = $(".empty");
  div.html("<h2>HI</h2>")

  idp.click(function(){
      $("img").attr("src","https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=416&h=312&q=60");

  });

  $("paragraph1").click(imgOpacity);

  $("paragraph1").click(function(){
    $("p").click(function(){
      $("body").css("background","red");
    });

  });



  $(".paragraph1").clickfunction({
      $("img").css("opacity","0.5")

  });

});
