import {fetchData} from './API'
import Glide from '@glidejs/glide';
import {config} from './glide';



 onGlide(); 
 const IMG = 'https://image.tmdb.org/t/p/w500';

 async function onGlide() {    
   fetchData().then(data => {  
    addFilmGlide(data.results);
    
      })

    }


    function addFilmGlide(data) {
const glidMarkap = document.querySelector('.glide__slides');
const markap = data.map((data) => 
  `
      <li class="glide__slide">
      <img class='slider-js__img' src="${IMG}${data.poster_path}" alt="${data.title}" />
      </li>`
).join('')
glidMarkap.innerHTML = markap
const glide = new Glide('.glide', config)
    .mount()
}











// function addFilmGlide(data) {
//     console.log(data)
//     const glideDom = document.querySelector('.container__slider')
//     const markup = `
//     <div class="glide">
//           <div class="glide__track" data-glide-el="track">
//               <ul class="glide__slides" id="glide__slides"></ul>
//           </div>
//           <div class="glide__arrows" data-glide-el="controls">
//               <button class="glide__arrow glide__arrow--left" data-glide-dir="<">&#5130;</button>
//               <button class="glide__arrow glide__arrow--right" data-glide-dir=">">&#5125;</button>
//           </div>
//       </div>`;
// console.log(glideDom)
//       glideDom.insertAdjacentHTML('beforeend', markup)
//       const slidesContainer = document.querySelector('.glide__slides');

//      const rrr = data.map(el => {
//         return `<li class="glide__slide glide__slide--main glide__slide--clone" id="${el.id}">
//         <img class="cards__image-poster" src="${IMG}${el.poster_path}" alt="${el.title}">
//       </li>`
//       }).join('')
      
//       slidesContainer.innerHTML = rrr
      
     
// };

// const glide = new Glide('.glide', {
//     type: 'slider',
//     startAt: 0,
//     perView: 10,
//     autoplay: 3000,
//     // hoverpause: true,
//     bound: true,
//     breakpoints: {
//       1280: {
//         perView: 7,
//       },
//       768: {
//         perView: 6,
//       },
//       480: {
//         perView: 3,
//       },
//       320: {
//         perView: 2,
//       },
//     },
//   });
//   glide.mount();



// // import Glide from '@glidejs/glide';

// const refs = {
//   lisrTopFilms: document.querySelector('.glide__slides'),
//   item: document.querySelectorAll('.glide__slide'),
// };
// const IMG = 'https://image.tmdb.org/t/p/w500';

// getMovies();
// async function getMovies() {
//   await  fetchData()
//     .then(data => {
//         render(data.results);
//     })
// }

//  function render(data) {
//   const mar = data.map(({poster_path, title, id}) => 
//    `<li class="glide__slide"> <img class='slider-js__img' src="${IMG}${poster_path}" alt="${title}" id='${id}'/></li>`).join('');
// }



