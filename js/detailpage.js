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
    } 
    getparm();
    var _imgList = document.getElementById('owl-demo');
    if (_imgList) {
        var text = document.getElementById('name');
        text.textContent = text.textContent + main_role;
        
        if(main_role == "Laladog"){
            //put the content here
            var numberOfImages = 2;
            
        }else if(main_role == "Honey"){
            var content = ['From the northen side of Seatle.'];
            var numberOfImages = 2;
        }else if(main_role == "mia"){
            var numberOfImages = 5;
        }else if(main_role == "MsTiger"){
            var numberOfImages = 10;
        }
        for(i = 0; i < numberOfImages; i++){
            var div = document.createElement('div');
            div.setAttribute('class', 'item');
            
            var imageBlock = [' <img src = "images/'+main_role+'/'+main_role+(i+1)+ '.jpg">'];
            div.innerHTML = imageBlock;
            document.getElementById('owl-demo').appendChild(div);
        }
        document.getElementById('detailContent').textContent = content;

    }
});
    
