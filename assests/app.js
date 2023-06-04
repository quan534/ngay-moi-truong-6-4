var shop = document.querySelector('.shop')
var i=9
function gotoshop(){
    if (i==0) {
        shop.style.display="block"
    }
    else{
        alert("bạn cần đăng nhập để sử dụng chức năng này")
        window.location.href = "../login and register/index - Copy.html";
    }
}