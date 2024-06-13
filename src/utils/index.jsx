import axios from 'axios';

// const productionUrl = 'https://server-mederma.onrender.com/api/';

const productionUrl = 'https://bewildered-lilith-elzolhefa-5cb51e96.koyeb.app/api/';

export const customFetch = axios.create({
  baseURL: productionUrl,
});