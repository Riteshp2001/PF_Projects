let start = document.querySelector(".container");
let vid = start.querySelector("video");
let text = start.querySelector("h1");

let end = document.querySelector(".last_container");
let endtxt = end.querySelector("h1");

//playing with scroll magic

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 45000,
  triggerElement: start,
  triggerHook: 0,
})
  .setPin(start)
  .addTo(controller);

let txtmagic= TweenMax.fromTo(text,9,{opacity:1},{opacity:0});
let Txtscene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: start,
  triggerHook: 0,
})
  .setTween(text)
  .addTo(controller);


let fastfwd = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(()=>{
  delay += (scrollpos - delay) * fastfwd;
  vid.currentTime = delay;
},33.3333);