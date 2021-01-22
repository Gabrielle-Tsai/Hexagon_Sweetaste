var banner = document.getElementsByClassName('bg-banner');
if(banner){
    var checkPage = banner[0].getAttribute('id');
    var changebg = document.getElementById(checkPage);
    switch(checkPage) {
        case "indexBanner":
            changebg.style['background-image'] = 'url(https://bit.ly/2OhbMHr)';
            break;
        case "productBanner":
            changebg.style['background-image'] = 'url(images/productBanner.jfif)';
            break;
        case "checkout-success-banner":
            changebg.style['background-image'] = 'url(https://bit.ly/2P7GhNd)';
            changebg.style['height'] = '460px';
            break;
    }
    }else{
}

var heart = document.getElementsByClassName('likeBtn');
for (i=0; i<heart.length; i++){
    heart[i].addEventListener('click', function (){
        if(this.className === 'likeBtn'){
            this.setAttribute('src', 'images/heart-solid.svg');
            this.setAttribute('class', 'likeBtn liked');
        }else{
            this.setAttribute('src', 'images/heart-regular.svg');
            this.setAttribute('class', 'likeBtn');
        }
    },false);
}
var imgCol = document.getElementsByClassName('product-img');
for (i=0; i< imgCol.length; i++){
    var item = imgCol[i];
    var product = item.dataset.product;
    switch(product){
        case "1001":
            item.style['background-image'] = 'url(https://bit.ly/2QvsT63)';
        break;
        case "10001":
            item.style['background-image'] = 'url(https://bit.ly/2zBjQuq)';
        break;
        case "10002":
            item.style['background-image'] = 'url(https://bit.ly/2zBDAxX)';
        break;
        case "10003":
            item.style['background-image'] = 'url(https://bit.ly/2zKOP7w)';
        break;
    }
}
