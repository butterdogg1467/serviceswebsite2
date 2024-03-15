document.addEventListener('DOMContentLoaded', function() {

let portfolioImg1 = document.querySelector('#portfolioimg1')
let portfolioImg2 = document.querySelector('#portfolioimg2')
let portfolioImg3 = document.querySelector('#portfolioimg3')

portfolioImg1.addEventListener('mouseenter', function() {
    portfolioImg1.style.animation = 'shadow-pop-tr1 0.3s ease forwards';
})  

portfolioImg1.addEventListener('mouseleave', function() {
    portfolioImg1.style.animation = 'shadow-pop-tr-reverse1 0.3s ease reverse';
})  

portfolioImg2.addEventListener('mouseenter', function() {
    portfolioImg2.style.animation = 'shadow-pop-tr2 0.3s ease forwards';
})  

portfolioImg2.addEventListener('mouseleave', function() {
    portfolioImg2.style.animation = 'shadow-pop-tr-reverse2 0.3s ease reverse';
})

portfolioImg3.addEventListener('mouseenter', function() {
    portfolioImg3.style.animation = 'shadow-pop-tr3 0.3s ease forwards';
})  

portfolioImg3.addEventListener('mouseleave', function() {
    portfolioImg3.style.animation = 'shadow-pop-tr-reverse3 0.3s ease reverse';
})

})