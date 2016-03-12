var main_role;
$(document).ready(function(){

    function getparm() 
    { 
        var url=location.href; 
//        var tmp1=url.split("?")[1]; 
//    var tmp2=tmp1.split("&")[0]; 
//    var tmp3=tmp2.split("=")[1]; 
//        var parm1=tmp3;
        main_role = url.split("=")[1];
//        alert(main_role); 
    } 
    getparm();
    
//    var _img = document.getElementById('main_image');
//    var newImg = new Image;
//    newImg.onload = function() {
//        _img.src = this.src;
//    }
//    newImg.src = "images/"+main_role+".jpg";
});
