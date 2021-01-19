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

var banner = document.getElementsByClassName('bg-banner');
var checkPage = banner[0].getAttribute('id');
var changebg = document.getElementById(checkPage);
console.log(changebg);
switch(checkPage) {
    case "indexBanner":
        break;
    case "productBanner":
        changebg.style['background-image'] = 'url(images/productBanner.jfif)';
        break;

}