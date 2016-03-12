function sideNav() {
  if ($(window).width() < 769) {
    $('.off-canvas-wrap').removeClass('move-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-right');
    $('.left-off-canvas-toggle').hide();
  }  
}

$(window).resize(function() {
  sideNav();
});

 function goToDetail(clickedElement){
        var param = clickedElement.id;
         window.location = "detail.html?param="+param;      
    }
$(document).ready(function(){
        
    $("#dogdetail").click(function(){
//        var parm=document.getElementById("").value; 
        var parm=$("#dogdetail").valueOf; 
        
//        var param="LalaDog";
//        window.location.assign(myurl);
//        window.location = "detail.html?param="+param;
         window.location = "detail.html?param="+param;

//        window.open(myurl);
    });
    $( "#btn" ).click(function() {
//      alert( "Sorry, other pages not build yet. lol" );
        var param = "laladog";
        window.location = "about.html?param="+param;
    });
});