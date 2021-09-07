
// gnb를 누르면 바디가 밀리는 함수
let checkBox = document.getElementById('icon_gnb').checked;
let main = document.querySelector('main')

function clickGnb() {
  let checkBox = document.getElementById('icon_gnb').checked;
  if (document.getElementById('icon_gnb').checked){
  main.style.transform = 'translate3d(240px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  main.style.transformStyle = 'preserve-3d';
    document.querySelector('.logo').style.marginLeft = '240px';
  } else {
  main.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  main.style.transformStyle = 'preserve-3d';
  document.querySelector('.logo').style.marginLeft = '0';
}
}


// program_area 이미지에 커서 올리면 마우스 바뀌는거...
const circle = document.querySelector(".cursorCircle");

document.addEventListener("mouseMove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});

// scrollEvent
const bg = document.querySelectorAll('.bg_thumBox')
const programItem = document.querySelectorAll('.program_item')
const bannerBox = document.querySelector('.banner_box')
const titleBaneer = document.querySelector('.title_banner')
const descBaneer = document.querySelector('.desc_banner')

console.log(bg[1]);
console.log(programItem);

window.addEventListener('scroll', function() {
  let userScroll = window.pageYOffset;
  if ( userScroll >= programItem[0].offsetTop - programItem[0].clientHeight) {
    bg[0].classList.add('animate__slideOutRight')
  } 
  });

window.addEventListener('scroll', function() {
  let userScroll = window.pageYOffset;
  if ( userScroll >= programItem[1].offsetTop - programItem[1].clientHeight) {
    bg[1].classList.add('animate__slideOutRight')
  } 
  });
  
window.addEventListener('scroll', function() {
  let userScroll = window.pageYOffset;
  if ( userScroll >= programItem[2].offsetTop - programItem[2].clientHeight) {
    bg[2].classList.add('animate__slideOutRight')
  } 
  });
window.addEventListener('scroll', function() {
  let userScroll = window.pageYOffset;
  if ( userScroll >= programItem[3].offsetTop - programItem[3].clientHeight) {
    bg[3].classList.add('animate__slideOutRight')
  } 
  });

window.addEventListener('scroll', function() {
  let userScroll = window.pageYOffset;
  if ( userScroll >= bannerBox.offsetTop-bannerBox.clientHeight) {
    descBaneer.classList.add('animate__fadeIn')
    titleBaneer.classList.add('animate__fadeInRight')
  } 
  });