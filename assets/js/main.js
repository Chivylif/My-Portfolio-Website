AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
let options = {
  startAngle: -1.55,
  value: 0.75,
  size: 150,
  fill: {
    gradient: ["#e0f780", "white"],
  },
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.6,
});
$(".bootstrap .bar").circleProgress({
  value: 0.7,
});
$(".php .bar").circleProgress({
  value: 0.8,
});
$(".bootstrap .bar").circleProgress({
  value: 0.8,
});
$(".asp .bar").circleProgress({
  value: 0.7,
});
