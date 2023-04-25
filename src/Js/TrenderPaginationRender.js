import {fetchData} from './API'
import {renderTrending} from './render'
import {pagination} from './pagination'

const page = pagination.getCurrentPage();

async function getFirstPageEv(page) {
    try {
        const data = await fetchData(page);
        console.log( data)
        pagination.reset(data.total_results)
        renderTrending(data.results)
        
    } catch (error) {}
}
async function getNextPageElement(page) {
    try {
        const data = await fetchData(page);
        renderTrending(data.results)
        
    } catch (error) {}
        
}

getFirstPageEv(page)

pagination.on('afterMove', (event) => {
    const currentPage = event.page;
   
    getNextPageElement(currentPage, page)
});
