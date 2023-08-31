import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8a7e02d9201040799138c906fb23721f'
    }
})