//show  search input while mobile view

const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');


searchicon1.addEventListener('click',function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

// show search input while desktop view 

const searchicon2 = document.querySelector("#searchicon2");
const srchicon2 = document.querySelector("#srchicon2");
const search2 = document.querySelector("#searchinput2");

searchicon2.addEventListener("click", function () {
  search2.style.display = "flex";
  searchicon2.style.display = "none";
});


// show bar & XMarks Vice versa

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');
// show navbar
bar.addEventListener('click',()=>{
    setTimeout(()=>{
        cross.style.display = 'block';
        bar.style.display = 'none';

    },200);
     headerbar.style.right = '0%';
})

cross.addEventListener('click',()=>{
    cross.style.display = 'none';
    bar.style.display = "block";
    headerbar.style.right = '-100%';
})



