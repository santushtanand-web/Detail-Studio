

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elemc=  document.querySelector("#elem-container")
var fixed =  document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
   fixed.style.display = "block";
}
)
elemc.addEventListener("mouseleave",function()
{
    fixed.style.display = "none"
}
)


var elems =document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        console.log(image)
        fixed.style.backgroundImage =`url(${image})`
    
    })

})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // Today header handling
// keep at bottom
//gsap.registerPlugin(ScrollTrigger) 
//ScrollTrigger.create({
   // trigger: "#page5",
  //   start: "top bottom+=150",
  //   endTrigger: "#page6",
  //   end: "bottom bottom-=75",
  //   pin: true,
  //   pinSpacing: true,
  //   markers:true,
  // });
  
  // // keep at top
  // ScrollTrigger.create({
  //   trigger: "#page5",
  //   start: "bottom+=75",
  //   endTrigger: "html",
  //   end: "bottom bottom",
  //   pin: true,
  //   pinSpacing: true,
  //   // markers:true,
  // });
  
  
  // // Tomorrow header handling
  // // keep at bottom
  // ScrollTrigger.create({
  //   trigger: "#page6",
  //   start: "top bottom-=75",
  //   endTrigger: "#page5",
  //   end: "bottom bottom-=75",
  //   pin: true,
  //   pinSpacing: true,
  //   zIndex:5555,
  //   // markers:true,
  // });
  
  // // keep at top
  // ScrollTrigger.create({
  //   trigger: "#page6",
  //   start: "top top+=150",
  //   endTrigger: "html",
  //   end: "bottom bottom",
  //   pin: true,
  //   pinSpacing: true,
  //   // markers:true,
  // });
  
  