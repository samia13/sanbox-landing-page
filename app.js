let toggle = document.querySelector(".mobile-menu");
let body = document.querySelector("body");
function toggleMenu() {
  body.classList.toggle("open");
}
toggle.addEventListener("click", toggleMenu);

document.querySelectorAll("nav li").forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
document.querySelector("nav i").addEventListener("click", toggleMenu);
window.addEventListener("load", startAnimation);

function startAnimation() {
  // hero elements
  const heroTitle = document.querySelector("#hero h1");
  const heroP = document.querySelector("#hero P");
  const heroBtn = document.querySelectorAll("#hero button");
  // services elements
  const statsImg = document.querySelectorAll("#services .stats .statImg");
  const servicesImg = document.querySelectorAll("#services .media img");
  // about elements
  const aboutVideo = document.querySelector("#about video");
  const aboutFeatures = document.querySelectorAll("#about .service");
  // testimonials elements
  const TestimonialImgs = document.querySelectorAll("#testimonial .images img");
  const TestimonialNumber = document.querySelectorAll("#testimonial .numbers");
  // contact elements
  const contactTitle = document.querySelector("#contact h2");
  const contactbtn = document.querySelectorAll("#contact button");

  // gsap Timelines
  const heroTl = gsap.timeline({ duration: 0.7 });
  heroTl
    .from(heroTitle, { autoAlpha: 0, y: -50 })
    .from(heroP, { autoAlpha: 0, y: -50 }, "-=0.4")
    .from(heroBtn, { autoAlpha: 0, y: -50, stagger: 0.1 }, "-=0.4");
  gsap.from(statsImg, {
    autoAlpha: 0,
    x: -50,
    stagger: 0.1,
    scrollTrigger: {
      trigger: statsImg,
    },
  });
  servicesImg.forEach((el) =>
    gsap.from(el, {
      autoAlpha: 0,
      x: -50,
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: el,
      },
    })
  );
  gsap.from(aboutVideo, {
    autoAlpha: 0,
    y: -50,
    delay: 0.5,
    scrollTrigger: {
      trigger: aboutVideo,
    },
  });
  gsap.from(aboutFeatures, {
    autoAlpha: 0,
    y: -50,
    stagger: 0.2,
    delay: 0.5,
    scrollTrigger: {
      trigger: aboutFeatures,
    },
  });

  const testimonialsTL = gsap.timeline({ duration: 0.7 });
  testimonialsTL.from(TestimonialImgs, {
    autoAlpha: 0,
    x: -50,
    delay: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: TestimonialImgs,
    },
    onComplete: () => {
      gsap.from(TestimonialNumber, {
        autoAlpha: 0,
        x: -50,
        duration: 0.7,
      });
    },
  });

  const contactTl = gsap.timeline({ duration: 0.7 });
  contactTl
    .from(contactTitle, {
      autoAlpha: 0,
      x: -50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: contactTitle,
      },
    })
    .from(contactbtn, {
      autoAlpha: 0,
      y: -50,
      stagger: 0.1,
    });
}
