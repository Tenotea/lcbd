// Nav slider
const hamburgerIcon = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');
const clearfield = document.querySelector('.clearfield');
const exit = document.querySelector('.active-navigation');

hamburgerIcon.addEventListener('click', ()=>{
  navBar.classList.toggle('active-navigation');

  navBar.addEventListener('click', ()=>{
    navBar.classList.remove('active-navigation');
  })
})


// Carousel
const bannerContainer = document.querySelector('.banner-container');

bannerContainer.style.transform = 'translateX(-100vmax)';

window.addEventListener('load', ()=>{
  let translateValue = -200;
    const animator = setInterval(()=>{
    bannerContainer.style.transform = 'translateX(' + translateValue + 'vmax)';
    translateValue -= 100;
    if(translateValue === -700){
      translateValue = -100;
      bannerContainer.style.transform = 'translateX(0vmax)';
      bannerContainer.style.transition = 'none';
    } else{
      bannerContainer.style.transition = '1s transform ease-in-out';
    }
  }, 4000)
})


