let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let text = document.getElementById('text');

function generateQRCode() {
    if(text.value === '') {
        text.classList.add('error');
        setTimeout(() => {
            text.classList.remove('error');
        }, 1000);
        return;
    }else {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    imgBox.classList.add('active');
    qrImage.classList.add('img-border');
    }
}