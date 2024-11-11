// Today header handling
// keep at bottom
gsap.registerPlugin(ScrollTrigger) 
ScrollTrigger.create({
    trigger: "#page5",
    start: "top top",
    endTrigger: "#page6",
    end: "bottom bottom-=75",
    pin: true,
    pinSpacing: false
  });
  
  // keep at top
  ScrollTrigger.create({
    trigger: "#page5",
    start: "bottom+=75",
    endTrigger: "html",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false
  });
  
  
  // Tomorrow header handling
  // keep at bottom
  ScrollTrigger.create({
    trigger: "#page6",
    start: "top bottom-=75",
    endTrigger: "#page5",
    end: "bottom bottom-=75",
    pin: true,
    pinSpacing: false
  });
  
  // keep at top
  ScrollTrigger.create({
    trigger: "#page6",
    start: "top top+=150",
    endTrigger: "html",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false
  });
  