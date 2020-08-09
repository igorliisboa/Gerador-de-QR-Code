let divQr = document.getElementById('qrcode');
function gerarcodigo(){
    let url = document.getElementById('url').value
    divQr.innerHTML = ''
    new QRCode(divQr,{text: url,width:300, height:300})
    setTimeout(() => {
        baixar();
    }, 1000);
}

function baixar(){
    let btn = document.getElementById('download');
    let img = divQr.querySelector('img').src;
    btn.href = img;
}
