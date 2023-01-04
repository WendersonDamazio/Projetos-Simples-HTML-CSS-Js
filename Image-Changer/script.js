var number_img = 1;

function img_changer_add(){
    var img = document.getElementById("img");

    if(number_img < 3){
        number_img += 1;
    }else{
        number_img = 3
    }

    img.src = "assets/img" + number_img + ".png";
}
function img_changer_sub(){
    var img = document.getElementById("img");

    if(number_img > 1){
        number_img -= 1;
    }else{
        number_img = 1
    }

    img.src = "assets/img" + number_img + ".png";
}