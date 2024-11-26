import axios from 'axios';

// Config
import envs from 'config/enviroments';

const instance = axios.create({
  baseURL: envs.baseApiUrl
});

export default instance;
