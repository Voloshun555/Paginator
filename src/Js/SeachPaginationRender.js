import {pagination} from './pagination'
import {renderTrending} from './render'
import {fetchDataCearch} from './API'

const page = pagination.getCurrentPage();
const form = document.querySelector('.form');
const list = document.querySelector('.list');


form.addEventListener('submit', onSearch)


function onSearch(evt) {
    evt.preventDefault();
    let qwery = '';
    qwery = evt.target.qwery.value.trim();
  list.innerHTML = '';

  getFirstPageEv(qwery, page)
    }
   

    async function getFirstPageEv(qwery, page) {
        try {
            const data = await fetchDataCearch(qwery, page);
            console.log( data)
            pagination.reset(data.total_results)
            renderTrending(data.results)
            
        } catch (error) {}
    }
    async function getNextPageElement(qwery, page) {
        try {
            const data = await fetchDataCearch(qwery, page);
            renderTrending(data.results)
            
        } catch (error) {}
            
    }
   
    pagination.on('afterMove', (event) => {
        const currentPage = event.page;
       
        getNextPageElement(currentPage, qwery)
    });

