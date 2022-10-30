console.clear();

function megaMenu__init() {

  $(".menuList01 > li:nth-child(1)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu01 > div").addClass("active");
    $(".topBar .inner .mega  .megaMenu > div > .img-box").addClass("active");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega .megaMenu01").addClass("active");
  });
  $(".menuList01 > li:nth-child(2)").mouseenter(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".bg-white").addClass("active");
    $(".topBar .inner .mega").addClass("on");
    $(".topBar .inner .mega .megaMenu > ul").addClass("active");
    $(".topBar .inner .mega  .megaMenu02").addClass("active");
  });
  
  $(".topBar .inner .mega").mouseleave(function(){
    $(".topBar .inner .mega  .megaMenu").removeClass("active");
    $(".topBar .inner .mega").removeClass("on");
    $(".bg-white").removeClass("active");
  });
  
}

megaMenu__init();
// megaMenuUp__init();

