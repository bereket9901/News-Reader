import axios from "axios";
const News_API_URL = 'https://newsdata.io/api/1';

export const fetchNewsData = async () => {
    try {
        const response = await axios.get(`${News_API_URL}/latest?apikey=pub_5533188998eb573b65585fb63581120da41e4&country=us`);
        return response.data.results;
    }
    catch {
        throw new Error('Failed to fetch news data');
    }
}

export const fetchNewsDataSearch =async (searchKey) => {
    try {
        const response = await axios.get(`${News_API_URL}/latest?apikey=pub_5533188998eb573b65585fb63581120da41e4&language=en&qInMeta=${searchKey}`);
        return response.data.results;
    }
    catch {
        throw new Error('Failed to fetch news data');
    }
}
export const fetchNewsDataCategory =async (category) => {
    try {
        const response = await axios.get(`${News_API_URL}/latest?apikey=pub_5533188998eb573b65585fb63581120da41e4&language=en&category=${category}`);
        return response.data.results;
    }
    catch {
        throw new Error('Failed to fetch news data');
    }
}
export const fetchNewsDataCountry =async (country) => {
    try {
        const response = await axios.get(`${News_API_URL}/latest?apikey=pub_5533188998eb573b65585fb63581120da41e4&language=en&country=${country}`);
        return response.data.results;
    }
    catch {
        throw new Error('Failed to fetch news data');
    }
}

export const fetchNewsDataCategoryThree =async (category) => {
    try {
        const response = await axios.get(`${News_API_URL}/latest?apikey=pub_5533188998eb573b65585fb63581120da41e4&language=en&category=${category}&size=3`);
        return response.data.results;
    }
    catch {
        throw new Error('Failed to fetch news data');
    }
}