let mobileRightcontent = document.querySelector('.mobileRightcontent');
let ipadContent = document.querySelector('.ipadContent');
let leftLink = document.querySelector('.leftLink');
let rightLink = document.querySelector('.rightLink');
let mobileLink = document.querySelector('.mobileLink');
let ipadLink = document.querySelector('.ipadLink');

leftLink.addEventListener('click', linksOnSwiper);
rightLink.addEventListener('click', linksOnSwiper);
mobileLink.addEventListener('click', linksOnSwiper);
ipadLink.addEventListener('click', linksOnSwiper);

let bottomImg = document.querySelector('.bottomImg');
//console.log(bottomImg);
let rightContent = document.querySelector('.rightContent');
let leftContent = document.querySelector('.leftContent');
let sliderContent = [
    'LEARN MORE',
    'CUSTOMERS',
    'ECOSYSTEM',
    'CREATORS',
    'BRANDS',
];
let mobileContent = [
    'ECOSYSTEM',
    'CREATORS',
    'BRANDS',
    'LEARN MORE',
    'CUSTOMERS',
];
let iPadContent = [
    'CUSTOMERS',
    'ECOSYSTEM',
    'CREATORS',
    'BRANDS',
    'LEARN MORE',
];
let bottomSlide;
var swiper = new Swiper('.swiper-container', {
    on: {
        slideChange: function(e) {
            leftLink.a = '';
            rightLink.a = '';
            mobileLink.a = '';
            ipadLink.a = '';
            //https://github.com/nolimits4web/Swiper/pull/1697
            var realIndex = e.slides
                .eq(e.activeIndex)
                .attr('data-swiper-slide-index');
            //console.log(realIndex);
            var currentSlide = e.slides[realIndex];
            /*if (realIndex!=0){
                    bottomSlide=e.slides[realIndex-1];
                  }else {
                    bottomSlide=bottomImg;
                  }*/

            //console.log(bottomSlide);
            let ipadIndex = Number(realIndex) - 1;
            console.log(ipadIndex);
            if (ipadIndex === -1) {
                ipadIndex = 4;
            }
            let rightIndex = Number(realIndex) + 1;
            //var currentRight= e.slides[rightIndex];
            let leftIndex = Number(realIndex) + 2;
            console.log(rightIndex);
            if (leftIndex === 5) {
                leftIndex = 0;
            }
            if (leftIndex === 6) {
                leftIndex = 1;
                rightIndex = 0;
            }
            // var currentLeft= e.slides[leftIndex];
            //bottomSlide.className += " slide-bottom ";

            // bottomSlide.classList.add("bottomImg");

            rightContent.innerHTML = sliderContent[rightIndex];
            leftContent.innerHTML = sliderContent[leftIndex];
            mobileRightcontent.innerHTML = mobileContent[leftIndex];
            ipadContent.innerHTML = iPadContent[ipadIndex];
            linksOnSwiper(sliderContent[rightIndex], rightLink);
            linksOnSwiper(sliderContent[leftIndex], leftLink);
            linksOnSwiper(mobileContent[leftIndex], mobileLink);
            linksOnSwiper(iPadContent[ipadIndex], ipadLink);

            console.log(currentSlide);
            //console.log(sliderContent[rightIndex]);
            console.log(mobileContent[leftIndex]);
            //console.log(realIndex);

            // do whatever

            /*on: {
                   slideChange: function () {
                  let index_currentSlide = swiper.realIndex,
                  currentSlide = swiper.slides[index_currentSlide]
                  //https://stackoverflow.com/questions/32945099/how-to-detect-current-slide-in-swiper-js
                  currentSlide.style.background = "red";
                  console.log(currentSlide);*/
        },
    },

    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            /* when window >=0px - webflow mobile landscape/portriat */
            slidesPerView: 1,
            spaceBetween: 65,
        },
        767: {
            /* when window >= 767px - webflow tablet */
            slidesPerView: 2,
            spaceBetween: 30,
        },
        988: {
            /* when window >= 988px - webflow desktop */
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



function linksOnSwiper(values, link) {
    switch (values) {
        case 'LEARN MORE':
            link.href = 'about.html';

            break;
        case 'CUSTOMERS':
            link.href = 'https://settr.com/';

            break;
        case 'ECOSYSTEM':
            link.href = 'about.html';
            break;
        case 'CREATORS':
            link.href = 'influencers.html';
            break;
        case 'BRANDS':
            link.href = 'brands.html';
            break;
    }
}