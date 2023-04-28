
import {renderTrending} from './render'
import {fetchDataCearch} from './API'
import { createPagination } from './pagination';
import {showNotification} from './Notification'
const form = document.querySelector('.form');
const list = document.querySelector('.list');



form.addEventListener('submit', onSearch)


function onSearch(evt) {
    console.log( evt)
    evt.preventDefault();
    query = evt.target.elements.query.value.trim();
    let page = 1;



    try {

        if (!query) {
            showNotification('empty')
            return
          }


        fetchDataCearch(query, page).then(data => {
            renderTrending(data.results)
           
            const pagination = createPagination(data.total_results, data.total_pages);
            pagination.on('beforeMove', ({ page }) => {
               list.innerHTML = '';

                fetchDataCearch(query, page)
                .then(data => renderTrending(data.results))
               
            });

        })
    } catch (error) {}
        
        
}



// function onSearch(evt) {
//     evt.preventDefault();
//     let qwery = '';
//     qwery = evt.target.qwery.value.trim();
//   list.innerHTML = '';

//   getFirstPageEv(qwery, page)
//     }
   

//     async function getFirstPageEv(qwery, page) {
//         try {
//             const data = await fetchDataCearch(qwery, page);
//             console.log( data)
//             pagination.reset(data.total_results)
//             renderTrending(data.results)
            
//         } catch (error) {}
//     }
//     async function getNextPageElement(qwery, page) {
//         try {
//             const data = await fetchDataCearch(qwery, page);
//             renderTrending(data.results)
            
//         } catch (error) {}
            
//     }
   
//     pagination.on('afterMove', (event) => {
//         const currentPage = event.page;
       
//         getNextPageElement(currentPage, qwery)
//     });

