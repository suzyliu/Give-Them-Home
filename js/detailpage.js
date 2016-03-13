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
    
    var _img = document.getElementById('main_image');
    if (_img) {
        var newImg = new Image;
        newImg.onload = function() {
            _img.src = this.src;
        }
        newImg.src = "images/"+main_role+".jpg";
        
        var text = document.getElementById('name');
        text.textContent = text.textContent + main_role;
    }
//    detailContent
    var filename = main_role +".text";
    readTextFile(filename);

    function readTextFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
//                    alert(allText);
                    
                    var detail = document.getElementById('detailContent');
                    detail.textContent = allText;
                }
            }
        }
        rawFile.send(null);
    }  
});
    
