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