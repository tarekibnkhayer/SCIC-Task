import axios from "axios";

const server = axios.create({
    baseURL: 'https://job-task-server-tarek-ibn-khayers-projects.vercel.app',
    withCredentials: true
})

const useServer = () => {
    return server;
};

export default useServer;