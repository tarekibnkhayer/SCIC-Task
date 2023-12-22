import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

const useServer = () => {
    return server;
};

export default useServer;