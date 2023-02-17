gsap.registerPlugin(ScrollTrigger, TextPlugin);

// gsap的timeline方法會返回一個timeline物件
const timeline = gsap.timeline();

$(function () {
  // alert(123);
  // section1******************************************************

  timeline
    .from(".section1 .wrapper", {
      x: -1500,
      y: 1500,
      duration: 1.75,
    })
    .from(
      ".section1 h1",
      {
        x: 1500,
        y: -1500,
        duration: 1.75,
      },
      "<"
    );

  // gsap.from(".section1 .wrapper", { x: -1500, duration: 1 });
  // gsap.from(".section1 .wrapper", { y: 1500, duration: 1 });

  // section 2******************************************************
  $(".section2 main").hide();

  ScrollTrigger.create({
    trigger: ".section2 main",
    start: "top 50%",
    // markers: true,

    onEnter: function animated(e) {
      $(".section2 main").show();
      let x = -100;

      timeline
        .fromTo(
          ".section2 main",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.5 }
        )
        .fromTo(
          ".section2 [alt='1']",
          { x: x, y: 0, opacity: 0, visibility: "hidden" },
          {
            duration: 1,
            delay: 0.2,
            x: 0,
            y: 0,
            visibility: "visible",
            opacity: "1",
            ease: "expo",
            overwrite: "auto",
          }
        )
        .fromTo(
          ".section2 [alt='2']",
          { x: -x, y: 0, opacity: 0, visibility: "hidden" },
          {
            duration: 1,
            delay: 0.2,
            x: 0,
            y: 0,
            visibility: "visible",
            opacity: "1",
            ease: "expo",
            overwrite: "auto",
          }
        )
        .fromTo(
          ".section2 [alt='3']",
          { x: x, y: 0, opacity: 0, visibility: "hidden" },
          {
            duration: 1,
            delay: 0.2,
            x: 0,
            y: 0,
            visibility: "visible",
            opacity: "1",
            ease: "expo",
            overwrite: "auto",
          }
        );
    },

    // 隱藏所有 .section2 [alt] 元素
  });

  // section3 文字跑馬燈******************************************************
  gsap.to(".loop", {
    xPercent: "-50",
    ease: "none",
    duration: 10,
    repeat: -1,
  });
});
