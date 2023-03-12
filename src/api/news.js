import axios from './axios';

const fetchAllNews = (data) => {
    return axios.post('/news', {
        search : data?.search,
        sources : data?.sources,
        language : data?.language,
        category : data?.category,
        from: data?.from,
        to: data?.to
    });
}


export default {
    fetchAllNews
}