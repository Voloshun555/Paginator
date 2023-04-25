import axios from "axios";


const API_Key = 'ab2cf7e1a236e63f2cc161486f07b55f';
const URL = 'https://api.themoviedb.org/3'

export async function fetchData(page) {
    const response = await axios.get(`${URL}/trending/movie/day?api_key=${API_Key}&language=en-US&page=${page}`);
     return response.data;
 }
 
 export async function fetchDataCearch(qwery, page) {
     const response = await axios.get(`${URL}/search/movie?api_key=${API_Key}&language=en-US&query=${qwery}&page=${page}`);
      return response.data;
  }