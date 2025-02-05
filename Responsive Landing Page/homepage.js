let scroll=0;
let isScrollingdown=true;
let tween =gsap.to(".marquee-part",{
  xPercent:-100,
  repeat:-1,
  duration:5,
  ease:"linear",
})
.totalProgress(0.5)
let marquee=document.querySelector(".marquee-part")
marquee.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - marquee.offsetLeft;
  const walk = (x - startX) * 3;
  marquee.scrollLeft = scrollLeft - walk;
//skew maate
  let diff = marquee.scrollLeft - lastScrollLeft;
  let speed = diff * 0.40;
  marquee.style.transform = `skew(${speed}deg)`;
  lastScrollLeft = marquee.scrollLeft;
});

window.onscroll = () => {
  marquee.style.left = `${-window.scrollX}px`;
};




let nav = document.querySelector(".glassin-nav")
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

document.addEventListener("DOMContentLoaded", function() {

gsap.registerPlugin(ScrollTrigger);



// const sections = [
//   { trigger: ".medq_landing", color: "linear-gradient(to left, #ff6e7f, #bfe9ff)" }, // Gradient for the medq_landing section

//   { trigger: ".review-page", color: "#204e51" }, // Light grey for the review-page section
//   { trigger: "footer", color: "#d1e1e7" } // Light grey for the footer section
// ];


// sections.forEach((section, index) => {
//   gsap.to("body", {
//     backgroundColor: section.color,
//     scrollTrigger: {
//       trigger: section.trigger,
//       start: index === 0 ? "top top" : "top bottom", 
//       end: index === sections.length  ? "bottom bottom" : "bottom top", 
// scrub:true,
   
//     },
//     ease: "none"
//   });
// });



});

const handleMouseMove = (e) => {
    let x = e.clientX - nav.getBoundingClientRect().left;
    let y = e.clientY - nav.getBoundingClientRect().top;

    nav.style.setProperty("--x", x + "px");
    nav.style.setProperty("--y", y + "px");
};

nav.addEventListener("mousemove", throttle(handleMouseMove, 100));



document.addEventListener('mousemove', (event) => {
    const medicine = document.querySelector('.medicine');
    const rect = medicine.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = ((event.clientX - centerX) / rect.width) * 10;  
    const offsetY = ((event.clientY - centerY) / rect.height) * 10; 
    medicine.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
});


document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  const flyingImages = document.querySelectorAll('.flying-img');

  flyingImages.forEach(img => {
   
    const initialZ = Math.random() * 1000 - 500;

    gsap.fromTo(img,
      { 
        z: initialZ,
        opacity: 0,
        y: () => Math.random() * 100 - 50, 
        x: () => Math.random() * 100 - 50  
      },
      {
        z: 0,
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)', 
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom 20%",
          scrub: 1,
          onUpdate: (self) => {

            const maxBlur = 10; 
            const currentZ = gsap.getProperty(img, "z");
            const blurAmount = Math.min(Math.max(-currentZ / 25, 0), maxBlur);
            gsap.set(img, { filter: `blur(${blurAmount}px)` });
          }
        }
      }
    );
  });
});