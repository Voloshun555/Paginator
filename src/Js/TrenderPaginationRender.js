import {fetchData} from './API'
import {renderTrending} from './render'
import { createPagination } from './pagination';


fetchData().then(data => {
    console.log(data)
    renderTrending(data.results)
  
    const pagination = createPagination(data.total_results, data.total_pages);
    pagination.on('beforeMove', ({ page }) => {
      
        fetchData(page).then(data => renderTrending(data.results) )
       
    });
  });
  
// const page = pagination.getCurrentPage();

// async function getFirstPageEv(page) {
//     try {
//         const data = await fetchData(page);
//         console.log( data)
//         pagination.reset(data.total_results)
//         renderTrending(data.results)
        
//     } catch (error) {}
// }
// async function getNextPageElement(page) {
//     try {
//         const data = await fetchData(page);
//         renderTrending(data.results)
        
//     } catch (error) {}
        
// }

// getFirstPageEv(page)

// pagination.on('afterMove', (event) => {
//     const currentPage = event.page;
   
//     getNextPageElement(currentPage, page)
// });
