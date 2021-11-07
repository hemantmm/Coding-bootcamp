const next= document.querySelector('.next');
const prev=document.querySelector('.prev');
const slide=document.querySelectorAll('.slide');

let index=0;
display(index);

function display(index){
    slide.forEach((slid)=>{
        slid.style.display='none';
    });
    slide[index].style.display='flex';
}

function nextSlide(){
    index++;
    if(index>slide.length-1){
        index=0;
    }
    display(index);
}

function prevSlide(){
    index--;
    if(index<0){
        index=slide.length-1;
    }
    display(index);
}

next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);