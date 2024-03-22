
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let itext = document.getElementById("itext");

function generateQR() {
    if (itext.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + itext.value;

        imgBox.classList.add("show-img");

    }
    else{
        itext.classList.add("error");
        setTimeout(()=>{
            itext.classList.remove("error");
        },1000)
    }

}
