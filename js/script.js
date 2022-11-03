console.clear();

function MegaMenu__init() {

  $(".menuList01 > li:nth-child(1)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu01 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu01").addClass("active");
  });
  $(".menuList01 > li:nth-child(2)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu02 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu02").addClass("active");
  });
  $(".menuList01 > li:nth-child(3)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu03 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu03").addClass("active");
  });
  $(".menuList01 > li:nth-child(4)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu04 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu04").addClass("active");
  });
  $(".menuList01 > li:nth-child(5)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu05 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu05").addClass("active");
  });
  $(".menuList01 > li:nth-child(6)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu06 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu06").addClass("active");
  });
  $(".menuList01 > li:nth-child(7)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu07 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu07").addClass("active");
  });
  $(".menuList01 > li:nth-child(8)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu08 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu08").addClass("active");
  });
  $(".menuList01 > li:nth-child(9)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu09 > div").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu09").addClass("active");
  });

  
  $(".topBar .inner .mega").mouseleave(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".topBar .inner .mega").removeClass("on");
    $(".topBar .inner .mega .megaMenu > ul").removeClass("active");
    $(".bg-white").removeClass("active");
  });
  
}

function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    }
  });

  $(".slider-box-1").mouseenter(function(){
    $(".slider-box-1 .navi_bar").addClass("on");
    $(".slider-box-1 .navigation-wrapper").addClass("on");
    $(".slider-box-1 .swiper-pagination").addClass("on");
  });
  $(".slider-box-1").mouseleave(function(){
    $(".slider-box-1 .navi_bar").removeClass("on");
    $(".slider-box-1 .navigation-wrapper").removeClass("on");
    $(".slider-box-1 .swiper-pagination").removeClass("on");    
  });

}

function SliderBox2__init() {
  const swiper = new Swiper(".slider-box-2 .swiper", {
    direction: 'vertical',
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-2 .swiper-pagination"
    },
    slidesPerView: 1.54, // 한 화면에 보일 슬라이드 개수, 소수 가능, effect 설정 시 적용 안 됨(coverflow는 가능)
    spaceBetween: 10, // 슬라이드 간의 간격 설정
    centeredSlides : true, //첫번째 슬라이드 중간에 오게 설정
    autoplay: {
      delay: 5000, // 5초마다 슬라이드 넘김
      disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
    },
    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-2 .swiper-button-next",
      prevEl: ".slider-box-2 .swiper-button-prev"
    }
  });
}

function CardBoxImg__hide() {
  $(".content_2 .inner .card-box").mouseenter(function(){
    let $this = $(this);
    $this.siblings().addClass("hide");
  });
  $(".content_3 .inner .card-box").mouseenter(function(){
    let $this = $(this);
    $this.siblings().addClass("hide");
  });

}
function CardBoxImg__show() {
  $(".content_2 .inner .card-box").mouseleave(function(){
    let $this = $(this);
    $this.siblings().removeClass("hide");
  });
  $(".content_3 .inner .card-box").mouseleave(function(){
    let $this = $(this);
    $this.siblings().removeClass("hide");
  });
}
function SliderBox3__init() {
  const swiper = new Swiper(".slider-box-3 .swiper", {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2.2, // 한 화면에 보일 슬라이드 개수, 소수 가능, effect 설정 시 적용 안 됨(coverflow는 가능)
    // If we need pagination
    pagination: {
      el: ".slider-box-3 .swiper-pagination"
    },
    // centeredSlides : true, //첫번째 슬라이드 중간에 오게 설정
    autoplay: {
      delay: 5000, // 5초마다 슬라이드 넘김
      disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-3 .swiper-button-next",
      prevEl: ".slider-box-3 .swiper-button-prev"
    }
  });
}



MegaMenu__init();
SliderBox1__init();
SliderBox2__init();
CardBoxImg__hide();
CardBoxImg__show();
SliderBox3__init();