gsap.registerPlugin(ScrollTrigger);

//Produkt side//

gsap.from(".produkt1", {
    x: -100,
    scrollTrigger: {
        trigger: ".produkt1",
        start: "top 85%",
        end: "bottom 65%",
        // markers: true,
    }
});


gsap.from(".produkt2", {
    x: 100,
    scrollTrigger: {
        trigger: ".produkt2",
        start: "center 90%",
        end: "bottom 95%",
        // markers: true,
    }
});


gsap.from(".produkt3", {
    x: -100,
    scrollTrigger: {
        trigger: ".produkt3",
        start: "center 80%",
        end: "bottom 95%",
        // markers: true,
    }
});


gsap.from(".produkt4", {
    x: 100,
    scrollTrigger: {
        trigger: ".produkt4",
        start: "center 90%",
        end: "bottom 95%",
        // markers: true,
    }
});


gsap.from(".produkt5", {
    x: -100,
    scrollTrigger: {
        trigger: ".produkt5",
        start: "center 80%",
        end: "bottom 95%",
        // markers: true,
    }
});

// Produkt section hero forside //

const sections = document.querySelectorAll(".ball-4");

sections.forEach((section) => {
    const divs = section.querySelectorAll("div");
    gsap.fromTo(divs, {opacity: 0, y: 50}, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "center center",
        // markers: true,
        scrub: true,
      },
    });
  });

// Parallax effect //
//snitte sektion//

gsap.from(".ball-3", {
    yPercent: 30,
    stagger: 0.3,
    ease: "none",
    scrollTrigger: {
      trigger: ".ball-3",
      start: "top 80%",
      end: "bottom center",
      scrub: true,
    //   markers: true,
    },
  });


//Zoom-fade-in//
// Konkurrende sektion//

gsap.from(".ball-2", {
  opacity: 0,
  scale: 0.3,
  duration: 2,
  ease: "none",
  scrollTrigger: {
    trigger: ".ball-2",
    start: "top 95%",
    end: "center center",
    scrub: true,
    // markers: true,
  },
});
