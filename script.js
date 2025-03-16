// Initialize Locomotive Scroll for smooth scrolling
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   multiplier: 1,
// });

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
  
    // Toggle navbar on hamburger click
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  });
  
  // GSAP animation for navbar links
  gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });
  
  // GSAP animation for the main content in the video section
  gsap.from(".content h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: "power3.out",
  });
  gsap.from(".content p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    ease: "power3.out",
  });
  
  // GSAP animation for production section elements
  gsap.from(".production-item", {
    scrollTrigger: {
      trigger: ".production-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
    },
    opacity: 0,
    y: 30,
    stagger: 0.3,
    ease: "power2.out",
  });
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  const frames = {
    currentIndex: 0,
    maxIndex: 313,
  };
  
  let imagesLoaded = 0;
  const images = [];
  
  function preloadImages() {
    for (var i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.png`;
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === frames.maxIndex) {
          loadImage(frames.currentIndex);
          startAnimation();
        }
      };
      images.push(img);
    }
  }
  
  function loadImage(index) {
    if (index >= 0 && index <= frames.maxIndex) {
      const img = images[index];
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
  
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
  
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;
  
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  }
  
  function startAnimation() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#parentt",
        start: "top top",
        scrub: 2,
        end: "bottom bottom",
      },
    });
  
    tl.to(frames, {
      currentIndex: frames.maxIndex,
      onUpdate: function () {
        loadImage(Math.floor(frames.currentIndex));
      },
    });
  }
  
  window.addEventListener("resize", () => {
    loadImage(frames.currentIndex);
  });
  
  preloadImages();
  