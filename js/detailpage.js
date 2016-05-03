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
    var filename = "file:///Users/Suzzie/Development/Give-Them-Home/" + main_role +".text";
    var _img = document.getElementById('main_image');
    
    if (_img) {
        var text = document.getElementById('name');
        text.textContent = text.textContent + main_role;
        //_img.src = xxx
        if(main_role == "Laladog"){
            alert("Same");
            //put the content here
        }else if(main_role == ""){
        }
    }
   
    function setImageForId(image_id){
       var newImg = new Image;
        newImg.onload = function() {
            _img.src = this.src;
        }
        newImg.src = "images/"+image_id+".jpg";
    }
});
    
