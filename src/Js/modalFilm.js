import {getMovieDetails, getTrailerVideo} from './API';
import * as basicLightbox from 'basiclightbox';

import {onClickSliderCard} from './renderGlide'
import { trailer } from './trailer';

const backdrop = document.querySelector('.backdrop-movie');
const modalEl = document.querySelector('.modal');
const list = document.querySelector('.list');
const btnCloseModal = document.querySelector('.button-close')


list.addEventListener('click', onKlickModal);


function onKlickModal(evt) {
    evt.preventDefault()
    
    const id = evt.target.id;
    console.log(id)
   modalId(id)
   
   backdrop.classList.remove('is-hidden')
   
  document.body.classList.add('modal-open');
document.addEventListener('keydown', event => closeModalEscape(event));

}

export async function modalId(id) {

  try {
    await  getMovieDetails(id).then(data =>{
      renderModal(data);
  })

await  getTrailerVideo(id).then(data =>{ 
    trailerRender(data)
  });
  
  } catch (error) {}
  
}
export function renderModal(data) {
    const backdropImage = data.backdrop_path;
    if (backdropImage !== null) {
      const background = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
      backdrop.style.backgroundImage = `url('${background}')`;
      backdrop.style.backgroundSize = 'cover';
      backdrop.style.backgroundPosition = '50% 50%';
    } 

}
btnCloseModal.addEventListener('click', closeModal )
function closeModal (event) {
    document.removeEventListener('keydown', event => closeModalEscape(event));
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    const iframeContainerRef = document.querySelector('.modal-trailer');
    iframeContainerRef.innerHTML = '';
    
    
}

function closeModalEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

   
   
  function trailerRender(data) {
    
    // const instance = basicLightbox.create(
    //   `<div class="modal-trailer__backdrop">
    //         <iframe class="iframe" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
    //           src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" >
    //         </iframe>
    //   </div>`,
    //   {
    //     onShow: () => {
    //       window.addEventListener('keydown', onKeydownEsc);
    //     },
    //     onClose: () => {
    //       window.removeEventListener('keydown', onKeydownEsc);
    //     },
    //   },
    // );
    const trailer = `https://www.youtube.com/embed/${data.results[0].key}`;
    const instance = `<iframe
        class="modal__iframe"
        src="${trailer}"
        title="Smart Home. Kitchen"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`
      
    const iframeContainerRef = document.querySelector('.modal-trailer');
    iframeContainerRef.innerHTML = instance;
   
  }