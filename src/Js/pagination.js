import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {

    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true};
  
  export const pagination = new Pagination('pagination', options);


 