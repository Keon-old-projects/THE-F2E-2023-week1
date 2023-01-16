gsap.registerPlugin(ScrollTrigger, TextPlugin);


// gsap的timeline方法會返回一個timeline物件
const timeline = gsap.timeline()

$(function () {
    gsap.to(".loop", {
        xPercent: "-50", 
        ease: "none",
        duration: 10,
        repeat: -1,
      });

});