
import { Notify } from 'notiflix/build/notiflix-notify-aio';

  export   const showNotification = (status) => {
    if (status === 'failure') {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    }
    if (status === 'end') {
        Notify.info('We`re sorry, but you`ve reached the end of search results.')
    }
    if (status === 'empty') {
        Notify.info('Fill the form for searching')
    }
  }
  