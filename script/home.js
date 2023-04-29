// // const sliderContent = document.getElementById("sliderContent");
// // const arrowLeft = document.getElementById("arrow-left");
// // const arrowRight = document.getElementById("arrow-right");
// // const dotElement = document.getElementById("dot-child");
// // let sliderIndex = 0;

// // const dataSlider = [
// //   {
// //     id: 0,
// //     imageUrl: "../image/slide2.png" ,
// //   },

// //   {
// //     id: 1,
// //     imageUrl: "./image/slide3.png",
// //   },
// //   {
// //     id: 2,
// //     imageUrl: "./image/slide4.png",
// //   },
// // ];

// // function slide() {
// //   sliderContent.innerText = " ";

// //   let slideItem = createDivTag();
// //   let imgItem = createImgTag(dataSlider[sliderIndex]);

// //   let dots = createDots();

// //   slideItem.appendChild(imgItem);
// //   sliderContent.appendChild(slideItem);
// //   sliderContent.appendChild(dots);

// //   console.log(slideItem, imgItem);
// //   dotElement[sliderIndex].classList.add("activeDot");
// //   slide();
// // }

// // function createDivTag() {
// //   let div = document.createElement("div");
// //   return div;
// // }

// // function createImgTag(item) {
// //   let backgroungImageTag = document.createElement("div");
// //   backgroungImageTag.style.backgroundImage = `${item.imageUrl}`;
// //   backgroungImageTag.classList.add("backgroung-image");

// //   return backgroungImageTag;
// // }

// // function createDots() {
// //   let dotParentElement = document.createElement("div");
// //   dotParentElement.classList.add("dot-parent");

// //   dataSlider.forEach((element) => {
// //     let dotItem = document.createElement("div");
// //     dotItem.classList.add("dot-child");
// //     // dotId = Element.id - 1;
// //     dotItem.setAttribute("data-Id", `${element.id - 1}`);
// //     dotId = sliderIndex;
// //     // sliderIndex = dotId;
// //     // slide();
// //     console.log(dotId);
// //     dotParentElement.appendChild(dotItem);
// //   });
// // }

// // function arrowLeftClick() {
// //   if ((sliderIndex = 0)) {
// //     sliderIndex = dataSlider.length - 1;
// //     slide();
// //     return;
// //   }
// //   sliderIndex -= 1;
// //   slide();
// // }

// // function arrowRightClick() {
// //   if ((sliderIndex = dataSlider.length - 1)) {
// //     sliderIndex = 0;
// //     slide();
// //     return;
// //   }
// //   sliderIndex += 1;
// //   slide();
// // }

// // arrowLeft.addEventListener("click", arrowLeftClick);
// // arrowRight.addEventListener("click", arrowRightClick);

// // let navBar = document.getElementById('navBar');

// // window.onscroll = function(){
// //     let top = window.scrollY;
// //     if (top >= 50) {
// //         navBar.classList.add("navBarActive");
// //     }
// //     else{
// //         navBar.classList.remove("navBarActive");
// //     }
// // }

// // ---------------------------splide------------------------------

// var splide = new Splide( '.splide', {

//     direction: 'ttb',
//     height   : '10rem',
//     wheel    : true,
//   } );

// //   splide.mount();

// //   document.addEventListener( 'DOMContentLoaded', function () {
// //     new Splide( '#image-carousel', {
// //       heightRatio: 0.5,
// //     } ).mount();
// //   } );

// //   new Splide( '.splide', {
// //     type   : 'loop',
// //     perPage: 4,
// //     width: '100%',
// //   } );

// // new Splide(".splide", {
// //   type: "slide",
// //   perPage: 3,
// // //   direction: "ttb",
// //   paginationDirection: "ltr",
// //   arrows: true,
// //   paggination: true,
// //   arrowPath: "m15.5 0.932-4.3 4.38...",
// //   wheel: true,
// //   releaseWheel: true,
// //   autoplay: true,
// //   interval: 3000,
// //   speed: 1000,
// //   perMove: 1,
// // });
// // splide.mount();

// // var splide = new Splide( '.splide' ).mount();

// // splide.on( 'mounted', function () {
// //   // This won't be executed.
// // } );
// // var splide = new Splide( '.splide' );
// // splide.on( 'mounted', function () {
// //   // This will be executed.
// // } );

// // splide.mount();

// // import { EventInterface } from "@splidejs/splide";

// // export function MyTransition(Splide, Components) {
// //   const { bind } = EventInterface(Splide);
// //   const { Move } = Components;
// //   const { list } = Components.Elements;

// //   let endCallback;

// //   function mount() {
// //     bind(list, "transitionend", (e) => {
// //       if (e.target === list && endCallback) {
// //         // Removes the transition property
// //         cancel();

// //         // Calls the `done` callback
// //         endCallback();
// //       }
// //     });
// //   }

// //   function start(index, done) {
// //     // Converts the index to the position
// //     const destination = Move.toPosition(index, true);

// //     // Applies the CSS transition
// //     list.style.transition = "transform 800ms cubic-bezier(.44,.65,.07,1.01)";

// //     // Moves the carousel to the destination.
// //     Move.translate(destination);

// //     // Keeps the callback to invoke later.
// //     endCallback = done;
// //   }

// //   function cancel() {
// //     list.style.transition = "";
// //   }

// //   return {
// //     mount,
// //     start,
// //     cancel,
// //   };
// // }




// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide('#splide', {
//       type: 'loop',
//       perPage: 3,
//       focus: 'center',
//       autoplay: true,
//       interval: 8000,
//       flickMaxPages: 3,
//       updateOnMove: true,
//       pagination: false,
//       padding: '10%',
//       throttle: 300,
//       breakpoints: {
//         1440: {
//           perPage: 1,
//           padding: '30%'
//         }
//       }
//     }).mount();
//   });
  