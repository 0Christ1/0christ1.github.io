const intro = document.querySelector('.intro');
const text1 = document.getElementById('hello');
const text2 = document.getElementById('name');
const text3 = document.getElementById('profolio');
const text4 = document.getElementById('lowdown');

//scroll magic
const controller = new ScrollMagic.Controller();

//video scenes
const video = intro.querySelector('video');
let videoScene = new ScrollMagic.Scene({
  duration: 120000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

//video animation
let accelAmount = 0.5;
let scrollPos = 0;
let delay = 0;

videoScene.on('update', (e) => {
  scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  video.currentTime = delay;
}, 128.8);

// text animation
const timeline = new TimelineMax();
// const text1 = (text.innerText = 'My name is Christ not Jesus :)');
timeline
  .fromTo(text1, 3, { opacity: 1 }, { opacity: 0 })
  .fromTo(text2, 3, { opacity: 0 }, { opacity: 1 })
  .to(text2, 3, { opacity: 0 })
  .fromTo(text3, 3, { opacity: 0 }, { opacity: 1 })
  .to(text3, 3, { opacity: 0 })
  .fromTo(text4, 3, { opacity: 0 }, { opacity: 1 })
  .to(text4, 3, { opacity: 0 });

// text scene
let textScene = new ScrollMagic.Scene({
  duration: 21000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);
