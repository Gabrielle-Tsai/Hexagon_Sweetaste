var el = document.getElementsByClassName('like');

for (i=0; i< el.length; i++) {
    el[i].addEventListener('click',likeit,false);
};

function likeit(e){
    e.preventDefault();
    alert('I like it!');
};