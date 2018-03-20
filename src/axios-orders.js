import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-c2da3.firebaseio.com/'
});

export default instance;
